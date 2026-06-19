
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      {/* Hero */}
      <section className="bg-[#061A40] text-white">
        <Navbar />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-[#93C5FD]">
              Contact Us
            </p>

            <h1 className="mt-3 text-4xl font-extrabold md:text-6xl">
              We're Here To Help
            </h1>

            <p className="mt-6 text-lg leading-8 text-blue-100">
              Have questions about accounts, transfers,
              security, or banking services? Reach out to
              our support team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px]">

          {/* Contact Form */}
          <div className="rounded-lg border border-[#E2E8F0] bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-extrabold">
              Send Us A Message
            </h2>

            <p className="mt-2 text-[#475569]">
              Fill out the form and we'll get back to you.
            </p>

            <form className="mt-8 space-y-5">

              <div>
                <label className="text-sm font-bold">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-2 w-full rounded-md border border-[#CBD5E1] px-4 py-3 outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="text-sm font-bold">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-md border border-[#CBD5E1] px-4 py-3 outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="text-sm font-bold">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="How can we help?"
                  className="mt-2 w-full rounded-md border border-[#CBD5E1] px-4 py-3 outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="text-sm font-bold">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="mt-2 w-full rounded-md border border-[#CBD5E1] px-4 py-3 outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                className="rounded-md bg-[#2563EB] px-6 py-3 font-bold text-white transition hover:bg-[#1D4ED8]"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <aside className="space-y-6">

            <div className="rounded-lg bg-[#061A40] p-6 text-white shadow-sm">
              <h3 className="text-2xl font-extrabold">
                Contact Information
              </h3>

              <div className="mt-6 space-y-5 text-blue-100">

                <div>
                  <p className="font-bold text-white">
                    Email
                  </p>
                  <p>support@chulbulbank.com</p>
                </div>

                <div>
                  <p className="font-bold text-white">
                    Phone
                  </p>
                  <p>+91 98765 43210</p>
                </div>

                <div>
                  <p className="font-bold text-white">
                    Address
                  </p>
                  <p>
                    Chulbul Bank Headquarters
                    <br />
                    New Delhi, India
                  </p>
                </div>

              </div>
            </div>

            <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-extrabold">
                Support Hours
              </h3>

              <div className="mt-4 space-y-2 text-[#475569]">
                <p>Monday - Friday</p>
                <p>9:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-extrabold">
                Need An Account?
              </h3>

              <p className="mt-3 text-[#475569]">
                Open a Chulbul Bank account and start
                banking digitally.
              </p>

              <Link
                href="/register"
                className="mt-5 inline-block rounded-md bg-[#2563EB] px-5 py-3 font-bold text-white hover:bg-[#1D4ED8]"
              >
                Open Account
              </Link>
            </div>

          </aside>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
        <div className="rounded-lg bg-[#061A40] p-10 text-center text-white">
          <h2 className="text-4xl font-extrabold">
            Let's Build Your Banking Journey
          </h2>

          <p className="mt-4 text-blue-100">
            Secure. Modern. Reliable.
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