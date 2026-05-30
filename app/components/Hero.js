import React from 'react'

export function HeroLeft() {
    return (
        <div className="space-y-8 ">

            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-400/30 px-4 py-2 rounded-full text-cyan-300 text-sm">
                users Trusted Digital Banking Platform
            </div>

            <div>
                <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
                    Welcome To
                    <span className="block text-cyan-400">
                        Chulbul Bank
                    </span>
                </h2>
            </div>

            <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
                Experience secure online banking with instant transfers,
                smart account management, advanced security,
                and modern financial services designed for everyone.
            </p>

            <div className="flex flex-wrap gap-5">

                <button className="px-7 py-4 rounded-2xl bg-cyan-400 text-slate-950 font-bold hover:bg-cyan-300 transition shadow-2xl shadow-cyan-500/40">
                    Open Account
                </button>

                <button className="px-7 py-4 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition">
                    Learn More
                </button>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-5 pt-8">

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <h3 className="text-3xl font-bold text-cyan-400">
                        10M+
                    </h3>
                    <p className="text-gray-300 text-sm mt-1">
                        Users
                    </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <h3 className="text-3xl font-bold text-cyan-400">
                        99.9%
                    </h3>
                    <p className="text-gray-300 text-sm mt-1">
                        Uptime
                    </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <h3 className="text-3xl font-bold text-cyan-400">
                        24/7
                    </h3>
                    <p className="text-gray-300 text-sm mt-1">
                        Support
                    </p>
                </div>

            </div>
        </div>
    )
}


export function HeroRight() {
    return (
        <div className="relative flex justify-center items-center">

            {/* Glow */}
            <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>

            {/* Banking Card */}
            <div className="relative bg-white/10 border border-white/20 backdrop-blur-2xl rounded-3xl p-8 w-full max-w-md shadow-2xl">

                <div className="flex items-center justify-between mb-8">

                    <div>
                        <p className="text-gray-300 text-sm">
                            Current Balance
                        </p>

                        <h3 className="text-4xl font-bold mt-2">
                            ₹ 2,45,000
                        </h3>
                    </div>

                    <div className="w-14 h-14 rounded-2xl bg-cyan-400 flex items-center justify-center text-slate-950 text-2xl font-bold">
                        ₹
                    </div>

                </div>

                <div className="space-y-4">

                    <div className="bg-slate-900/40 rounded-2xl p-4 flex items-center justify-between border border-white/10">

                        <div>
                            <p className="text-sm text-gray-400">
                                Transfer Money
                            </p>

                            <p className="font-semibold">
                                Instant Transfer
                            </p>
                        </div>

                        <button className="bg-cyan-400 text-slate-950 px-4 py-2 rounded-xl font-semibold">
                            Send
                        </button>

                    </div>

                    <div className="bg-slate-900/40 rounded-2xl p-4 flex items-center justify-between border border-white/10">

                        <div>
                            <p className="text-sm text-gray-400">
                                Bill Payment
                            </p>

                            <p className="font-semibold">
                                Electricity Bill
                            </p>
                        </div>

                        <span className="text-green-400 font-semibold">
                            Paid
                        </span>

                    </div>

                    <div className="bg-slate-900/40 rounded-2xl p-4 border border-white/10">

                        <div className="flex justify-between mb-3">
                            <span className="text-gray-400">
                                Security Level
                            </span>

                            <span className="text-cyan-400 font-semibold">
                                High
                            </span>
                        </div>

                        <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full w-[90%] bg-cyan-400 rounded-full"></div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}