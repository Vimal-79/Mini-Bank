"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiSend, FiCreditCard, FiDownload, FiFileText, FiCheck } from 'react-icons/fi'
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [accountHolder, setAccountHolder] = useState({
    name: "John Doe",
    accountNumber: "CB00000000",
    accountType: "Savings Account",
  });
  const [accountStats] = useState({
    balance: 125450.75,
    monthlyIncome: 48000,
    monthlyExpense: 12500,
    savingsGoal: 50000,
  });

  const [recentTransactions] = useState([
    {
      id: 1,
      description: "Salary Credit",
      amount: 48000,
      type: "credit",
      date: "2026-06-25",
      status: "Completed",
    },
    {
      id: 2,
      description: "Electricity Bill",
      amount: 2500,
      type: "debit",
      date: "2026-06-24",
      status: "Completed",
    },
    {
      id: 3,
      description: "Transfer to Aarav Mehta",
      amount: 7500,
      type: "debit",
      date: "2026-06-23",
      status: "Completed",
    },
    {
      id: 4,
      description: "ATM Withdrawal",
      amount: 5000,
      type: "debit",
      date: "2026-06-22",
      status: "Completed",
    },
  ]);

  useEffect(() => {
    const verifyJWT = async () => {
      try {
        const token = localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

        if (!token) {
          router.push("/login");
          return;
        }

        // Verify token with backend
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/verify-token`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          localStorage.removeItem("authToken");
          sessionStorage.removeItem("authToken");
          router.push("/login");``
          return;
        }

        const data = await response.json();
        console.log("JWT verification response:", data);
        if (data.valid) {
          setAccountHolder((prev) => ({
            ...prev,
            name: data.user?.firstName
              ? `${data.user.firstName} ${data.user.lastName}`
              : prev.name,
            accountNumber: data.user?.accountNumber || prev.accountNumber,
          }));
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem("authToken");
          sessionStorage.removeItem("authToken");
          router.push("/login");
        }
      } catch (error) {
        console.error("JWT verification error:", error);
        localStorage.removeItem("authToken");
        sessionStorage.removeItem("authToken");
        router.push("/login");
      } finally {
        setIsLoading(false);
      }
    };

    verifyJWT();
  }, [router]);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2563EB] mx-auto mb-4"></div>
          <p className="text-[#475569] font-semibold">Loading dashboard...</p>
        </div>
      </main>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const quickActions = [
    { label: "Send Money", href: "/services", icon: <FiSend size={20} /> },
    { label: "Pay Bills", href: "/services", icon: <FiCreditCard  size={20} /> },
    { label: "Request Money", href: "/services", icon: <FiDownload size={20} /> },
    { label: "View Statements", href: "/services", icon: <FiFileText size={20} /> },
  ];

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");
    router.push("/login");
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      {/* Header Section */}
      <section className="bg-[#061A40] text-white">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-normal text-[#93C5FD]">
                Welcome back
              </p>
              <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">
                {accountHolder.name}
              </h1>
              <p className="mt-2 text-blue-100">
                {accountHolder.accountType} • {accountHolder.accountNumber}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={handleLogout}
                className="w-fit rounded-md bg-red-600 px-5 py-2 text-sm font-bold text-white transition hover:bg-red-700 cursor-pointer"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        {/* Account Balance Section */}
        <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Balance Card */}
          <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-[#475569]">Total Balance</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0F172A]">
              ₹{accountStats.balance.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
            </h2>
            <p className="mt-2 text-xs text-[#64748B]">As of today</p>
          </div>

          {/* Monthly Income */}
          <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-[#475569]">Monthly Income</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#22C55E]">
              ₹{accountStats.monthlyIncome.toLocaleString("en-IN")}
            </h2>
            <p className="mt-2 text-xs text-[#64748B]">This month</p>
          </div>

          {/* Monthly Expense */}
          <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-[#475569]">Monthly Expense</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#EF4444]">
              ₹{accountStats.monthlyExpense.toLocaleString("en-IN")}
            </h2>
            <p className="mt-2 text-xs text-[#64748B]">This month</p>
          </div>

          {/* Savings Goal */}
          <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-[#475569]">Savings Goal</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#2563EB]">
              ₹{accountStats.savingsGoal.toLocaleString("en-IN")}
            </h2>
            <p className="mt-2 text-xs text-[#64748B]">Target amount</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h3 className="mb-4 text-xl font-extrabold text-[#0F172A]">Quick Actions</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {quickActions.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center justify-between rounded-lg border border-[#E2E8F0] bg-white p-4 transition hover:border-[#2563EB] hover:bg-[#F0F9FF]"
              >
                <span className="font-semibold text-[#0F172A]">{item.label}</span>
                <span className="icon">{item.icon}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Transactions and Account Options */}
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          {/* Recent Transactions */}
          <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between border-b border-[#E2E8F0] pb-4">
              <h3 className="text-xl font-extrabold text-[#0F172A]">Recent Transactions</h3>
              <Link
                href="/services"
                className="text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8]"
              >
                View All
              </Link>
            </div>

            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between border-b border-[#E2E8F0] pb-4 last:border-b-0"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${transaction.type === "credit"
                        ? "bg-[#DCFCE7] text-[#15803D]"
                        : "bg-[#FEE2E2] text-[#B91C1C]"
                        }`}
                    >
                      {transaction.type === "credit" ? "⬇️" : "⬆️"}
                    </div>
                    <div>
                      <p className="font-semibold text-[#0F172A]">
                        {transaction.description}
                      </p>
                      <p className="text-sm text-[#475569]">{transaction.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p
                      className={`font-extrabold ${transaction.type === "credit"
                        ? "text-[#22C55E]"
                        : "text-[#EF4444]"
                        }`}
                    >
                      {transaction.type === "credit" ? "+" : "-"}₹
                      {transaction.amount.toLocaleString("en-IN")}
                    </p>
                    <p className="text-xs text-[#64748B]">{transaction.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Account Options Sidebar */}
          <aside className="space-y-5">
            {/* Account Details */}
            <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-extrabold text-[#0F172A]">
                Account Details
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-[#64748B]">Account Number</p>
                  <p className="font-semibold text-[#0F172A]">
                    {accountHolder.accountNumber}
                  </p>
                </div>
                <div>
                  <p className="text-[#64748B]">Account Type</p>
                  <p className="font-semibold text-[#0F172A]">
                    {accountHolder.accountType}
                  </p>
                </div>
                <div>
                  <p className="text-[#64748B]">Status</p>
                  <p className="inline-block rounded-md bg-[#DCFCE7] px-2 py-1 text-xs font-bold text-[#15803D]">
                    Active
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-extrabold text-[#0F172A]">
                Management
              </h3>
              <div className="space-y-2">
                <Link
                  href="/"
                  className="block rounded-md px-3 py-2 text-sm font-semibold text-[#2563EB] transition hover:bg-[#F0F9FF]"
                >
                  View Statements
                </Link>
                <Link
                  href="/security"
                  className="block rounded-md px-3 py-2 text-sm font-semibold text-[#2563EB] transition hover:bg-[#F0F9FF]"
                >
                  Security Settings
                </Link>
                <Link
                  href="/about"
                  className="block rounded-md px-3 py-2 text-sm font-semibold text-[#2563EB] transition hover:bg-[#F0F9FF]"
                >
                  Help & Support
                </Link>
              </div>
            </div>

            {/* Account Status */}
            <div className="rounded-lg border border-[#BBF7D0] bg-[#DCFCE7] p-6 shadow-sm">
              <p className="text-sm font-bold text-[#15803D] flex gap-1 items-center"><span className="icon"> <FiCheck /> </span> Account Verified</p>
              <p className="mt-2 text-xs text-[#15803D]">
                Your account is fully verified and ready for all transactions.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
