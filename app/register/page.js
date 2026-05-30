import Link from "next/link";
import Navbar from "../components/Navbar";

export default function ChulbulBankCreateAccountPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 grid auto-rows-auto gap-2 items-center justify-center px-6 overflow-hidden">
        <Navbar />
        <div>

          {/* Background Glow */}
          <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

          {/* Form Card */}
          <div className="relative w-full max-w-3xl bg-white/10 border border-white/20 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl text-white">

            {/* Heading */}
            <div className="text-center mb-10">
              <h1 className="text-4xl font-extrabold text-cyan-400">
                Create Account
              </h1>

              <p className="text-gray-300 mt-3">
                Open your Chulbul Bank account in minutes
              </p>
            </div>

            {/* Form */}
            <form className="grid md:grid-cols-2 gap-6">

              {/* Full Name */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="w-full bg-slate-900/60 border border-white/10 rounded-2xl px-4 py-4 outline-none focus:border-cyan-400 transition"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Mobile Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter Mobile Number"
                  className="w-full bg-slate-900/60 border border-white/10 rounded-2xl px-4 py-4 outline-none focus:border-cyan-400 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="w-full bg-slate-900/60 border border-white/10 rounded-2xl px-4 py-4 outline-none focus:border-cyan-400 transition"
                />
              </div>

              {/* DOB */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Date Of Birth
                </label>

                <input
                  type="date"
                  className="w-full bg-slate-900/60 border border-white/10 rounded-2xl px-4 py-4 outline-none focus:border-cyan-400 transition"
                />
              </div>

              {/* Aadhaar */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Aadhaar Number
                </label>

                <input
                  type="text"
                  placeholder="Enter Aadhaar Number"
                  className="w-full bg-slate-900/60 border border-white/10 rounded-2xl px-4 py-4 outline-none focus:border-cyan-400 transition"
                />
              </div>

              {/* PAN */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  PAN Number
                </label>

                <input
                  type="text"
                  placeholder="Enter PAN Number"
                  className="w-full bg-slate-900/60 border border-white/10 rounded-2xl px-4 py-4 outline-none focus:border-cyan-400 transition"
                />
              </div>

              {/* Address */}
              <div className="md:col-span-2">
                <label className="block text-sm text-gray-300 mb-2">
                  Address
                </label>

                <textarea
                  rows="4"
                  placeholder="Enter Full Address"
                  className="w-full bg-slate-900/60 border border-white/10 rounded-2xl px-4 py-4 outline-none focus:border-cyan-400 transition"
                ></textarea>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Create Password"
                  className="w-full bg-slate-900/60 border border-white/10 rounded-2xl px-4 py-4 outline-none focus:border-cyan-400 transition"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Confirm Password
                </label>

                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full bg-slate-900/60 border border-white/10 rounded-2xl px-4 py-4 outline-none focus:border-cyan-400 transition"
                />
              </div>

              {/* Checkbox */}
              <div className="md:col-span-2 flex items-center gap-3 text-sm text-gray-300">
                <input type="checkbox" className="cursor-pointer" />
                <span>
                  I agree to Chulbul Bank <Link href="./term&conditions" className="underline hover:text-cyan-400">Terms & Conditions</Link>
                </span>
              </div>

              {/* Button */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-cyan-400 text-slate-950 font-bold text-lg hover:bg-cyan-300 transition shadow-lg shadow-cyan-500/30"
                >
                  Create Account
                </button>
              </div>

            </form>

          </div>

        </div>

      </div>
    </>
  );
}