
import Navbar from "../../../components/Navbar";

export default function ManagerDashboard() {
  const flaggedTransactions = [
    {
      id: "TXN001",
      customer: "Rahul Sharma",
      amount: "₹95,000",
      status: "Under Review",
    },
    {
      id: "TXN002",
      customer: "Priya Verma",
      amount: "₹1,25,000",
      status: "Under Review",
    },
    {
      id: "TXN003",
      customer: "Amit Kumar",
      amount: "₹75,000",
      status: "Under Review",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-8">

        {/* Header */}
        <div className="rounded-lg bg-[#061A40] p-8 text-white">
          <p className="text-sm font-bold uppercase text-[#93C5FD]">
            Branch Manager Dashboard
          </p>

          <h1 className="mt-2 text-4xl font-extrabold">
            Welcome Back, Branch Manager
          </h1>

          <p className="mt-3 text-blue-100">
            Monitor branch operations, review reports,
            and oversee account management.
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <p className="text-sm text-[#475569]">
              Branch Customers
            </p>

            <h2 className="mt-2 text-4xl font-extrabold">
              2,481
            </h2>
          </div>

          <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <p className="text-sm text-[#475569]">
              Active Employees
            </p>

            <h2 className="mt-2 text-4xl font-extrabold text-[#2563EB]">
              18
            </h2>
          </div>

          <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <p className="text-sm text-[#475569]">
              Frozen Accounts
            </p>

            <h2 className="mt-2 text-4xl font-extrabold text-red-500">
              7
            </h2>
          </div>

          <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <p className="text-sm text-[#475569]">
              Monthly Transactions
            </p>

            <h2 className="mt-2 text-4xl font-extrabold text-green-600">
              14.2K
            </h2>
          </div>

        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid gap-6 md:grid-cols-4">

          <div className="rounded-lg bg-white border border-[#E2E8F0] p-6 shadow-sm">
            <h3 className="font-extrabold text-lg">
              Branch Reports
            </h3>

            <p className="mt-2 text-[#475569]">
              View branch performance reports.
            </p>
          </div>

          <div className="rounded-lg bg-white border border-[#E2E8F0] p-6 shadow-sm">
            <h3 className="font-extrabold text-lg">
              Employee Activity
            </h3>

            <p className="mt-2 text-[#475569]">
              Monitor staff actions.
            </p>
          </div>

          <div className="rounded-lg bg-white border border-[#E2E8F0] p-6 shadow-sm">
            <h3 className="font-extrabold text-lg">
              Freeze Accounts
            </h3>

            <p className="mt-2 text-[#475569]">
              Manage account restrictions.
            </p>
          </div>

          <div className="rounded-lg bg-white border border-[#E2E8F0] p-6 shadow-sm">
            <h3 className="font-extrabold text-lg">
              Audit Logs
            </h3>

            <p className="mt-2 text-[#475569]">
              Review branch activities.
            </p>
          </div>

        </div>

        {/* Flagged Transactions */}
        <div className="mt-8 rounded-lg border border-[#E2E8F0] bg-white shadow-sm">

          <div className="border-b border-[#E2E8F0] p-6">
            <h2 className="text-2xl font-extrabold">
              Large Transaction Reviews
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">

              <thead>
                <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0]">

                  <th className="px-6 py-4 text-left">
                    Transaction ID
                  </th>

                  <th className="px-6 py-4 text-left">
                    Customer
                  </th>

                  <th className="px-6 py-4 text-left">
                    Amount
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

                {flaggedTransactions.map((txn) => (
                  <tr
                    key={txn.id}
                    className="border-b border-[#E2E8F0]"
                  >
                    <td className="px-6 py-4">
                      {txn.id}
                    </td>

                    <td className="px-6 py-4">
                      {txn.customer}
                    </td>

                    <td className="px-6 py-4 font-bold">
                      {txn.amount}
                    </td>

                    <td className="px-6 py-4">
                      <span className="rounded-md bg-yellow-100 px-3 py-1 text-sm font-bold text-yellow-700">
                        {txn.status}
                      </span>
                    </td>

                    <td className="px-6 py-4 flex gap-2">

                      <button className="rounded-md bg-green-600 px-4 py-2 font-bold text-white hover:bg-green-700">
                        Approve
                      </button>

                      <button className="rounded-md bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-600">
                        Reject
                      </button>

                    </td>
                  </tr>
                ))}

              </tbody>

            </table>
          </div>
        </div>

        {/* Branch Performance */}
        <div className="mt-8 rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">

          <h2 className="text-2xl font-extrabold">
            Branch Performance Overview
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">

            <div className="rounded-lg bg-[#F8FAFC] p-5">
              <p className="text-sm text-[#475569]">
                Accounts Opened This Month
              </p>

              <h3 className="mt-2 text-3xl font-extrabold">
                124
              </h3>
            </div>

            <div className="rounded-lg bg-[#F8FAFC] p-5">
              <p className="text-sm text-[#475569]">
                KYC Success Rate
              </p>

              <h3 className="mt-2 text-3xl font-extrabold text-green-600">
                96%
              </h3>
            </div>

            <div className="rounded-lg bg-[#F8FAFC] p-5">
              <p className="text-sm text-[#475569]">
                Customer Satisfaction
              </p>

              <h3 className="mt-2 text-3xl font-extrabold text-[#2563EB]">
                4.8/5
              </h3>
            </div>

          </div>

        </div>

      </section>
    </main>
  );
}