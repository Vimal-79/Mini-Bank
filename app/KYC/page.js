"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";

const inputClass =
  "mt-2 w-full rounded-md border border-[#CBD5E1] bg-white px-4 py-3 text-sm text-[#0F172A] outline-none transition placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100";

const buttonClass =
  "rounded-md bg-[#2563EB] px-6 py-3 text-sm font-extrabold text-white shadow-md transition hover:bg-[#1D4ED8] disabled:cursor-not-allowed disabled:bg-[#94A3B8]";

export default function KYCPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <section className="bg-[#061A40] text-white">
        <Navbar />
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-normal text-[#93C5FD]">
              KYC Verification
            </p>
            <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
              Complete your identity check
            </h1>
            <p className="mt-4 max-w-2xl leading-7 text-blue-100">
              We only need a few trusted documents for verification. No Aadhaar/PAN numbers, OTP, or email verification is required in this demo.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">
          <div className="space-y-6">
            <div className="rounded-lg bg-[#f8fafc] p-5">
              <h2 className="text-2xl font-extrabold text-[#0f172a]">Upload Supporting Documents</h2>
              <p className="mt-2 text-sm text-[#475569]">
                Provide a document image for proof of identity or address. We are not collecting Aadhaar or PAN details in this demo.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="block rounded-lg border border-[#E2E8F0] bg-[#f8fafc] p-4">
                <span className="text-sm font-bold text-[#0f172a]">Photo ID</span>
                <input
                  type="file"
                  accept="image/*"
                  className={`mt-3 ${inputClass}`}
                />
                <p className="mt-2 text-sm text-[#64748b]">
                  Example: passport, voter ID, or driver’s license image.
                </p>
              </label>

              <label className="block rounded-lg border border-[#E2E8F0] bg-[#f8fafc] p-4">
                <span className="text-sm font-bold text-[#0f172a]">Proof of Address</span>
                <input
                  type="file"
                  accept="image/*"
                  className={`mt-3 ${inputClass}`}
                />
                <p className="mt-2 text-sm text-[#64748b]">
                  Example: utility bill, bank statement, or rental agreement image.
                </p>
              </label>
            </div>

            <div className="rounded-lg border border-[#E2E8F0] bg-[#f8fafc] p-4">
              <h3 className="text-lg font-bold text-[#0f172a]">What we do not ask for</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#475569]">
                <li>No Aadhaar or PAN numbers</li>
                <li>No OTP / email code verification</li>
                <li>No password re-entry or extra KYC forms</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Link href="/register" className="text-sm font-bold text-[#2563EB] hover:text-[#1D4ED8]">
                Back to registration
              </Link>
              <button type="button" className={buttonClass}>
                Submit documents
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
