'use client';
export default function PresaleForm() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // Important: POST to a static HTML file so Netlify detects the form with plugin v5
    const res = await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data as any).toString(),
    });
    if (res.ok) {
      window.location.href = "/thanks";
    } else {
      alert("Something went wrong. Please try again.");
    }
  }
  return (
    <form
      name="presale"
      onSubmit={handleSubmit}
      className="card p-6 space-y-4"
    >
      <input type="hidden" name="form-name" value="presale" />
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input required name="name" className="w-full rounded-xl bg-black/20 border border-white/15 px-3 py-2 outline-none focus:ring-2 focus:ring-brand/60" placeholder="Avery Maker" />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input required type="email" name="email" className="w-full rounded-xl bg-black/20 border border-white/15 px-3 py-2 outline-none focus:ring-2 focus:ring-brand/60" placeholder="you@example.com" />
        </div>
      </div>
      <div>
        <label className="block text-sm mb-1">Which color shell?</label>
        <select name="color" className="w-full rounded-xl bg-black/20 border border-white/15 px-3 py-2">
          <option>Walnut</option>
          <option>Cedar</option>
          <option>Matte White</option>
        </select>
      </div>
      <div>
        <label className="block text-sm mb-1">Leave a note (optional)</label>
        <textarea name="note" rows={3} className="w-full rounded-xl bg-black/20 border border-white/15 px-3 py-2" placeholder="Where will you keep your Grow Blox?" />
      </div>

      <button className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-2.5 font-semibold text-black hover:bg-brand/90 focus:ring-4 focus:ring-brand/40">
        Reserve with $20 Deposit
      </button>
      <p className="text-xs text-white/70">Fully refundable. Your deposit converts into a discount at checkout.</p>
    </form>
  )
}
