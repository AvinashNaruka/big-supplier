import React from 'react'
import { motion } from 'framer-motion'

const suppliers = [
  { name: "GlobalTrade Co.", country: "China", category: "Electronics" },
  { name: "EcoSupply", country: "India", category: "Home & Kitchen" },
  { name: "TrendLink", country: "USA", category: "Fashion" },
  { name: "DropWorld", country: "Germany", category: "Toys & Games" }
]

function Nav(){ 
  return (
    <header className="sticky top-0 z-30">
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/8 to-white/4 flex items-center justify-center ring-1 ring-white/6">
            <span className="font-bold text-lg text-white">BS</span>
          </div>
          <h1 className="text-white text-lg font-semibold">Big Supplier</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-outline">Explore</button>
          <button className="btn-primary">Join Now</button>
        </div>
      </nav>
    </header>
  )
}

function Hero(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-4xl md:text-5xl font-extrabold leading-tight">
            Connect with global dropshipping suppliers.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-neon"> Scale faster. Ship smarter.</span>
          </motion.h1>
          <motion.p initial={{opacity:0, y:12}} animate={{opacity:1, y:0}} transition={{delay:0.12}} className="mt-6 text-gray-200 max-w-lg">
            Big Supplier helps e-commerce sellers import products from verified manufacturers worldwide — fast integration, transparent pricing, and reliable fulfillment.
          </motion.p>
          <motion.div initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{delay:0.24}} className="mt-8 flex gap-4">
            <a href="#contact" className="btn-primary">Join as Supplier</a>
            <a href="#contact" className="btn-outline">Join as Buyer</a>
          </motion.div>
          <div className="mt-8 flex gap-6 text-sm text-gray-300">
            <div><strong>100+</strong> suppliers</div>
            <div><strong>1M+</strong> products</div>
            <div><strong>60+</strong> countries</div>
          </div>
        </div>
        <motion.div initial={{scale:0.98, opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:0.6}} className="relative">
          <div className="card">
            <div className="grid grid-cols-2 gap-3">
              {suppliers.map((s, i)=>(
                <div key={i} className="p-3 bg-white/2 rounded-md">
                  <div className="font-semibold">{s.name}</div>
                  <div className="text-xs text-gray-200 mt-1">{s.category} • {s.country}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-sm text-gray-300">Verified supplier network — quality checks & MOQ options.</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SupplierGrid(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-3xl font-bold text-center mb-8">Top Suppliers</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {suppliers.map((s,i)=>(
          <motion.div key={i} whileHover={{ scale: 1.03, boxShadow: '0 10px 30px rgba(0,0,0,0.6)' }} className="p-5 rounded-2xl card">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="font-semibold text-lg">{s.name}</div>
                <div className="text-sm text-gray-200 mt-1">{s.category}</div>
              </div>
              <div className="text-sm text-gray-300">{s.country}</div>
            </div>
            <p className="mt-4 text-sm text-gray-300">MOQ options • Fast replies • Quality assured</p>
            <div className="mt-4 flex gap-2">
              <button className="text-sm px-3 py-2 rounded-md border border-white/8 hover:bg-white/6">View</button>
              <button className="ml-auto bg-neon text-black px-3 py-2 rounded-md font-semibold">Contact</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function Contact(){
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-12">
      <div className="card p-8">
        <h4 className="text-2xl font-bold mb-2">Get in touch</h4>
        <p className="text-gray-300 mb-4">Send a message and we’ll connect you with the right suppliers.</p>
        <form onSubmit={(e)=>{e.preventDefault(); alert('Thanks — demo form.');}} className="grid gap-4">
          <input placeholder="Your name" className="p-3 rounded-md bg-white/3 border border-white/6" />
          <input placeholder="Email address" className="p-3 rounded-md bg-white/3 border border-white/6" />
          <textarea placeholder="Message" className="p-3 rounded-md bg-white/3 border border-white/6 h-28" />
          <div className="flex gap-3 mt-2">
            <button type="submit" className="bg-neon text-black px-4 py-2 rounded-md font-semibold">Send Message</button>
            <button type="button" className="px-4 py-2 rounded-md border border-white/8">Schedule a Call</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default function App(){
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <SupplierGrid />
        <Contact />
      </main>
      <footer className="mt-12 py-6 text-center text-gray-300">© 2025 Big Supplier — Empowering Dropshippers Worldwide</footer>
    </div>
  )
}
