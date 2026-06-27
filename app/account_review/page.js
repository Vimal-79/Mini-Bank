"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "../components/Navbar";
import {
  FiCheckCircle,
  FiSend,
  FiCreditCard,
  FiDownload,
  FiFileText,
  FiArrowRight,
  FiShield,
  FiUser,
} from "react-icons/fi";

export default function AccountActivePage() {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const flag = sessionStorage.getItem("accountActivated");
    if (!flag) {
      router.replace("/register");
      return;
    }
    sessionStorage.removeItem("accountActivated");
    setAllowed(true);
  }, []);

  if (!allowed) return null;

  const quickActions = [
    { label: "Send Money", href: "/services", icon: <FiSend size={20} /> },
    { label: "Pay Bills", href: "/services", icon: <FiCreditCard size={20} /> },
    { label: "Request Money", href: "/services", icon: <FiDownload size={20} /> },
    { label: "View Statements", href: "/services", icon: <FiFileText size={20} /> },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      {/* Header */}
      <section className="bg-[#061A40] text-white">
        <Navbar />
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-normal text-[#93C5FD]">
              Account Activated
            </p>
            <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
              Welcome to Chulbul Bank
            </h1>
            <p className="mt-4 max-w-2xl leading-7 text-blue-100">
              Your account has been verified and is now fully active. You can
              start banking right away.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[1fr_360px] lg:px-10">

        {/* Main content */}
        <div className="space-y-6">

          {/* Success banner */}
          <div className="flex items-start gap-4 rounded-lg border border-[#BBF7D0] bg-[#DCFCE7] px-5 py-4 shadow-sm">
            <FiCheckCircle size={24} className="mt-0.5 shrink-0 text-[#16A34A]" />
            <div>
              <p className="text-sm font-extrabold text-[#15803D]">
                Account successfully activated
              </p>
              <p className="mt-1 text-sm text-[#166534]">
                Your KYC has been verified and your account is now live. Log in
                to access all banking features.
              </p>
            </div>
          </div>

          {/* Completed journey */}
          <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-extrabold text-[#0F172A]">
              Application complete
            </h2>
            <p className="mt-1 text-sm text-[#475569]">
              All steps have been completed successfully.
            </p>

            <div className="mt-6 space-y-0">
              {[
                { label: "KYC Upload", desc: "Identity and address documents submitted." },
                { label: "Pending Approval", desc: "Application queued for review." },
                { label: "Employee Review", desc: "Documents verified by our team." },
                { label: "Account Active", desc: "Your account is live and ready to use.", current: true },
              ].map((step, index, arr) => (
                <div key={step.label} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 ${
                        step.current
                          ? "border-[#2563EB] bg-[#EFF6FF] text-[#2563EB]"
                          : "border-[#16A34A] bg-[#DCFCE7] text-[#16A34A]"
                      }`}
                    >
                      <FiCheckCircle size={18} />
                    </div>
                    {index < arr.length - 1 && (
                      <div className="my-1 w-0.5 flex-1 bg-[#16A34A]" style={{ minHeight: "32px" }} />
                    )}
                  </div>
                  <div className="pb-6">
                    <p className={`text-sm font-extrabold ${step.current ? "text-[#1D4ED8]" : "text-[#15803D]"}`}>
                      {step.label}
                      {step.current && (
                        <span className="ml-2 rounded-md bg-[#DBEAFE] px-2 py-0.5 text-xs font-bold text-[#2563EB]">
                          Current
                        </span>
                      )}
                    </p>
                    <p className="mt-1 text-sm text-[#475569]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick actions */}
          <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-extrabold text-[#0F172A]">
              Start banking
            </h2>
            <p className="mt-1 text-sm text-[#475569]">
              Here is what you can do with your new account.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {quickActions.map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  className="flex items-center gap-4 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-4 transition hover:border-[#2563EB] hover:bg-[#EFF6FF] group"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#DBEAFE] text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition">
                    {action.icon}
                  </span>
                  <span className="text-sm font-bold text-[#0F172A]">{action.label}</span>
                  <FiArrowRight size={16} className="ml-auto text-[#94A3B8] group-hover:text-[#2563EB] transition" />
                </Link>
              ))}
            </div>
          </div>

          {/* Security tips */}
          <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <FiShield size={20} className="text-[#2563EB]" />
              <h2 className="text-xl font-extrabold text-[#0F172A]">
                Keep your account secure
              </h2>
            </div>
            <ul className="mt-4 space-y-3 text-sm text-[#475569]">
              <li className="flex items-start gap-3">
                <FiCheckCircle size={16} className="mt-0.5 shrink-0 text-[#16A34A]" />
                Never share your password or account details with anyone.
              </li>
              <li className="flex items-start gap-3">
                <FiCheckCircle size={16} className="mt-0.5 shrink-0 text-[#16A34A]" />
                Chulbul Bank will never ask for your password over phone or email.
              </li>
              <li className="flex items-start gap-3">
                <FiCheckCircle size={16} className="mt-0.5 shrink-0 text-[#16A34A]" />
                Log out after every session, especially on shared devices.
              </li>
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-5">

          {/* Journey card */}
          <div className="rounded-lg border border-[#E2E8F0] bg-[#061A40] p-6 text-white shadow-sm">
            <h2 className="text-xl font-extrabold">Your journey</h2>
            <div className="mt-5 space-y-4 text-sm text-blue-100">
              {[
                "KYC Upload",
                "Pending Approval",
                "Employee Review",
                "Account Active",
              ].map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#16A34A] text-white font-extrabold">
                    <FiCheckCircle size={16} />
                  </span>
                  <span
                    className={`font-semibold ${
                      index === 3 ? "text-white" : "text-[#86EFAC]"
                    }`}
                  >
                    {step}
                  </span>
                  {index === 3 && (
                    <span className="ml-auto rounded-md bg-[#16A34A]/30 px-2 py-0.5 text-xs font-bold text-[#86EFAC]">
                      Done
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Account details stub */}
          <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <FiUser size={18} className="text-[#2563EB]" />
              <h2 className="text-lg font-extrabold text-[#0F172A]">Your account</h2>
            </div>
            <p className="mt-3 text-sm text-[#475569]">
              Log in to view your account number, balance, and full transaction history.
            </p>
            <Link
              href="/login"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-[#2563EB] px-4 py-2.5 text-sm font-extrabold text-white shadow-md transition hover:bg-[#1D4ED8]"
            >
              Log in to your account
              <FiArrowRight size={16} />
            </Link>
          </div>

          {/* Help */}
          <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <h2 className="text-lg font-extrabold text-[#0F172A]">Need help?</h2>
            <p className="mt-2 text-sm text-[#475569]">
              Our support team is available for any questions about your new account.
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