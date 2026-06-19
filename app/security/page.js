
import Navbar from "../components/Navbar";
import Link from "next/link";

const securityFeatures = [
  {
    title: "Secure Authentication",
    description:
      "Protected login system using encrypted passwords and JWT authentication.",
  },
  {
    title: "Role-Based Access",
    description:
      "Customers, Employees, Managers, and Admins only access authorized features.",
  },
  {
    title: "Encrypted Passwords",
    description:
      "Passwords are hashed securely before being stored.",
  },
  {
    title: "Protected Transactions",
    description:
      "Transfers are validated before processing.",
  },
  {
    title: "Session Protection",
    description:
      "Authenticated sessions prevent unauthorized access.",
  },
  {
    title: "Activity Monitoring",
    description:
      "Important account actions are logged and tracked.",
  },
];

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      {/* Hero */}
      <section className="bg-[#061A40] text-white">
        <Navbar />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-[#93C5FD]">
              Security
            </p>

            <h1 className="mt-3 text-4xl font-extrabold md:text-6xl">
              Banking Security You Can Trust
            </h1>

            <p className="mt-6 text-lg leading-8 text-blue-100">
              Security is at the core of Chulbul Bank.
              We use modern authentication, protected
              transactions, and secure account management
              practices.
            </p>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold">
            Security Features
          </h2>

          <p className="mt-3 text-[#475569]">
            Built using modern security practices.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {securityFeatures.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-xl font-extrabold">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#475569]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How We Protect You */}
      <section className="bg-white border-y border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <h2 className="text-center text-3xl font-extrabold">
            How We Protect Your Account
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              "Password Encryption",
              "Identity Verification",
              "Access Control",
              "Transaction Validation",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-lg border border-[#E2E8F0] p-6 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-extrabold text-[#2563EB]">
                  {index + 1}
                </div>

                <h3 className="mt-4 font-bold">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Tips */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="rounded-lg border border-[#E2E8F0] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-extrabold">
            Account Safety Tips
          </h2>

          <ul className="mt-6 space-y-4 text-[#475569]">
            <li>• Never share your password.</li>
            <li>• Use a strong unique password.</li>
            <li>• Log out from shared devices.</li>
            <li>• Review transaction history regularly.</li>
            <li>• Report suspicious activity immediately.</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="rounded-lg bg-[#061A40] p-10 text-center text-white">
          <h2 className="text-4xl font-extrabold">
            Your Security Matters
          </h2>

          <p className="mt-4 text-blue-100">
            Experience secure banking with modern
            protection mechanisms.
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