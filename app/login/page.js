import BankLogo from "../components/BankLogo";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 grid auto-rows-auto gap-2 items-center justify-center overflow-hidden">
      <Navbar />

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

      {/* Login Card */}
      <div className="relative w-full max-w-md bg-white/10 border border-white/20 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl">

        {/* Logo */}
        <div className="text-center mb-8">
          <BankLogo />

          <p className="text-gray-300 mt-3">
            Secure Internet Banking Login
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">

          {/* User ID */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              User ID
            </label>

            <input
              type="text"
              placeholder="Enter User ID"
              className="w-full bg-slate-900/60 border border-white/10 rounded-2xl px-4 py-4 text-white outline-none focus:border-cyan-400 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter Password"
              className="w-full bg-slate-900/60 border border-white/10 rounded-2xl px-4 py-4 text-white outline-none focus:border-cyan-400 transition"
            />
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm">

            <label className="flex items-center gap-2 text-gray-300">
              <input type="checkbox" />
              Remember Me
            </label>

            <button
              type="button"
              className="text-cyan-400 hover:text-cyan-300"
            >
              Forgot Password?
            </button>

          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-cyan-400 text-slate-950 font-bold text-lg hover:bg-cyan-300 transition shadow-lg shadow-cyan-500/30"
          >
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 py-2">
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="text-gray-400 text-sm">OR</span>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          {/* OTP Login */}
          <button
            type="button"
            className="w-full py-4 rounded-2xl border border-cyan-400 text-cyan-300 font-semibold hover:bg-cyan-500/10 transition"
          >
            Login With OTP
          </button>

        </form>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-400">
            New User?{" "}
            <Link href="register">
              <span className="text-cyan-400 cursor-pointer hover:text-cyan-300">
                Open Account
              </span>
            </Link>
          </p>
        </div>

      </div>

    </div>
  );
}