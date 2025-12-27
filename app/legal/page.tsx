export const metadata = {
  title: "Privacy & Terms | TheAccellor",
  description: "Simple, clear, non-scary language.",
};

export default function LegalPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 space-y-12">
      <section>
        <h1 className="text-3xl sm:text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-3 text-muted-foreground">
          We collect only the information you choose to share (like your name and email via the contact form).
          We use it to respond to your inquiry. We don’t sell your data. You can request deletion anytime.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Terms &amp; Conditions</h2>
        <p className="mt-3 text-muted-foreground">
          Using this site means you agree to our terms. Project work is scoped and agreed before starting.
          Timelines depend on scope and client feedback. All trademarks belong to their respective owners.
        </p>
      </section>
    </div>
  );
}
