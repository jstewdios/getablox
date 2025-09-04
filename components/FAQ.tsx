export default function FAQ() {
  const items = [
    {q:"What is Grow Blox?", a:"A countertop greenhouse that looks like a vintage radio—warm wood, glowing porthole windows, and smart sensors that make growing herbs and greens effortless."},
    {q:"How does the presale work?", a:"Reserve your unit with a refundable $20 deposit today. We’ll email when your batch is ready; your deposit converts to a discount on checkout."},
    {q:"What power and maintenance do I need?", a:"Standard wall outlet (USB‑C adapter included). Refill the small reservoir weekly; the app reminds you when it’s thirsty."},
    {q:"When will it ship?", a:"We’re targeting first pilot units in Q1 next year. You’ll receive regular build updates and behind‑the‑scenes progress videos."},
  ];

  return (
    <section id="faq" className="container py-20">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">FAQ</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {items.map((it, i)=>(
          <div key={i} className="card p-6">
            <h3 className="font-semibold">{it.q}</h3>
            <p className="text-white/80 mt-2 leading-relaxed">{it.a}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
