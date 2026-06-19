
import Navbar from "../../../components/Navbar";

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-8">

        {/* Hero */}
        <div className="rounded-lg bg-[#061A40] p-8 text-white">
          <p className="text-sm font-bold uppercase text-[#93C5FD]">
            System Administration
          </p>

          <h1 className="mt-2 text-4xl font-extrabold">
            Welcome Back, Admin
          </h1>

          <p className="mt-3 text-blue-100">
            Monitor and manage the entire Chulbul Bank platform.
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <p className="text-sm text-[#475569]">
              Total Customers
            </p>

            <h2 className="mt-2 text-4xl font-extrabold">
              12,458
            </h2>
          </div>

          <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <p className="text-sm text-[#475569]">
              Employees
            </p>

            <h2 className="mt-2 text-4xl font-extrabold text-[#2563EB]">
              84
            </h2>
          </div>

          <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <p className="text-sm text-[#475569]">
              Branches
            </p>

            <h2 className="mt-2 text-4xl font-extrabold text-green-600">
              12
            </h2>
          </div>

          <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <p className="text-sm text-[#475569]">
              Transactions Today
            </p>

            <h2 className="mt-2 text-4xl font-extrabold text-orange-500">
              8,921
            </h2>
          </div>

        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-extrabold">
              Manage Users
            </h3>

            <p className="mt-2 text-[#475569]">
              View and manage customer accounts.
            </p>
          </div>

          <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-extrabold">
              Employees
            </h3>

            <p className="mt-2 text-[#475569]">
              Add, update, or disable staff members.
            </p>
          </div>

          <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-extrabold">
              Branches
            </h3>

            <p className="mt-2 text-[#475569]">
              Manage branch locations and managers.
            </p>
          </div>

          <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-extrabold">
              System Settings
            </h3>

            <p className="mt-2 text-[#475569]">
              Configure platform settings.
            </p>
          </div>

        </div>

        {/* Analytics */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">

          <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold">
              User Growth
            </h2>

            <div className="mt-6 h-64 rounded-lg bg-[#F8FAFC] flex items-center justify-center">
              Growth Chart
            </div>
          </div>

          <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold">
              Transaction Volume
            </h2>

            <div className="mt-6 h-64 rounded-lg bg-[#F8FAFC] flex items-center justify-center">
              Analytics Chart
            </div>
          </div>

        </div>

        {/* Recent Activities */}
        <div className="mt-8 rounded-lg border border-[#E2E8F0] bg-white shadow-sm">

          <div className="border-b border-[#E2E8F0] p-6">
            <h2 className="text-2xl font-extrabold">
              Recent System Activity
            </h2>
          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>
                <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
                  <th className="px-6 py-4 text-left">
                    Time
                  </th>

                  <th className="px-6 py-4 text-left">
                    User
                  </th>

                  <th className="px-6 py-4 text-left">
                    Action
                  </th>

                  <th className="px-6 py-4 text-left">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>

                <tr className="border-b border-[#E2E8F0]">
                  <td className="px-6 py-4">
                    09:45 AM
                  </td>

                  <td className="px-6 py-4">
                    Admin01
                  </td>

                  <td className="px-6 py-4">
                    Created Employee Account
                  </td>

                  <td className="px-6 py-4">
                    <span className="rounded bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
                      Success
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4">
                    10:12 AM
                  </td>

                  <td className="px-6 py-4">
                    Manager02
                  </td>

                  <td className="px-6 py-4">
                    Approved Large Transaction
                  </td>

                  <td className="px-6 py-4">
                    <span className="rounded bg-blue-100 px-3 py-1 text-sm font-bold text-blue-700">
                      Completed
                    </span>
                  </td>
                </tr>

              </tbody>

            </table>

          </div>
        </div>

      </section>
    </main>
  );
}
