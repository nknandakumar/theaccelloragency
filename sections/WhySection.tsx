import AnimatedTextMask from "@/components/AnimatedTextMask";

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
        <AnimatedTextMask
          as="h2"
          className="text-2xl sm:text-3xl font-semibold"
          lines={["Why clients choose us"]}
        />
        <ul className="mt-4 space-y-2 list-disc pl-5 text-left inline-block mx-auto">
          {reasons.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
        <AnimatedTextMask
          as="p"
          className="mt-4 text-muted-foreground max-w-2xl mx-auto"
          lines={["We don’t decorate websites. We engineer growth."]}
        />
      </div>
    </section>
  );
}
