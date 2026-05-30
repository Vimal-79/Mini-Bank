import React from 'react'
import Link from 'next/link'
import BankLogo from './BankLogo.js'

function Navbar() {
    return (
        <nav className="flex items-center justify-between min-w-screen px-8 py-5 border-b border-white/10 backdrop-blur-md bg-white/5">
            <BankLogo />            

            <ul className="hidden md:flex gap-8 text-gray-200 font-medium *:cursor-pointer">
                <li className="hover:text-cyan-400 cursor-pointer"> <Link href="./" >Home</Link></li>
                <li className="hover:text-cyan-400 cursor-pointer"> <Link href="./services" >Services</Link></li>
                <li className="hover:text-cyan-400 cursor-pointer"> <Link href="./security" >Security</Link></li>
                <li className="hover:text-cyan-400 cursor-pointer"> <Link href="./about" >About</Link></li>
                <li className="hover:text-cyan-400 cursor-pointer"> <Link href="./contact" >Contact</Link></li>
            </ul>

            <div className="flex gap-4">
                <Link href="./login">
                    <button className="px-5 py-2 rounded-xl border border-cyan-400 text-cyan-300 hover:bg-cyan-500/20 transition cursor-pointer">
                        Login
                    </button>
                </Link>

                <Link href="./register">
                <button className="px-5 py-2 rounded-xl bg-cyan-400 text-slate-950 font-semibold hover:bg-cyan-300 transition cursor-pointer">
                    Register
                </button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
