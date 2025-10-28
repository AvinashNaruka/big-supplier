import React from "react";
import { motion } from "framer-motion";

const suppliers = [
  { name: "GlobalTrade Co.", country: "China", category: "Electronics" },
  { name: "EcoSupply", country: "India", category: "Home & Kitchen" },
  { name: "TrendLink", country: "USA", category: "Fashion" },
  { name: "DropWorld", country: "Germany", category: "Toys & Games" },
  { name: "FlowParts", country: "Vietnam", category: "Accessories" },
  { name: "PrimeBulk", country: "Turkey", category: "Home Decor" }
];

function Nav() {
  return (
    <header className="backdrop-blur-md bg-white/6 sticky top-0 z-30">
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center ring-1 ring-white/10">
            <span className="font-bold text-lg">BS</span>
          </div>
          <h1 className="text-white text-xl font-semibold">Big Supplier</h1>
        </div>

        <div className="flex items-center gap-3">
          <button className="text-sm px-4 py-2 rounded-lg border border-white/10 hover:bg-white/6 transition">Explore</button>
          <button className="bg-white text-indigo-700 px-4 py-2 rounded-lg font-semibold shadow hover:scale-105 transition">Join Now</button>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h2 initial={{opacity:0, y:12}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-4xl md:text-5xl font-extrabold leading-tight">
            Connect with verified suppliers. <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">Scale your dropshipping business.</span>
          </motion.h2>
          <motion.p initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.12, duration:0.6}} className="mt-6 text-indigo-100 max-w-xl">
            Big Supplier helps retailers import products directly from trusted manufacturers worldwide — fast integration, reliable fulfillment, and transparent pricing.
          </motion.p>

          <motion.div initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{delay:0.24, duration:0.6}} className="mt-8 flex gap-4">
            <a className="inline-flex items-center gap-3 bg-white text-indigo-700 px-5 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition" href="#contact">Get Started</a>
            <a className="inline-flex items-center gap-2 text-sm px-4 py-3 rounded-xl border border-white/10 hover:bg-white/6 transition" href="#how">How it works</a>
          </motion.div>

          <motion.div className="mt-8 grid grid-cols-3 gap-3 text-xs text-indigo-100" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.38}}>
            <div className="flex flex-col">
              <span className="font-bold">100+</span>
              <span className="opacity-80">Trusted suppliers</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold">1M+</span>
              <span className="opacity-80">Products listed</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold">Global</span>
              <span className="opacity-80">Shipping across 60+ countries</span>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{scale:0.98, opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:0.6}} className="relative">
          <div className="rounded-2xl p-6 bg-white/6 ring-1 ring-white/8">
            <div className="grid grid-cols-2 gap-4">
              {suppliers.slice(0,4).map((s, i) => (
                <div key={i} className="p-3 bg-white/5 rounded-lg">
                  <div className="text-sm font-semibold">{s.name}</div>
                  <div className="text-xs opacity-80 mt-1">{s.category} • {s.country}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-sm opacity-80">Verified supplier network — quality checks, MOQ options, and fast response times.</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { title: "Connect", body: "Find and verify suppliers with transparent profiles and ratings." },
    { title: "Integrate", body: "Import products to your store in one click with automated syncing." },
    { title: "Fulfill", body: "Track orders and optimize logistics with partnered shippers." }
  ];

  return (
    <section id="how" className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-3xl font-bold text-center mb-8">How it works</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((s, idx) => (
          <motion.div key={s.title} whileHover={{ y:-6 }} className="bg-white/6 p-6 rounded-2xl shadow-lg">
            <div className="text-2xl font-bold">{idx+1}. {s.title}</div>
            <p className="mt-3 text-indigo-100">{s.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function SupplierGrid() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-3xl font-bold text-center mb-8">Top Suppliers</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {suppliers.map((s, i) => (
          <motion.div key={i} whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(0,0,0,0.35)" }} className="bg-white/5 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-lg">{s.name}</div>
                <div className="text-xs opacity-80 mt-1">{s.category}</div>
              </div>
              <div className="text-sm opacity-70">{s.country}</div>
            </div>
            <div className="mt-4 text-sm opacity-80">MOQ options • Fast replies • Quality assured</div>
            <div className="mt-4 flex gap-2">
              <button className="text-sm px-3 py-2 rounded-md border border-white/8 hover:bg-white/6">View</button>
              <button className="ml-auto bg-indigo-600 px-3 py-2 rounded-md font-semibold hover:bg-indigo-700">Contact</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-12">
      <div className="bg-white/6 p-8 rounded-2xl shadow-lg">
        <h4 className="text-2xl font-bold mb-4">Get in touch</h4>
        <p className="text-indigo-100 mb-6">Send us a message and we’ll connect you with the right suppliers.</p>
        <form onSubmit={(e)=>{ e.preventDefault(); alert('Thanks — demo form (no backend).'); }} className="grid grid-cols-1 gap-4">
          <input className="p-3 rounded-md bg-white/5 border border-white/8" placeholder="Your name" />
          <input className="p-3 rounded-md bg-white/5 border border-white/8" placeholder="Email address" />
          <textarea className="p-3 rounded-md bg-white/5 border border-white/8 h-28" placeholder="Message" />
          <div className="flex gap-3 mt-2">
            <button type="submit" className="bg-indigo-600 px-4 py-2 rounded-md font-semibold hover:bg-indigo-700">Send Message</button>
            <button type="button" className="px-4 py-2 rounded-md border border-white/8">Schedule a Call</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <SupplierGrid />
        <Contact />
      </main>
      <footer className="mt-12 py-6 text-center text-indigo-100">
        © 2025 Big Supplier — Empowering Dropshippers Worldwide
      </footer>
    </div>
  );
}
