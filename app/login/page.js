"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";

const roles = [
  {
    id: "customer",
    label: "Customer",
    helper: "Account dashboard, transfers, statements",
    identifier: "Email, mobile, or account number",
  },
  {
    id: "employee",
    label: "Employee",
    helper: "KYC review and customer lookup",
    identifier: "Employee ID or work email",
  },
  {
    id: "manager",
    label: "Manager",
    helper: "Reports, freezes, transfer approvals",
    identifier: "Manager ID or work email",
  },
  {
    id: "admin",
    label: "Admin",
    helper: "Staff, accounts, analytics",
    identifier: "Admin ID or work email",
  },
];

const securityChecks = [
  "JWT session planned for backend integration",
  "bcrypt password verification in backend layer",
  "No Aadhaar or PAN sign-in fields",
  "Role access checked after authentication",
];

const inputClass =
  "mt-2 w-full rounded-md border border-[#CBD5E1] bg-white px-4 py-3 text-sm text-[#0F172A] outline-none transition placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100";

const errorClass = "mt-2 text-sm font-semibold text-[#DC2626]";

export default function LoginPage() {
  const [activeRole, setActiveRole] = useState("customer");
  const [message, setMessage] = useState("");
  const selectedRole = roles.find((role) => role.id === activeRole);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      rememberMe: true,
    },
  });

  function onSubmit(data) {
    setMessage(
      `${selectedRole.label} sign-in details captured for ${data.identifier}.`
    );
    reset({
      rememberMe: true,
    });
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <section className="bg-[#061A40] text-white">
        <Navbar />
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[0.85fr_1fr] lg:px-10">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-normal text-[#93C5FD]">
              Secure Sign In
            </p>
            <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
              Enter your Chulbul Bank workspace
            </h1>
            <p className="mt-4 leading-7 text-blue-100">
              Customers, employees, managers, and admins sign in from one
              portal. Access opens according to the selected role.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {roles.map((role) => (
              <button
                key={role.id}
                type="button"
                onClick={() => {
                  setActiveRole(role.id);
                  setMessage("");
                }}
                className={`rounded-lg border p-4 text-left transition ${
                  activeRole === role.id
                    ? "border-[#60A5FA] bg-white text-[#0F172A] shadow-lg"
                    : "border-white/10 bg-white/10 text-white hover:bg-white/15"
                }`}
                aria-pressed={activeRole === role.id}
              >
                <span className="text-base font-extrabold">{role.label}</span>
                <span
                  className={`mt-2 block text-sm leading-6 ${
                    activeRole === role.id ? "text-[#475569]" : "text-blue-100"
                  }`}
                >
                  {role.helper}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[1fr_380px] lg:px-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm"
        >
          <div className="flex flex-col justify-between gap-4 border-b border-[#E2E8F0] pb-5 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-normal text-[#2563EB]">
                {selectedRole.label} Login
              </p>
              <h2 className="mt-2 text-2xl font-extrabold">Sign in details</h2>
            </div>
            <span className="w-fit rounded-md bg-[#EFF6FF] px-3 py-2 text-sm font-bold text-[#2563EB]">
              {selectedRole.label}
            </span>
          </div>

          {message && (
            <div className="mt-5 rounded-md border border-[#BBF7D0] bg-[#DCFCE7] px-4 py-3 text-sm font-bold text-[#15803D]">
              {message}
            </div>
          )}

          <div className="mt-6 space-y-5">
            <div>
              <label
                className="text-sm font-bold text-[#0F172A]"
                htmlFor="identifier"
              >
                {selectedRole.identifier} *
              </label>
              <input
                id="identifier"
                type="text"
                placeholder={selectedRole.identifier}
                className={inputClass}
                {...register("identifier", {
                  required: "Login ID is required.",
                  minLength: {
                    value: 3,
                    message: "Login ID must be at least 3 characters.",
                  },
                })}
              />
              {errors.identifier && (
                <p className={errorClass}>{errors.identifier.message}</p>
              )}
            </div>

            <div>
              <label
                className="text-sm font-bold text-[#0F172A]"
                htmlFor="password"
              >
                Password *
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter password"
                className={inputClass}
                {...register("password", {
                  required: "Password is required.",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters.",
                  },
                })}
              />
              {errors.password && (
                <p className={errorClass}>{errors.password.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-3 rounded-md border border-[#E2E8F0] bg-[#F8FAFC] p-4 text-sm text-[#475569] sm:flex-row sm:items-center sm:justify-between">
              <label className="flex items-center gap-2 font-semibold">
                <input
                  type="checkbox"
                  className="h-4 w-4"
                  {...register("rememberMe")}
                />
                Remember this device
              </label>
              <button
                type="button"
                className="w-fit font-bold text-[#2563EB] hover:text-[#1D4ED8]"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-md bg-[#2563EB] px-6 py-3 text-sm font-extrabold text-white shadow-md transition hover:bg-[#1D4ED8] disabled:cursor-not-allowed disabled:bg-[#94A3B8]"
            >
              Sign In
            </button>

            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-[#E2E8F0]" />
              <span className="text-xs font-bold uppercase tracking-normal text-[#94A3B8]">
                Or
              </span>
              <div className="h-px flex-1 bg-[#E2E8F0]" />
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-[#475569]">
            New customer?{" "}
            <Link
              href="/register"
              className="font-extrabold text-[#2563EB] hover:text-[#1D4ED8]"
            >
              Open Account
            </Link>
          </p>
        </form>

        <aside className="space-y-5">
          <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-extrabold">Access Preview</h2>
            <p className="mt-2 text-sm leading-6 text-[#475569]">
              {selectedRole.helper}
            </p>
            <div className="mt-5 rounded-lg bg-[#F8FAFC] p-4">
              <p className="text-sm font-bold text-[#475569]">Selected Role</p>
              <p className="mt-1 text-2xl font-extrabold text-[#2563EB]">
                {selectedRole.label}
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-extrabold">Security Rules</h2>
            <ul className="mt-5 space-y-4">
              {securityChecks.map((check) => (
                <li key={check} className="flex gap-3 text-sm text-[#475569]">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#22C55E]" />
                  <span>{check}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-[#E2E8F0] bg-[#061A40] p-6 text-white shadow-sm">
            <h2 className="text-xl font-extrabold">Demo Access</h2>
            <p className="mt-3 text-sm leading-6 text-blue-100">
              Customer login accepts email, mobile, or generated account number
              after account approval.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
