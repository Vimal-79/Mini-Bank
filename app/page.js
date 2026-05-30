import Image from "next/image";
import Navbar from "./components/Navbar.js";
import { HeroLeft, HeroRight } from "./components/Hero.js";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 text-white overflow-hidden">
      <Navbar />
      <section className="px-8 lg:px-20 py-20 grid lg:grid-cols-2 items-center">
        <HeroLeft />
        <HeroRight />
      </section>

    </div>
  );
}
