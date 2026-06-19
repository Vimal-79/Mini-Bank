
import Navbar from "../../../components/Navbar";

export default function EmployeeDashboard() {
  const pendingApplications = [
    {
      id: "APP001",
      name: "Rahul Sharma",
      accountType: "Savings",
      status: "Pending",
    },
    {
      id: "APP002",
      name: "Priya Verma",
      accountType: "Student",
      status: "Pending",
    },
    {
      id: "APP003",
      name: "Amit Kumar",
      accountType: "Current",
      status: "Pending",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-8">

        {/* Welcome Banner */}
        <div className="rounded-lg bg-[#061A40] p-8 text-white">
          <p className="text-sm font-bold uppercase text-[#93C5FD]">
            Employee Dashboard
          </p>

          <h1 className="mt-2 text-4xl font-extrabold">
            Welcome Back, Employee
          </h1>

          <p className="mt-3 text-blue-100">
            Manage customer applications and account approvals.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <p className="text-sm text-[#475569]">
              Pending Applications
            </p>

            <h2 className="mt-2 text-4xl font-extrabold">
              42
            </h2>
          </div>

          <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <p className="text-sm text-[#475569]">
              Approved Today
            </p>

            <h2 className="mt-2 text-4xl font-extrabold text-green-600">
              18
            </h2>
          </div>

          <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <p className="text-sm text-[#475569]">
              Rejected Today
            </p>

            <h2 className="mt-2 text-4xl font-extrabold text-red-500">
              3
            </h2>
          </div>

          <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <p className="text-sm text-[#475569]">
              Total Customers
            </p>

            <h2 className="mt-2 text-4xl font-extrabold">
              1,248
            </h2>
          </div>

        </div>

        {/* Pending Applications */}
        <div className="mt-8 rounded-lg border border-[#E2E8F0] bg-white shadow-sm">

          <div className="border-b border-[#E2E8F0] p-6">
            <h2 className="text-2xl font-extrabold">
              Pending KYC Applications
            </h2>
          </div>

          <div className="overflow-x-auto">

            <table className="w-full">
              <thead>
                <tr className="border-b border-[#E2E8F0] bg-[#F8FAFC]">
                  <th className="px-6 py-4 text-left">
                    Application ID
                  </th>

                  <th className="px-6 py-4 text-left">
                    Customer
                  </th>

                  <th className="px-6 py-4 text-left">
                    Account Type
                  </th>

                  <th className="px-6 py-4 text-left">
                    Status
                  </th>

                  <th className="px-6 py-4 text-left">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {pendingApplications.map((app) => (
                  <tr
                    key={app.id}
                    className="border-b border-[#E2E8F0]"
                  >
                    <td className="px-6 py-4">
                      {app.id}
                    </td>

                    <td className="px-6 py-4">
                      {app.name}
                    </td>

                    <td className="px-6 py-4">
                      {app.accountType}
                    </td>

                    <td className="px-6 py-4">
                      <span className="rounded-md bg-yellow-100 px-3 py-1 text-sm font-bold text-yellow-700">
                        Pending
                      </span>
                    </td>

                    <td className="px-6 py-4 flex gap-2">

                      <button
                        className="
                        rounded-md
                        bg-green-600
                        px-4
                        py-2
                        text-white
                        font-bold
                        hover:bg-green-700
                      "
                      >
                        Approve
                      </button>

                      <button
                        className="
                        rounded-md
                        bg-red-500
                        px-4
                        py-2
                        text-white
                        font-bold
                        hover:bg-red-600
                      "
                      >
                        Reject
                      </button>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">

          <div className="rounded-lg bg-white border border-[#E2E8F0] p-6 shadow-sm">
            <h3 className="font-extrabold text-xl">
              Customer Search
            </h3>

            <p className="mt-2 text-[#475569]">
              Find customer records quickly.
            </p>
          </div>

          <div className="rounded-lg bg-white border border-[#E2E8F0] p-6 shadow-sm">
            <h3 className="font-extrabold text-xl">
              KYC Review
            </h3>

            <p className="mt-2 text-[#475569]">
              Review uploaded verification documents.
            </p>
          </div>

          <div className="rounded-lg bg-white border border-[#E2E8F0] p-6 shadow-sm">
            <h3 className="font-extrabold text-xl">
              Approval History
            </h3>

            <p className="mt-2 text-[#475569]">
              View previous customer approvals.
            </p>
          </div>

        </div>

      </section>
    </main>
  );
}
