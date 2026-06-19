
import Navbar from "../components/Navbar";
import Link from "next/link";

const values = [
  {
    title: "Trust",
    description:
      "Building confidence through secure and transparent banking.",
  },
  {
    title: "Innovation",
    description:
      "Using modern technology to simplify banking experiences.",
  },
  {
    title: "Accessibility",
    description:
      "Making banking simple and available for everyone.",
  },
  {
    title: "Reliability",
    description:
      "Providing dependable services users can count on.",
  },
];

const users = [
  "Customers",
  "Bank Employees",
  "Branch Managers",
  "Administrators",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      {/* Hero */}
      <section className="bg-[#061A40] text-white">
        <Navbar />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-[#93C5FD]">
              About Chulbul Bank
            </p>

            <h1 className="mt-3 text-4xl font-extrabold md:text-6xl">
              Modern Banking Built For Everyone
            </h1>

            <p className="mt-6 text-lg leading-8 text-blue-100">
              Chulbul Bank is a modern digital banking platform
              designed to provide secure account management,
              money transfers, transaction tracking, and
              simplified banking experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="rounded-lg border border-[#E2E8F0] bg-white p-10 shadow-sm">
          <h2 className="text-3xl font-extrabold">
            Our Mission
          </h2>

          <p className="mt-6 leading-8 text-[#475569]">
            Our mission is to make banking simple,
            secure, and accessible through a modern
            fintech-inspired experience. We believe
            users should be able to manage their
            finances with confidence and clarity.
          </p>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-white border-y border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold">
              Who We Serve
            </h2>

            <p className="mt-3 text-[#475569]">
              Designed for every role within the banking ecosystem.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {users.map((user) => (
              <div
                key={user}
                className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-6 text-center"
              >
                <h3 className="text-xl font-bold">
                  {user}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold">
            Our Core Values
          </h2>

          <p className="mt-3 text-[#475569]">
            Principles that guide everything we build.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-xl font-extrabold">
                {value.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#475569]">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white border-y border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>
              <h2 className="text-3xl font-extrabold">
                Why Choose Chulbul Bank?
              </h2>

              <ul className="mt-6 space-y-4 text-[#475569]">
                <li>✓ Secure digital banking</li>
                <li>✓ Modern user experience</li>
                <li>✓ Fast account management</li>
                <li>✓ Easy money transfers</li>
                <li>✓ Role-based banking platform</li>
              </ul>
            </div>

            <div className="rounded-lg bg-[#061A40] p-8 text-white">
              <h3 className="text-2xl font-extrabold">
                Built For The Future
              </h3>

              <p className="mt-4 text-blue-100 leading-7">
                Inspired by modern fintech platforms,
                Chulbul Bank focuses on simplicity,
                transparency, and efficiency to create
                a better banking experience.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="rounded-lg bg-[#061A40] p-10 text-center text-white">
          <h2 className="text-4xl font-extrabold">
            Join Chulbul Bank Today
          </h2>

          <p className="mt-4 text-blue-100">
            Experience a secure and modern banking platform.
          </p>

          <Link
            href="/register"
            className="mt-8 inline-block rounded-md bg-[#2563EB] px-8 py-3 font-bold text-white hover:bg-[#1D4ED8]"
          >
            Open Account
          </Link>
        </div>
      </section>
    </main>
  );
}