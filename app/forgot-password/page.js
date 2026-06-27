"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Navbar from "../components/Navbar";
import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiCheckCircle,
  FiArrowLeft,
  FiShield,
} from "react-icons/fi";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const inputClass =
  "mt-2 w-full rounded-md border border-[#CBD5E1] bg-white px-4 py-3 text-sm text-[#0F172A] outline-none transition placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100";

const labelClass = "text-sm font-bold text-[#0F172A]";

const errorClass = "mt-2 text-sm font-semibold text-[#DC2626]";

// Step 1 — enter email
// Step 2 — enter OTP
// Step 3 — enter new password
// Step 4 — success

export default function ForgotPasswordPage() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [apiError, setApiError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Step 1 form
  const emailForm = useForm();

  // Step 2 form
  const otpForm = useForm();

  // Step 3 form
  const passwordForm = useForm();

  // ── Step 1: send OTP ──────────────────────────────────────
  async function onEmailSubmit(data) {
    setApiError("");
    try {
      const res = await fetch(`${API_URL}/api/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email }),
      });
      const result = await res.json();
      if (!res.ok) {
        setApiError(result?.message || "Could not send reset code. Try again.");
        return;
      }
      setEmail(data.email);
      setStep(2);
    } catch {
      setApiError("Unable to reach the server. Please try again.");
    }
  }

  // ── Step 2: verify OTP ───────────────────────────────────
  async function onOtpSubmit(data) {
    setApiError("");
    try {
      const res = await fetch(`${API_URL}/api/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: data.otp }),
      });
      const result = await res.json();
      if (!res.ok) {
        setApiError(result?.message || "Invalid or expired code. Try again.");
        return;
      }
      setStep(3);
    } catch {
      setApiError("Unable to reach the server. Please try again.");
    }
  }

  // ── Step 3: reset password ───────────────────────────────
  async function onPasswordSubmit(data) {
    setApiError("");
    if (data.newPassword !== data.confirmPassword) {
      passwordForm.setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match.",
      });
      return;
    }
    try {
      const res = await fetch(`${API_URL}/api/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, newPassword: data.newPassword }),
      });
      const result = await res.json();
      if (!res.ok) {
        setApiError(result?.message || "Password reset failed. Try again.");
        return;
      }
      setStep(4);
    } catch {
      setApiError("Unable to reach the server. Please try again.");
    }
  }

  const stepLabels = ["Enter email", "Verify code", "New password", "Done"];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      {/* Header */}
      <section className="bg-[#061A40] text-white">
        <Navbar />
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-normal text-[#93C5FD]">
              Account Recovery
            </p>
            <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
              Reset your password
            </h1>
            <p className="mt-4 max-w-2xl leading-7 text-blue-100">
              Follow the steps below to regain access to your Chulbul Bank
              account securely.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[1fr_360px] lg:px-10">

        {/* Main card */}
        <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">

          {/* Step indicator */}
          <div className="mb-8 flex items-center gap-0">
            {stepLabels.map((label, index) => {
              const num = index + 1;
              const isActive = step === num;
              const isDone = step > num;
              return (
                <div key={label} className="flex flex-1 items-center">
                  <div className="flex flex-col items-center gap-1.5">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full border-2 text-sm font-extrabold transition-all ${
                        isDone
                          ? "border-[#16A34A] bg-[#DCFCE7] text-[#16A34A]"
                          : isActive
                          ? "border-[#2563EB] bg-[#2563EB] text-white"
                          : "border-[#CBD5E1] bg-white text-[#94A3B8]"
                      }`}
                    >
                      {isDone ? <FiCheckCircle size={16} /> : num}
                    </div>
                    <span
                      className={`text-xs font-bold ${
                        isActive
                          ? "text-[#2563EB]"
                          : isDone
                          ? "text-[#16A34A]"
                          : "text-[#94A3B8]"
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                  {index < stepLabels.length - 1 && (
                    <div
                      className={`mb-5 h-0.5 flex-1 ${
                        isDone ? "bg-[#16A34A]" : "bg-[#E2E8F0]"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* API error */}
          {apiError && (
            <div className="mb-5 rounded-md border border-[#FECACA] bg-[#FEF2F2] px-4 py-3 text-sm font-bold text-[#B91C1C]">
              {apiError}
            </div>
          )}

          {/* ── Step 1: Email ── */}
          {step === 1 && (
            <form onSubmit={emailForm.handleSubmit(onEmailSubmit)} className="space-y-5">
              <div>
                <h2 className="text-2xl font-extrabold">Enter your email</h2>
                <p className="mt-1 text-sm text-[#475569]">
                  We will send a one-time reset code to your registered email address.
                </p>
              </div>

              <div>
                <label className={labelClass} htmlFor="email">
                  Registered Email Address *
                </label>
                <div className="relative">
                  <FiMail
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8] mt-1"
                  />
                  <input
                    id="email"
                    type="email"
                    placeholder="customer@example.com"
                    className={`${inputClass} pl-9`}
                    {...emailForm.register("email", {
                      required: "Email address is required.",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address.",
                      },
                    })}
                  />
                </div>
                {emailForm.formState.errors.email && (
                  <p className={errorClass}>
                    {emailForm.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between pt-2">
                <Link
                  href="/login"
                  className="flex items-center gap-1.5 text-sm font-bold text-[#2563EB] hover:text-[#1D4ED8]"
                >
                  <FiArrowLeft size={14} />
                  Back to login
                </Link>
                <button
                  type="submit"
                  disabled={emailForm.formState.isSubmitting}
                  className="rounded-md bg-[#2563EB] px-6 py-3 text-sm font-extrabold text-white shadow-md transition hover:bg-[#1D4ED8] disabled:cursor-not-allowed disabled:bg-[#94A3B8]"
                >
                  {emailForm.formState.isSubmitting ? "Sending..." : "Send reset code"}
                </button>
              </div>
            </form>
          )}

          {/* ── Step 2: OTP ── */}
          {step === 2 && (
            <form onSubmit={otpForm.handleSubmit(onOtpSubmit)} className="space-y-5">
              <div>
                <h2 className="text-2xl font-extrabold">Enter the reset code</h2>
                <p className="mt-1 text-sm text-[#475569]">
                  A 6-digit code was sent to{" "}
                  <span className="font-bold text-[#0F172A]">{email}</span>.
                  Check your inbox.
                </p>
              </div>

              <div>
                <label className={labelClass} htmlFor="otp">
                  6-digit Code *
                </label>
                <input
                  id="otp"
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  placeholder="000000"
                  className={`${inputClass} tracking-[0.5em] text-center text-xl font-extrabold`}
                  {...otpForm.register("otp", {
                    required: "Reset code is required.",
                    pattern: {
                      value: /^\d{6}$/,
                      message: "Enter the 6-digit code sent to your email.",
                    },
                  })}
                />
                {otpForm.formState.errors.otp && (
                  <p className={errorClass}>
                    {otpForm.formState.errors.otp.message}
                  </p>
                )}
              </div>

              <p className="text-sm text-[#475569]">
                Did not receive it?{" "}
                <button
                  type="button"
                  onClick={() => {
                    setApiError("");
                    emailForm.handleSubmit(onEmailSubmit)();
                  }}
                  className="font-bold text-[#2563EB] hover:text-[#1D4ED8]"
                >
                  Resend code
                </button>
              </p>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => { setApiError(""); setStep(1); }}
                  className="flex items-center gap-1.5 text-sm font-bold text-[#2563EB] hover:text-[#1D4ED8]"
                >
                  <FiArrowLeft size={14} />
                  Change email
                </button>
                <button
                  type="submit"
                  disabled={otpForm.formState.isSubmitting}
                  className="rounded-md bg-[#2563EB] px-6 py-3 text-sm font-extrabold text-white shadow-md transition hover:bg-[#1D4ED8] disabled:cursor-not-allowed disabled:bg-[#94A3B8]"
                >
                  {otpForm.formState.isSubmitting ? "Verifying..." : "Verify code"}
                </button>
              </div>
            </form>
          )}

          {/* ── Step 3: New Password ── */}
          {step === 3 && (
            <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)} className="space-y-5">
              <div>
                <h2 className="text-2xl font-extrabold">Set a new password</h2>
                <p className="mt-1 text-sm text-[#475569]">
                  Choose a strong password you have not used before.
                </p>
              </div>

              <div>
                <label className={labelClass} htmlFor="newPassword">
                  New Password *
                </label>
                <div className="relative">
                  <input
                    id="newPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create new password"
                    className={`${inputClass} pr-10`}
                    {...passwordForm.register("newPassword", {
                      required: "New password is required.",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters.",
                      },
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 mt-1 text-[#94A3B8] hover:text-[#475569]"
                  >
                    {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                  </button>
                </div>
                {passwordForm.formState.errors.newPassword && (
                  <p className={errorClass}>
                    {passwordForm.formState.errors.newPassword.message}
                  </p>
                )}
              </div>

              <div>
                <label className={labelClass} htmlFor="confirmPassword">
                  Confirm New Password *
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirm ? "text" : "password"}
                    placeholder="Repeat new password"
                    className={`${inputClass} pr-10`}
                    {...passwordForm.register("confirmPassword", {
                      required: "Please confirm your new password.",
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 mt-1 text-[#94A3B8] hover:text-[#475569]"
                  >
                    {showConfirm ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                  </button>
                </div>
                {passwordForm.formState.errors.confirmPassword && (
                  <p className={errorClass}>
                    {passwordForm.formState.errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => { setApiError(""); setStep(2); }}
                  className="flex items-center gap-1.5 text-sm font-bold text-[#2563EB] hover:text-[#1D4ED8]"
                >
                  <FiArrowLeft size={14} />
                  Back
                </button>
                <button
                  type="submit"
                  disabled={passwordForm.formState.isSubmitting}
                  className="rounded-md bg-[#2563EB] px-6 py-3 text-sm font-extrabold text-white shadow-md transition hover:bg-[#1D4ED8] disabled:cursor-not-allowed disabled:bg-[#94A3B8]"
                >
                  {passwordForm.formState.isSubmitting ? "Saving..." : "Reset password"}
                </button>
              </div>
            </form>
          )}

          {/* ── Step 4: Success ── */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="flex flex-col items-center gap-4 py-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#DCFCE7]">
                  <FiCheckCircle size={32} className="text-[#16A34A]" />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-[#0F172A]">
                    Password reset successfully
                  </h2>
                  <p className="mt-2 text-sm text-[#475569]">
                    Your password has been updated. You can now log in with your
                    new password.
                  </p>
                </div>
              </div>

              <div className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-4">
                <div className="flex items-start gap-3">
                  <FiShield size={18} className="mt-0.5 shrink-0 text-[#2563EB]" />
                  <div className="text-sm text-[#475569]">
                    <p className="font-bold text-[#0F172A]">Keep your account safe</p>
                    <p className="mt-1">
                      If you did not request this change, contact support immediately.
                      Never share your password with anyone.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/login"
                className="flex w-full items-center justify-center gap-2 rounded-md bg-[#2563EB] px-6 py-3 text-sm font-extrabold text-white shadow-md transition hover:bg-[#1D4ED8]"
              >
                <FiLock size={16} />
                Go to login
              </Link>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-5">
          {/* Progress card */}
          <div className="rounded-lg border border-[#E2E8F0] bg-[#061A40] p-6 text-white shadow-sm">
            <h2 className="text-xl font-extrabold">Recovery steps</h2>
            <div className="mt-5 space-y-4 text-sm text-blue-100">
              {[
                { label: "Enter email", desc: "Verify your account" },
                { label: "Verify code", desc: "6-digit code from email" },
                { label: "New password", desc: "Choose a strong password" },
                { label: "Done", desc: "Back to banking" },
              ].map((s, index) => {
                const num = index + 1;
                const isDone = step > num;
                const isActive = step === num;
                return (
                  <div key={s.label} className="flex items-start gap-3">
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md font-extrabold ${
                        isDone
                          ? "bg-[#16A34A] text-white"
                          : isActive
                          ? "bg-[#2563EB] text-white"
                          : "bg-white/10 text-[#93C5FD]"
                      }`}
                    >
                      {isDone ? <FiCheckCircle size={15} /> : num}
                    </span>
                    <div>
                      <p className={`font-semibold ${isActive ? "text-white" : isDone ? "text-[#86EFAC]" : ""}`}>
                        {s.label}
                      </p>
                      <p className="text-xs text-blue-200">{s.desc}</p>
                    </div>
                    {isActive && (
                      <span className="ml-auto rounded-md bg-[#2563EB]/30 px-2 py-0.5 text-xs font-bold text-[#93C5FD]">
                        Now
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Security notice */}
          <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <FiShield size={18} className="text-[#2563EB]" />
              <h2 className="text-lg font-extrabold text-[#0F172A]">Security notice</h2>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-[#475569]">
              <li className="flex items-start gap-2">
                <FiCheckCircle size={14} className="mt-0.5 shrink-0 text-[#16A34A]" />
                Reset codes expire in 10 minutes.
              </li>
              <li className="flex items-start gap-2">
                <FiCheckCircle size={14} className="mt-0.5 shrink-0 text-[#16A34A]" />
                Chulbul Bank will never ask for your code over phone or chat.
              </li>
              <li className="flex items-start gap-2">
                <FiCheckCircle size={14} className="mt-0.5 shrink-0 text-[#16A3  4A]" />
                Contact support if you did not request a reset.
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-4 flex w-full items-center justify-center rounded-md border border-[#2563EB] px-4 py-2.5 text-sm font-bold text-[#2563EB] transition hover:bg-[#EFF6FF]"
            >
              Contact support
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}