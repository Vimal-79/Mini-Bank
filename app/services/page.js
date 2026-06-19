
import Navbar from "../components/Navbar";
import Link from "next/link";

const services = [
  {
    title: "Savings Account",
    description:
      "Manage your money securely with a modern savings account.",
  },
  {
    title: "Current Account",
    description:
      "Designed for frequent transactions and business operations.",
  },
  {
    title: "Student Account",
    description:
      "A banking experience tailored for students and learners.",
  },
  {
    title: "Money Transfer",
    description:
      "Transfer funds between Chulbul Bank accounts instantly.",
  },
  {
    title: "Transaction History",
    description:
      "Track every credit and debit with detailed records.",
  },
  {
    title: "Statements",
    description:
      "Generate and download account statements anytime.",
  },
  {
    title: "Identity Verification",
    description:
      "Secure profile verification through document review.",
  },
  {
    title: "Digital Banking",
    description:
      "Access banking services anytime from anywhere.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <section className="bg-[#061A40] text-white">
        <Navbar />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-[#93C5FD]">
              Banking Services
            </p>

            <h1 className="mt-3 text-4xl font-extrabold md:text-6xl">
              Banking Designed For Everyone
            </h1>

            <p className="mt-6 text-lg text-blue-100 leading-8">
              Chulbul Bank provides secure digital banking,
              account management, transfers, statements,
              and identity verification through a modern
              fintech experience.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/register"
                className="rounded-md bg-[#2563EB] px-6 py-3 font-bold text-white hover:bg-[#1D4ED8]"
              >
                Open Account
              </Link>

              <Link
                href="/contact"
                className="rounded-md border border-white/20 px-6 py-3 font-bold text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold">
            Our Services
          </h2>

          <p className="mt-3 text-[#475569]">
            Everything you need for modern banking.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-extrabold">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#475569]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <h2 className="text-center text-3xl font-extrabold">
            How It Works
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              "Register",
              "Verify Identity",
              "Account Approval",
              "Start Banking",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-lg border border-[#E2E8F0] p-6 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-extrabold text-[#2563EB]">
                  {index + 1}
                </div>

                <h3 className="mt-4 font-bold">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="rounded-lg bg-[#061A40] p-10 text-center text-white">
          <h2 className="text-4xl font-extrabold">
            Ready To Start Banking?
          </h2>

          <p className="mt-4 text-blue-100">
            Join Chulbul Bank and experience
            secure modern banking.
          </p>

          <Link
            href="/register"
            className="mt-8 inline-block rounded-md bg-[#2563EB] px-8 py-3 font-bold text-white hover:bg-[#1D4ED8]"
          >
            Create Account
          </Link>
        </div>
      </section>
    </main>
  );
}