"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  if (status === "sent") {
    return (
      <p className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
        Thanks! We’ll get back to you shortly.
      </p>
    );
  }

  return (
    <form
      className="mt-8 space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        setStatus("sent");
      }}
    >
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input className="mt-1 w-full h-11 rounded-lg border border-white/10 bg-transparent px-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#FF4A03]/40 focus:border-[#FF4A03]/40" placeholder="John Doe" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input type="email" className="mt-1 w-full h-11 rounded-lg border border-white/10 bg-transparent px-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#FF4A03]/40 focus:border-[#FF4A03]/40" placeholder="john@company.com" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Business</label>
        <input className="mt-1 w-full h-11 rounded-lg border border-white/10 bg-transparent px-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#FF4A03]/40 focus:border-[#FF4A03]/40" placeholder="Company Inc." />
      </div>
      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea rows={5} className="mt-1 w-full h-32 rounded-lg border border-white/10 bg-transparent px-3 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#FF4A03]/40 focus:border-[#FF4A03]/40" placeholder="Tell us about your project goals..." required />
      </div>
      <button className="w-full rounded-full bg-gradient-to-r from-[#FF4A03] to-[#FF7A1E] px-6 py-3 text-white shadow-lg shadow-orange-500/20">
        Start the Conversation
      </button>
    </form>
  );
}
