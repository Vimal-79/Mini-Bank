
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FiCheck } from "react-icons/fi";
import bcrypt from "bcryptjs";
import Navbar from "../components/Navbar";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const FIXED_BCRYPT_SALT = process.env.NEXT_PUBLIC_BCRYPT_SALT || "$2a$10$1234567890123456789012";

const inputClass =
  "mt-2 w-full rounded-md border border-[#CBD5E1] bg-white px-4 py-3 text-sm text-[#0F172A] outline-none transition placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100";

export default function LoginPage() {
  const router = useRouter();
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken") || sessionStorage.getItem("authToken");;
    if (storedToken) {
      router.push("/dashboard");
    }
  }, [router]);

  async function hashPassword(value) {
    if (!value) return "";
    return bcrypt.hash(value, FIXED_BCRYPT_SALT);
  }

  const secureBankingFeatures = [
    { feature: "JWT Authentication", icon: <FiCheck size={14} /> },
    { feature: "Secure Password Storage", icon: <FiCheck size={14} /> },
    { feature: "Protected Transactions", icon: <FiCheck size={14} /> },
    { feature: "Role-Based Access", icon: <FiCheck size={14} /> },
  ];

  const onSubmit = async (data) => {
    setLoginError("");
    setLoginSuccess("");

    const hashedPassword = await hashPassword(data.password);

    try {
      const response = await fetch(`${API_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.loginId,
          password: hashedPassword || data.password,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setLoginError(result?.message || "Login failed. Please try again.");
        return;
      }

      if (result.token && rememberMe) {
        localStorage.setItem("authToken", result.token);
        console.log("Result:", result.token);
        setLoginSuccess("Login successful! Redirecting to dashboard...");
        setTimeout(() => {
          router.push("/dashboard");
        }, 1000);
      }
      else if (result.token && !rememberMe) {
        sessionStorage.setItem("authToken", result.token);
        console.log("Result:", result.token);
        setLoginSuccess("Login successful! Redirecting to dashboard...");
        setTimeout(() => {
          router.push("/dashboard");
        }, 1000);
      }
      else {
        setLoginError("No token received. Please try again.");
      }
    } catch (error) {
      setLoginError("Unable to connect to the server.");
      console.error("Login error:", error);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      {/* Hero */}
      <section className="bg-[#061A40] text-white">
        <Navbar />

        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-[#93C5FD]">
              Secure Login
            </p>

            <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
              Access Your Account
            </h1>

            <p className="mt-4 max-w-2xl text-blue-100 leading-7">
              Login securely to manage your account,
              transfer funds, view transactions,
              and access banking services.
            </p>
          </div>
        </div>
      </section>

      {/* Login Section */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">

          {/* Login Form */}
          <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <div className="border-b border-[#E2E8F0] pb-5">
              <h2 className="text-2xl font-extrabold">
                Welcome Back
              </h2>

              <p className="mt-2 text-sm text-[#475569]">
                Enter your credentials to continue.
              </p>
            </div>

            {loginError && (
              <div className="mt-5 rounded-md border border-[#FECACA] bg-[#FEE2E2] px-4 py-3 text-sm font-bold text-[#B91C1C]">
                {loginError}
              </div>
            )}

            {loginSuccess && (
              <div className="mt-5 rounded-md border border-[#BBF7D0] bg-[#DCFCE7] px-4 py-3 text-sm font-bold text-[#15803D]">
                {loginSuccess}
              </div>
            )}

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-6 space-y-5"
            >
              <div>
                <label className="text-sm font-bold">
                  Email
                </label>

                <input
                  type="text"
                  placeholder="Enter your email"
                  className={inputClass}
                  {...register("loginId", {
                    required: "Email is required",
                  })}
                />

                {errors.loginId && (
                  <p className="mt-2 text-sm font-semibold text-red-600">
                    {errors.loginId.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-bold">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter password"
                  className={inputClass}
                  {...register("password", {
                    required: "Password is required",
                  })}
                />

                {errors.password && (
                  <p className="mt-2 text-sm font-semibold text-red-600">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-[#475569]">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  Remember me
                </label>

                <Link
                  href="/forgot-password"
                  className="text-sm font-bold text-[#2563EB]"
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-md bg-[#2563EB] px-6 py-3 text-sm font-extrabold text-white shadow-md transition hover:bg-[#1D4ED8]"
              >
                Sign In
              </button>

              <div className="text-center text-sm text-[#475569]">
                Don't have an account?{" "}
                <Link
                  href="/register"
                  className="font-bold text-[#2563EB]"
                >
                  Register
                </Link>
              </div>
            </form>
          </div>

          {/* Side Panel */}
          <aside className="space-y-5">

            <div className="rounded-lg bg-[#061A40] p-6 text-white shadow-sm">
              <h2 className="text-xl font-extrabold">
                Secure Banking
              </h2>

              <div className="mt-5 space-y-4 text-sm text-blue-100">
                {secureBankingFeatures.map((item, index) => {
                  return (
                    <div className="flex gap-2 items-center" key={index}>
                      <span className="icon">{item.icon}</span>
                      {item.feature}
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold">
                Need an Account?
              </h3>

              <p className="mt-3 text-sm text-[#475569]">
                Create a Chulbul Bank account and
                start your banking journey today.
              </p>

              <Link
                href="/register"
                className="mt-5 inline-block rounded-md bg-[#2563EB] px-5 py-3 text-sm font-bold text-white hover:bg-[#1D4ED8]"
              >
                Open Account
              </Link>
            </div>

          </aside>
        </div>
      </section>
    </main>
  );
}
