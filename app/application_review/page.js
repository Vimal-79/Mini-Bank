"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { FiClock, FiCheckCircle, FiFileText, FiUser, FiShield, FiAlertCircle } from "react-icons/fi";

export default function PendingApprovalPage() {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const flag = sessionStorage.getItem("fromKYC");
    if (!flag) {
      router.replace("/register");
      return;
    }
    sessionStorage.removeItem("fromKYC");
    setAllowed(true);
  }, []);

  if (!allowed) return null;

  const steps = [
    {
      icon: <FiFileText size={18} />,
      title: "KYC documents submitted",
      desc: "Your identity and address documents have been received.",
      done: true,
    },
    {
      icon: <FiUser size={18} />,
      title: "Employee review",
      desc: "A Chulbul Bank employee will verify your documents.",
      done: false,
    },
    {
      icon: <FiShield size={18} />,
      title: "Compliance check",
      desc: "Your details are cross-checked against bank regulations.",
      done: false,
    },
    {
      icon: <FiCheckCircle size={18} />,
      title: "Account activated",
      desc: "You will be notified once your account is ready.",
      done: false,
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      {/* Header */}
      <section className="bg-[#061A40] text-white">
        <Navbar />
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-normal text-[#93C5FD]">
              Application Status
            </p>
            <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
              Your application is under review
            </h1>
            <p className="mt-4 max-w-2xl leading-7 text-blue-100">
              We have received your registration and KYC documents. Our team
              will review and activate your account shortly.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[1fr_360px] lg:px-10">

        {/* Main card */}
        <div className="space-y-6">

          {/* Status banner */}
          <div className="flex items-start gap-4 rounded-lg border border-[#FEF08A] bg-[#FEFCE8] px-5 py-4 shadow-sm">
            <FiClock size={22} className="mt-0.5 shrink-0 text-[#CA8A04]" />
            <div>
              <p className="text-sm font-extrabold text-[#854D0E]">
                Pending — awaiting employee review
              </p>
              <p className="mt-1 text-sm text-[#713F12]">
                This usually takes 1–2 business days. You do not need to do
                anything right now.
              </p>
            </div>
          </div>

          {/* Review timeline */}
          <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-extrabold text-[#0F172A]">
              Review timeline
            </h2>
            <p className="mt-1 text-sm text-[#475569]">
              Here is where your application stands right now.
            </p>

            <div className="mt-6 space-y-0">
              {steps.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  {/* Connector */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 ${
                        step.done
                          ? "border-[#16A34A] bg-[#DCFCE7] text-[#16A34A]"
                          : index === 1
                          ? "border-[#2563EB] bg-[#EFF6FF] text-[#2563EB]"
                          : "border-[#CBD5E1] bg-white text-[#94A3B8]"
                      }`}
                    >
                      {step.icon}
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`my-1 w-0.5 flex-1 ${
                          step.done ? "bg-[#16A34A]" : "bg-[#E2E8F0]"
                        }`}
                        style={{ minHeight: "32px" }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-6">
                    <p
                      className={`text-sm font-extrabold ${
                        step.done
                          ? "text-[#15803D]"
                          : index === 1
                          ? "text-[#1D4ED8]"
                          : "text-[#94A3B8]"
                      }`}
                    >
                      {step.title}
                      {step.done && (
                        <span className="ml-2 rounded-md bg-[#DCFCE7] px-2 py-0.5 text-xs font-bold text-[#16A34A]">
                          Done
                        </span>
                      )}
                      {index === 1 && !step.done && (
                        <span className="ml-2 rounded-md bg-[#DBEAFE] px-2 py-0.5 text-xs font-bold text-[#2563EB]">
                          In progress
                        </span>
                      )}
                    </p>
                    <p className="mt-1 text-sm text-[#475569]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What to expect */}
          <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-extrabold text-[#0F172A]">
              What happens next
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-[#475569]">
              <li className="flex items-start gap-3">
                <FiCheckCircle size={16} className="mt-0.5 shrink-0 text-[#16A34A]" />
                An employee will review your submitted documents within 1–2 business days.
              </li>
              <li className="flex items-start gap-3">
                <FiCheckCircle size={16} className="mt-0.5 shrink-0 text-[#16A34A]" />
                If additional information is needed, the bank will contact you.
              </li>
              <li className="flex items-start gap-3">
                <FiCheckCircle size={16} className="mt-0.5 shrink-0 text-[#16A34A]" />
                Once approved, your account will be activated and you can log in.
              </li>
            </ul>
          </div>

          {/* Alert — do not submit again */}
          <div className="flex items-start gap-4 rounded-lg border border-[#FECACA] bg-[#FEF2F2] px-5 py-4">
            <FiAlertCircle size={20} className="mt-0.5 shrink-0 text-[#DC2626]" />
            <p className="text-sm text-[#B91C1C]">
              <span className="font-extrabold">Do not register again.</span>{" "}
              Submitting a duplicate application may delay your review. If you
              have concerns, contact support.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-5">
          {/* Steps card */}
          <div className="rounded-lg border border-[#E2E8F0] bg-[#061A40] p-6 text-white shadow-sm">
            <h2 className="text-xl font-extrabold">Your journey</h2>
            <div className="mt-5 space-y-4 text-sm text-blue-100">
              {[
                { label: "KYC Upload", done: true },
                { label: "Pending Approval", done: false, active: true },
                { label: "Employee Review", done: false },
                { label: "Account Active", done: false },
              ].map((step, index) => (
                <div key={step.label} className="flex items-center gap-3">
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-md font-extrabold ${
                      step.done
                        ? "bg-[#16A34A] text-white"
                        : step.active
                        ? "bg-[#2563EB] text-white"
                        : "bg-white/10 text-[#93C5FD]"
                    }`}
                  >
                    {step.done ? <FiCheckCircle size={16} /> : index + 1}
                  </span>
                  <span
                    className={`font-semibold ${
                      step.active ? "text-white" : step.done ? "text-[#86EFAC]" : ""
                    }`}
                  >
                    {step.label}
                  </span>
                  {step.active && (
                    <span className="ml-auto rounded-md bg-[#2563EB]/30 px-2 py-0.5 text-xs font-bold text-[#93C5FD]">
                      Now
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Help card */}
          <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <h2 className="text-lg font-extrabold text-[#0F172A]">Need help?</h2>
            <p className="mt-2 text-sm text-[#475569]">
              If you have not heard back in 2 business days, reach out to our support team.
            </p>
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