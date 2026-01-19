export const metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-3 text-white/75">
        Send a message to the league administrators. This form is rate-limited.
      </p>

      <form
        className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6"
        action="/api/contact"
        method="post"
      >
        <div className="grid gap-4">
          <div>
            <label className="text-sm text-white/80">Name</label>
            <input
              name="name"
              required
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 p-3 text-sm outline-none focus:border-white/30"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm text-white/80">Email</label>
            <input
              type="email"
              name="email"
              required
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 p-3 text-sm outline-none focus:border-white/30"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-sm text-white/80">Message</label>
            <textarea
              name="message"
              required
              rows={6}
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 p-3 text-sm outline-none focus:border-white/30"
              placeholder="Write your message"
            />
          </div>
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black hover:opacity-90"
          >
            Send Message
          </button>
        </div>
      </form>

      <p className="mt-6 text-xs text-white/50">
        If you have urgent match-day issues, contact the league coordinators through official channels.
      </p>
    </main>
  );
}
