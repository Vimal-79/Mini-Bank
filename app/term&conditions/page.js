export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#061A40] to-[#2563EB] p-10 text-white shadow-lg">
          <h1 className="text-4xl font-bold">Terms & Conditions</h1>
          <p className="mt-3 text-slate-200 max-w-2xl">
            Please read these Terms & Conditions carefully before using
            Chulbul Bank services.
          </p>

          <div className="mt-6 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm">
            Last Updated: June 2026
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          {/* Sidebar */}
          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sticky top-1">
            <h3 className="mb-4 text-lg font-semibold text-slate-900">
              Contents
            </h3>

            <nav className="space-y-2">
              {[
                "Introduction",
                "Eligibility",
                "Account Registration",
                "Money Transfers",
                "Privacy Policy",
                "Security",
                "Account Suspension",
                "Termination",
                "Contact Us",
              ].map((item, index) => (
                <a
                  key={index}
                  href={`#section-${index}`}
                  className={`block rounded-xl px-4 py-3 text-sm transition ${
                    index === 0
                      ? "bg-blue-600 text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <div className="space-y-6">
            {/* Notice */}
            <div className="rounded-2xl border-l-4 border-amber-500 bg-amber-50 p-5">
              <h3 className="font-semibold text-amber-900">
                Educational Project Notice
              </h3>

              <p className="mt-2 text-amber-800">
                Chulbul Bank is an educational and portfolio project. It does
                not provide real banking services and should not be used for
                actual financial transactions.
              </p>
            </div>

            {/* Sections */}
            {[
              {
                title: "Introduction",
                text: "Welcome to Chulbul Bank. By creating an account or using our platform, you agree to these terms and conditions.",
              },
              {
                title: "Eligibility",
                text: "Users must provide accurate information during registration and maintain updated account details.",
              },
              {
                title: "Account Registration",
                text: "All accounts are subject to verification. Chulbul Bank reserves the right to approve or reject any registration request.",
              },
              {
                title: "Money Transfers",
                text: "Transfers are simulated for educational purposes. Users are responsible for verifying recipient details before confirming a transfer.",
              },
              {
                title: "Privacy Policy",
                text: "We collect and store user information solely for educational project functionality and account management.",
              },
              {
                title: "Security",
                text: "Users must protect their login credentials and immediately report unauthorized account access.",
              },
              {
                title: "Account Suspension",
                text: "Accounts may be suspended for suspicious activity, policy violations, or administrative review.",
              },
              {
                title: "Termination",
                text: "Users may request account closure. Chulbul Bank reserves the right to terminate accounts that violate platform rules.",
              },
              {
                title: "Contact Us",
                text: "For questions regarding these Terms & Conditions, please contact the Chulbul Bank support team.",
              },
            ].map((section, index) => (
              <div
                key={index}
                id={`section-${index}`}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h2 className="mb-4 text-2xl font-semibold text-blue-600">
                  {section.title}
                </h2>

                <p className="leading-8 text-slate-600">{section.text}</p>
              </div>
            ))}

            {/* Agreement Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  className="mt-1 h-5 w-5 accent-blue-600"
                />

                <span className="text-slate-700">
                  I have read and agree to the Chulbul Bank Terms &
                  Conditions.
                </span>
              </label>

              <button className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700">
                Continue
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}