import ContactForm from "./form";
import { Mail, Phone } from "lucide-react";
import FAQ from "@/sections/FaqSection";

export const metadata = {
  title: "Contact | TheAccellor",
  description: "Whether you need a new website or a better one — we’re ready.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Let’s talk.</h1>
      <p className="mt-3 text-white/70 max-w-2xl">
        Whether you need a new website or a better one — we’re ready. Tell us about your project and let&apos;s build something that works.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2 items-start">
        {/* Left info */}
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10">
              <Mail className="size-5 text-white/80" />
            </span>
            <div>
              <div className="font-medium">Email Us</div>
              <div className="text-white/70">hello@theaccellor.com</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10">
              <Phone className="size-5 text-white/80" />
            </span>
            <div>
              <div className="font-medium">Call Us</div>
              <div className="text-white/70">+1 (555) 123-4567</div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="font-medium">What happens next?</div>
            <ol className="mt-3 space-y-2 text-white/70 list-decimal pl-5">
              <li>We review your project requirements</li>
              <li>We schedule a quick discovery call</li>
              <li>We provide a clear proposal and timeline</li>
            </ol>
          </div>
        </div>

        {/* Right form */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <ContactForm />
        </div>
      </div>
      <FAQ/>
    </div>
  );
}
