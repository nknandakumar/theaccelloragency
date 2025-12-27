const reasons = [
  "We think before we design",
  "We focus on results, not trends",
  "Clean code, clear design",
  "No unnecessary complexity",
  "Built to scale with your business",
];

export default function WhySection() {
  return (
    <section className="py-16 border-t border-border min-h-screen">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold">Why clients choose us</h2>
        <ul className="mt-4 space-y-2 list-disc pl-5 text-left inline-block mx-auto">
          {reasons.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          We don’t decorate websites. We engineer growth.
        </p>
      </div>
    </section>
  );
}
