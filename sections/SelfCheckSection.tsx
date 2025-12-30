import AnimatedTextMask from "@/components/AnimatedTextMask";

export default function SelfCheckSection() {
  return (
    <section className="py-16 border-t border-border min-h-screen">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <AnimatedTextMask
          as="h2"
          className="text-2xl sm:text-3xl font-semibold"
          lines={["Is your website working?"]}
        />
        <ul className="mt-4 space-y-2 list-disc pl-5 inline-block text-left mx-auto">
          <li>Does it load fast?</li>
          <li>Is the message clear in 5 seconds?</li>
          <li>Does it guide users to action?</li>
        </ul>
        <AnimatedTextMask
          as="p"
          className="mt-3 text-muted-foreground max-w-2xl mx-auto"
          lines={["If not — it’s costing you business."]}
        />
      </div>
    </section>
  );
}
