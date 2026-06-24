"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const inputClass =
  "mt-2 w-full rounded-md border border-[#CBD5E1] bg-white px-4 py-3 text-sm text-[#0F172A] outline-none transition placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100";

const labelClass = "text-sm font-bold text-[#0F172A]";

const errorClass = "mt-2 text-sm font-semibold text-[#DC2626]";

export default function RegisterPage() {
  const [submittedName, setSubmittedName] = useState("");
  const [serverMessage, setServerMessage] = useState("");
  const [apiError, setApiError] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      accountType: "Savings",
      nationality: "Indian",
    },
  });

  async function onSubmit(data) {
    setApiError("");
    setServerMessage("");

    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      mobile: data.mobile,
      dateOfBirth: data.dateOfBirth,
      nationality: data.nationality,
      accountType: data.accountType,
      initialDeposit: data.initialDeposit ? Number(data.initialDeposit) : 0,
      address: data.address,
      password: data.password,
      termsAccepted: data.termsAccepted === true,
    };

    try {
      const response = await fetch(`${API_URL}/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        setApiError(result?.message || "Registration failed. Please try again.");
        return;
      }

      setSubmittedName(`${data.firstName} ${data.lastName}`);
      setServerMessage(result?.message || "Registration submitted successfully.");
      reset({
        accountType: "Savings",
        nationality: "Indian",
      });
      router.push("/KYC");
    } catch (error) {
      setApiError("Unable to connect to the registration server. Please check the backend.");
      console.error("Registration error:", error);
    }
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <section className="bg-[#061A40] text-white">
        <Navbar />
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-normal text-[#93C5FD]">
              Customer Registration
            </p>
            <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
              Open a Chulbul Bank account
            </h1>
            <p className="mt-4 max-w-2xl leading-7 text-blue-100">
              Start with basic profile details. KYC upload and employee review
              come after this registration step.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[1fr_360px] lg:px-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm"
        >
          <div className="flex flex-col justify-between gap-4 border-b border-[#E2E8F0] pb-5 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-extrabold">Applicant Details</h2>
              <p className="mt-1 text-sm text-[#475569]">
                Fields marked with * are required.
              </p>
            </div>
            <span className="w-fit rounded-md bg-[#FEF3C7] px-3 py-2 text-sm font-bold text-[#B45309]">
              Status: Draft
            </span>
          </div>

          {submittedName && (
            <div className="mt-5 rounded-md border border-[#BBF7D0] bg-[#DCFCE7] px-4 py-3 text-sm font-bold text-[#15803D]">
              {serverMessage || `Registration captured for ${submittedName}. Next step: KYC upload.`}
            </div>
          )}
          {apiError && (
            <div className="mt-5 rounded-md border border-[#FECACA] bg-[#FEE2E2] px-4 py-3 text-sm font-bold text-[#B91C1C]">
              {apiError}
            </div>
          )}

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="firstName">
                First Name *
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Enter first name"
                className={inputClass}
                {...register("firstName", {
                  required: "First name is required.",
                  minLength: {
                    value: 2,
                    message: "First name must be at least 2 characters.",
                  },
                })}
              />
              {errors.firstName && (
                <p className={errorClass}>{errors.firstName.message}</p>
              )}
            </div>

            <div>
              <label className={labelClass} htmlFor="lastName">
                Last Name *
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Enter last name"
                className={inputClass}
                {...register("lastName", {
                  required: "Last name is required.",
                })}
              />
              {errors.lastName && (
                <p className={errorClass}>{errors.lastName.message}</p>
              )}
            </div>

            <div>
              <label className={labelClass} htmlFor="email">
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                placeholder="customer@example.com"
                className={inputClass}
                {...register("email", {
                  required: "Email address is required.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address.",
                  },
                })}
              />
              {errors.email && (
                <p className={errorClass}>{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className={labelClass} htmlFor="mobile">
                Mobile Number *
              </label>
              <input
                id="mobile"
                type="tel"
                placeholder="10 digit mobile number"
                className={inputClass}
                {...register("mobile", {
                  required: "Mobile number is required.",
                  pattern: {
                    value: /^[6-9]\d{9}$/,
                    message: "Enter a valid 10 digit mobile number.",
                  },
                })}
              />
              {errors.mobile && (
                <p className={errorClass}>{errors.mobile.message}</p>
              )}
            </div>

            <div>
              <label className={labelClass} htmlFor="dateOfBirth">
                Date of Birth *
              </label>
              <input
                id="dateOfBirth"
                type="date"
                className={inputClass}
                {...register("dateOfBirth", {
                  required: "Date of birth is required.",
                })}
              />
              {errors.dateOfBirth && (
                <p className={errorClass}>{errors.dateOfBirth.message}</p>
              )}
            </div>

            <div>
              <label className={labelClass} htmlFor="nationality">
                Nationality *
              </label>
              <select
                id="nationality"
                className={inputClass}
                {...register("nationality", {
                  required: "Nationality is required.",
                })}
              >
                <option value="Indian">Indian</option>
                <option value="Other">Other</option>
              </select>
              {errors.nationality && (
                <p className={errorClass}>{errors.nationality.message}</p>
              )}
            </div>

            <div>
              <label className={labelClass} htmlFor="accountType">
                Account Type *
              </label>
              <select
                id="accountType"
                className={inputClass}
                {...register("accountType", {
                  required: "Account type is required.",
                })}
              >
                <option value="Savings">Savings Account</option>
                <option value="Current">Current Account</option>
                <option value="Student">Student Account</option>
              </select>
              {errors.accountType && (
                <p className={errorClass}>{errors.accountType.message}</p>
              )}
            </div>

            <div>
              <label className={labelClass} htmlFor="initialDeposit">
                Initial Deposit
              </label>
              <input
                id="initialDeposit"
                type="number"
                min="0"
                placeholder="Optional amount"
                className={inputClass}
                {...register("initialDeposit", {
                  min: {
                    value: 0,
                    message: "Initial deposit cannot be negative.",
                  },
                })}
              />
              {errors.initialDeposit && (
                <p className={errorClass}>{errors.initialDeposit.message}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className={labelClass} htmlFor="address">
                Residential Address *
              </label>
              <textarea
                id="address"
                rows="4"
                placeholder="Enter full residential address"
                className={inputClass}
                {...register("address", {
                  required: "Residential address is required.",
                  minLength: {
                    value: 10,
                    message: "Address must be at least 10 characters.",
                  },
                })}
              />
              {errors.address && (
                <p className={errorClass}>{errors.address.message}</p>
              )}
            </div>

            <div>
              <label className={labelClass} htmlFor="password">
                Password *
              </label>
              <input
                id="password"
                type="password"
                placeholder="Create password"
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

            <div>
              <label className={labelClass} htmlFor="confirmPassword">
                Confirm Password *
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm password"
                className={inputClass}
                {...register("confirmPassword", {
                  required: "Confirm your password.",
                  validate: (value) =>
                    value === getValues("password") || "Passwords do not match.",
                })}
              />
              {errors.confirmPassword && (
                <p className={errorClass}>{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>

          <label className="mt-6 flex gap-3 rounded-md border border-[#E2E8F0] bg-[#F8FAFC] p-4 text-sm text-[#475569]">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4"
              {...register("termsAccepted", {
                required: "You must accept the terms and project rules.",
              })}
            />
            <span>
              I agree to the Chulbul Bank{" "}
              <Link
                href="/term&conditions"
                className="font-bold text-[#2563EB] hover:text-[#1D4ED8]"
              >
                Terms & Conditions
              </Link>{" "}
              and understand this is a project demo.
            </span>
          </label>
          {errors.termsAccepted && (
            <p className={errorClass}>{errors.termsAccepted.message}</p>
          )}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/login"
              className="text-sm font-bold text-[#2563EB] hover:text-[#1D4ED8]"
            >
              Already registered? Login
            </Link>
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-md bg-[#2563EB] px-6 py-3 text-sm font-extrabold text-white shadow-md transition hover:bg-[#1D4ED8] disabled:cursor-not-allowed disabled:bg-[#94A3B8]"
            >
              Continue to KYC
            </button>
          </div>
        </form>

        <aside className="space-y-5">

          <div className="rounded-lg border border-[#E2E8F0] bg-[#061A40] p-6 text-white shadow-sm">
            <h2 className="text-xl font-extrabold">Next Steps</h2>
            <div className="mt-5 space-y-4 text-sm text-blue-100">
              {["KYC Upload", "Pending Approval", "Employee Review", "Account Active"].map(
                (step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white/10 font-extrabold text-[#93C5FD]">
                      {index + 1}
                    </span>
                    <span className="font-semibold">{step}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
