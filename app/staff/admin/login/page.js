
"use client";

import Navbar from "../../../components/Navbar";
import { useForm } from "react-hook-form";

const inputClass =
  "mt-2 w-full rounded-md border border-[#CBD5E1] bg-white px-4 py-3 text-sm text-[#0F172A] outline-none transition placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100";

export default function AdminLoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      {/* Hero */}
      <section className="bg-[#061A40] text-white">
        <Navbar />

        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-[#93C5FD]">
              Administrative Access
            </p>

            <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
              Chulbul Bank Admin Portal
            </h1>

            <p className="mt-4 max-w-2xl leading-7 text-blue-100">
              Restricted access for system administrators.
              Manage users, employees, branches, analytics,
              and platform operations.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">

          {/* Login Form */}
          <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">

            <div className="border-b border-[#E2E8F0] pb-5">
              <h2 className="text-2xl font-extrabold">
                Administrator Sign In
              </h2>

              <p className="mt-2 text-sm text-[#475569]">
                Enter your administrator credentials.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-6 space-y-5"
            >
              <div>
                <label className="text-sm font-bold">
                  Admin ID
                </label>

                <input
                  type="text"
                  placeholder="ADM2026001"
                  className={inputClass}
                  {...register("adminId", {
                    required: "Admin ID is required",
                  })}
                />

                {errors.adminId && (
                  <p className="mt-2 text-sm font-semibold text-[#DC2626]">
                    {errors.adminId.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-bold">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter password"
                  className={inputClass}
                  {...register("password", {
                    required: "Password is required",
                  })}
                />

                {errors.password && (
                  <p className="mt-2 text-sm font-semibold text-[#DC2626]">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2 text-sm text-[#475569]">
                <input type="checkbox" />
                Remember this device
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  w-full
                  rounded-md
                  bg-[#2563EB]
                  px-6
                  py-3
                  text-sm
                  font-extrabold
                  text-white
                  shadow-md
                  transition
                  hover:bg-[#1D4ED8]
                "
              >
                Access Admin Portal
              </button>
            </form>
          </div>

          {/* Admin Info */}
          <aside className="space-y-5">

            <div className="rounded-lg bg-[#061A40] p-6 text-white shadow-sm">
              <h2 className="text-xl font-extrabold">
                Administrator Tools
              </h2>

              <div className="mt-5 space-y-4 text-sm text-blue-100">
                <div>✓ User Management</div>
                <div>✓ Employee Management</div>
                <div>✓ Branch Management</div>
                <div>✓ System Analytics</div>
                <div>✓ Platform Monitoring</div>
              </div>
            </div>

            <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold">
                Security Notice
              </h3>

              <p className="mt-3 text-sm text-[#475569]">
                This portal is restricted to authorized
                Chulbul Bank administrators only.
              </p>
            </div>

          </aside>
        </div>
      </section>
    </main>
  );
}
