
import Navbar from "../../components/Navbar";

export default function CustomerDashboard() {
  const transactions = [
    {
      id: "TXN001",
      name: "Priya Sharma",
      amount: "- ₹2,500",
      type: "debit",
      date: "Today",
    },
    {
      id: "TXN002",
      name: "Salary Credit",
      amount: "+ ₹25,000",
      type: "credit",
      date: "Yesterday",
    },
    {
      id: "TXN003",
      name: "Amit Kumar",
      amount: "- ₹500",
      type: "debit",
      date: "2 Days Ago",
    },
  ];

  const beneficiaries = [
    "Priya Sharma",
    "Amit Kumar",
    "Rohit Verma",
    "Anjali Singh",
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-8">

        {/* Welcome Banner */}
        <div className="rounded-lg bg-[#061A40] p-8 text-white">

          <p className="text-sm font-bold uppercase text-[#93C5FD]">
            Personal Banking
          </p>

          <h1 className="mt-2 text-4xl font-extrabold">
            this is a demo customer dashboard for chulbul bank
          </h1>

          <p className="mt-3 text-blue-100">
            demo dashboard for chulbul bank, where you can view your account balance, recent transactions, and manage your banking activities.
          </p>

        </div>

        {/* Balance Card */}
        <div className="mt-8 rounded-lg bg-white border border-[#E2E8F0] p-8 shadow-sm">

          <p className="text-sm text-[#475569]">
            Available Balance
          </p>

          <h2 className="mt-2 text-5xl font-extrabold">
            ₹24,580.00
          </h2>

          <p className="mt-2 text-[#475569]">
            Account No: CB202600001
          </p>

        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <button className="rounded-lg bg-white border border-[#E2E8F0] p-6 shadow-sm hover:shadow-md transition text-left">
            <h3 className="font-extrabold text-lg">
              Transfer Money
            </h3>

            <p className="mt-2 text-[#475569]">
              Send money instantly.
            </p>
          </button>

          <button className="rounded-lg bg-white border border-[#E2E8F0] p-6 shadow-sm hover:shadow-md transition text-left">
            <h3 className="font-extrabold text-lg">
              Transactions
            </h3>

            <p className="mt-2 text-[#475569]">
              View account history.
            </p>
          </button>

          <button className="rounded-lg bg-white border border-[#E2E8F0] p-6 shadow-sm hover:shadow-md transition text-left">
            <h3 className="font-extrabold text-lg">
              Statements
            </h3>

            <p className="mt-2 text-[#475569]">
              Download PDF statements.
            </p>
          </button>

          <button className="rounded-lg bg-white border border-[#E2E8F0] p-6 shadow-sm hover:shadow-md transition text-left">
            <h3 className="font-extrabold text-lg">
              Profile
            </h3>

            <p className="mt-2 text-[#475569]">
              Manage your account.
            </p>
          </button>

        </div>

        {/* Transactions + Beneficiaries */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[2fr_1fr]">

          {/* Recent Transactions */}
          <div className="rounded-lg border border-[#E2E8F0] bg-white shadow-sm">

            <div className="border-b border-[#E2E8F0] p-6">
              <h2 className="text-2xl font-extrabold">
                Recent Transactions
              </h2>
            </div>

            <div className="divide-y divide-[#E2E8F0]">

              {transactions.map((txn) => (
                <div
                  key={txn.id}
                  className="flex items-center justify-between p-6"
                >
                  <div>
                    <p className="font-bold">
                      {txn.name}
                    </p>

                    <p className="text-sm text-[#475569]">
                      {txn.date}
                    </p>
                  </div>

                  <p
                    className={`font-extrabold ${
                      txn.type === "credit"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {txn.amount}
                  </p>
                </div>
              ))}

            </div>

          </div>

          {/* Beneficiaries */}
          <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">

            <h2 className="text-2xl font-extrabold">
              Beneficiaries
            </h2>

            <div className="mt-6 space-y-4">

              {beneficiaries.map((name) => (
                <div
                  key={name}
                  className="rounded-md bg-[#F8FAFC] p-4"
                >
                  {name}
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* Insights */}
        <div className="mt-8 rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">

          <h2 className="text-2xl font-extrabold">
            Account Insights
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">

            <div className="rounded-lg bg-[#F8FAFC] p-5">
              <p className="text-sm text-[#475569]">
                This Month Spending
              </p>

              <h3 className="mt-2 text-3xl font-extrabold">
                ₹12,450
              </h3>
            </div>

            <div className="rounded-lg bg-[#F8FAFC] p-5">
              <p className="text-sm text-[#475569]">
                Money Received
              </p>

              <h3 className="mt-2 text-3xl font-extrabold text-green-600">
                ₹32,000
              </h3>
            </div>

            <div className="rounded-lg bg-[#F8FAFC] p-5">
              <p className="text-sm text-[#475569]">
                Transactions
              </p>

              <h3 className="mt-2 text-3xl font-extrabold text-[#2563EB]">
                48
              </h3>
            </div>

          </div>

        </div>

      </section>
    </main>
  );
}
