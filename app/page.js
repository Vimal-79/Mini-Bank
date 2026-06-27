import Link from "next/link";
import Navbar from "./components/Navbar.js";

const onboardingSteps = [
  {
    title: "Register",
    text: "Customer starts with personal details and secure credentials.",
  },
  {
    title: "KYC Upload",
    text: "Identity, address proof, and photograph move into review.",
  },
  {
    title: "Employee Review",
    text: "Branch staff verify documents and approve or reject the account.",
  },
  {
    title: "Active Account",
    text: "Approved customers receive an account number and dashboard access.",
  },
];

const customerModules = [
  "Profile",
  "Balance",
  "Transactions",
  "Beneficiaries",
  "Transfer",
  "Statements",
];

const transactions = [
  ["Salary Credit", "+Rs 48,000", "text-[#22C55E]"],
  ["Aarav Mehta", "-Rs 7,500", "text-[#EF4444]"],
  ["Statement PDF", "Ready", "text-[#2563EB]"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <section className="bg-[#061A40] text-white">
        <Navbar />

        <div className="mx-auto grid min-h-[calc(100vh-92px)] max-w-7xl items-center gap-10 px-6 py-10 lg:grid-cols-[1fr_0.95fr] lg:px-10">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm font-medium text-[#93C5FD]">
              Digital banking with verified onboarding
            </p>

            <h1 className="text-5xl font-extrabold leading-tight tracking-normal md:text-7xl">
              Chulbul Bank
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Open accounts with KYC review, activate customers through staff
              approval, manage beneficiaries, move money, and download
              statements from one secure banking workspace.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/register"
                className="rounded-md bg-[#2563EB] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-950/30 transition hover:bg-[#1D4ED8]"
              >
                Open Account
              </Link>

              <Link
                href="/login"
                className="rounded-md border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/15"
              >
                Customer Login
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {[
                ["KYC", "Approval"],
                ["JWT", "Auth Ready"],
                ["PDF", "Statements"],
              ].map(([value, label]) => (
                <div
                  key={value}
                  className="rounded-lg border border-white/10 bg-white/10 p-4"
                >
                  <p className="text-2xl font-extrabold text-[#60A5FA]">
                    {value}
                  </p>
                  <p className="mt-1 text-sm text-blue-100">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-lg border border-white/15 bg-white p-4 text-[#0F172A] shadow-2xl shadow-blue-950/40">
              <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
                <div>
                  <p className="text-sm font-semibold text-[#475569]">
                    Customer Dashboard
                  </p>
                  <p className="mt-1 text-2xl font-extrabold">Rs 2,45,000</p>
                </div>
                <span className="rounded-md bg-[#DCFCE7] px-3 py-2 text-sm font-bold text-[#15803D]">
                  Active
                </span>
              </div>

              <div className="grid gap-4 py-5 sm:grid-cols-3">
                {["Balance", "Transfer", "Beneficiary"].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-4"
                  >
                    <div className="mb-4 h-2 w-10 rounded bg-[#2563EB]" />
                    <p className="text-sm font-bold">{item}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-lg border border-[#E2E8F0]">
                <div className="flex items-center justify-between border-b border-[#E2E8F0] px-4 py-3">
                  <p className="font-bold">Recent Activity</p>
                  <p className="text-sm text-[#475569]">Today</p>
                </div>

                <div className="divide-y divide-[#E2E8F0]">
                  {transactions.map(([name, amount, color]) => (
                    <div
                      key={name}
                      className="flex items-center justify-between px-4 py-3"
                    >
                      <p className="text-sm font-semibold text-[#475569]">
                        {name}
                      </p>
                      <p className={`text-sm font-extrabold ${color}`}>
                        {amount}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="application-flow"
        className="mx-auto max-w-7xl px-6 py-16 lg:px-10"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-normal text-[#2563EB]">
            Application Flow
          </p>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            From visitor to active customer
          </h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {onboardingSteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-lg border border-[#E2E8F0] bg-white p-5 shadow-sm"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#EFF6FF] text-sm font-extrabold text-[#2563EB]">
                {index + 1}
              </span>
              <h3 className="mt-5 text-lg font-extrabold">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#475569]">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="customer-workspace"
        className="border-y border-[#E2E8F0] bg-white"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[0.8fr_1fr] lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-normal text-[#2563EB]">
              Customer Workspace
            </p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              Dashboard modules for daily banking
            </h2>
            <p className="mt-4 leading-7 text-[#475569]">
              The signed-in experience centers account details, balance,
              transaction history, beneficiaries, transfers, and downloadable
              statements.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {customerModules.map((module) => (
              <div
                key={module}
                className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-5"
              >
                <p className="font-extrabold">{module}</p>
                <div className="mt-4 h-2 rounded bg-[#E2E8F0]">
                  <div className="h-2 w-2/3 rounded bg-[#2563EB]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
