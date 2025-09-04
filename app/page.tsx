import Nav from "@/components/Nav";
import Badge from "@/components/Badge";
import Feature from "@/components/Feature";
import PresaleForm from "@/components/PresaleForm";

export default function Page() {
  return (
    <main id="top" className="gradient">
      <Nav />

      {/* Hero */}
      <section className="container pt-16 pb-10 md:pt-24 md:pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Badge>New • Presale</Badge>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Grow Blox<span className="text-brand">.</span>{" "}
            <span className="text-white/80">A living radio for plants.</span>
          </h1>
          <p className="mt-5 text-white/80 text-lg leading-relaxed max-w-xl">
            A countertop greenhouse that feels like furniture—warm wood shell, glowing porthole windows, and smart sensors that let your plants “speak.”
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#presale" className="rounded-xl bg-brand px-5 py-3 text-black font-semibold hover:bg-brand/90 shadow-glow">
              Reserve yours
            </a>
            <a href="#features" className="rounded-xl border border-white/15 px-5 py-3 hover:bg-white/5">See features</a>
          </div>

          <div className="mt-6 text-sm text-white/70">
            Hand‑crafted shell • Modular core • Net‑connected sensors
          </div>
        </div>

        <div className="card aspect-[4/3] p-4 grid place-items-center">
          <div className="w-full h-full rounded-xl bg-gradient-to-br from-brand/20 to-white/5 grid place-items-center">
            <div className="text-center">
              <div className="text-6xl">📻🌱</div>
              <p className="mt-2 text-white/80">Vintage radio vibes, tiny biodome inside.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container py-10 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Why people love Grow Blox</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Feature title="Furniture‑grade shell" icon="🪵">
            Walnut, cedar, or matte white shells snap around a sealed core. Rounded corners and soft edges feel at home anywhere.
          </Feature>
          <Feature title="Glowing portholes" icon="🪟">
            Frosted acrylic windows diffuse full‑spectrum LEDs—gentle by night, powerful by day.
          </Feature>
          <Feature title="Smart and friendly" icon="🤖">
            Temperature, humidity and reservoir sensors translate into friendly cues: “I’m thirsty” or “The light feels cozy.”
          </Feature>
          <Feature title="Effortless hydroponics" icon="💧">
            Simple reservoir with wick/drip options. Refill weekly. Nutrient starter kit included in first run.
          </Feature>
          <Feature title="Quiet airflow" icon="🌬️">
            Tuned fans keep air moving with low noise. Optional carbon filter keeps things fresh.
          </Feature>
          <Feature title="Modular core" icon="🧩">
            The electronics + pump live in a sealed cube. Upgrade shells later without replacing the heart.
          </Feature>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="container py-10 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">How the presale works</h2>
        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          <li className="card p-6">
            <h3 className="font-semibold">1) Reserve</h3>
            <p className="text-white/80 mt-2">Drop a fully refundable $20 deposit and pick your shell color.</p>
          </li>
          <li className="card p-6">
            <h3 className="font-semibold">2) Build updates</h3>
            <p className="text-white/80 mt-2">We share behind‑the‑scenes progress while we finalize the pilot batch.</p>
          </li>
          <li className="card p-6">
            <h3 className="font-semibold">3) Claim</h3>
            <p className="text-white/80 mt-2">When your unit is ready, your deposit converts into a discount at checkout.</p>
          </li>
        </ol>
      </section>

      {/* Presale form */}
      <section id="presale" className="container py-10 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Reserve your Grow Blox</h2>
            <p className="text-white/80 mt-3 max-w-prose">
              Join the first batch and help shape the product. Your deposit is fully refundable any time before shipping.
            </p>
            <ul className="mt-4 space-y-2 text-white/80">
              <li>• Target price: <span className="font-semibold">$279–$349</span> depending on shell</li>
              <li>• Early adopter discount for presale customers</li>
              <li>• Ships with starter seeds and nutrients</li>
            </ul>
          </div>
          <PresaleForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="container py-8 text-sm text-white/70 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Building Blox</div>
          <div className="flex items-center gap-4">
            <a className="opacity-80 hover:opacity-100" href="#faq">FAQ</a>
            <a className="opacity-80 hover:opacity-100" href="#presale">Pre‑Order</a>
            <a className="opacity-80 hover:opacity-100" href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
