import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Historic League in Connecticut
              </div>
              <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Connecticut Cricket League</h1>
              <p className="mt-3 max-w-prose text-base text-white/75">
                CCL is one of Connecticut’s long-running cricket leagues, bringing competitive cricket and community together season after season.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/match-center"
                  className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90"
                >
                  Open Match Center
                </Link>
                <Link
                  href="/about"
                  className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  About CCL
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-tr from-cyan-500/20 via-transparent to-pink-500/20 blur-2xl" />
              <div className="relative rounded-[32px] border border-white/10 bg-black/25 p-7 shadow-soft">
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/ccl-logo.jpg"
                    alt="Connecticut Cricket League logo"
                    width={120}
                    height={120}
                    className="rounded-2xl bg-white p-2"
                    priority
                  />
                  <div>
                    <p className="text-sm text-white/70">Match formats</p>
                    <p className="mt-1 text-lg font-semibold">Leather Ball and Hard Tennis Ball (CCL - TCL)</p>
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  <Link
                    href="/leatherball"
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
                  >
                    <p className="text-sm font-semibold">Leather Ball</p>
                    <p className="mt-1 text-xs text-white/70">Live matches and schedule</p>
                  </Link>
                  <Link
                    href="/tcl"
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
                  >
                    <p className="text-sm font-semibold">CCL - TCL</p>
                    <p className="mt-1 text-xs text-white/70">Live games and schedule</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-sm font-semibold">Latest Updates</h2>
            <p className="mt-2 text-sm text-white/70">
              Admin announcements will appear here. For now, this section is ready.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-sm font-semibold">Quick Links</h2>
            <div className="mt-3 grid gap-2 text-sm">
              <Link className="text-white/80 hover:text-white" href="/teams">Teams</Link>
              <Link className="text-white/80 hover:text-white" href="/points-table">Points Table</Link>
              <Link className="text-white/80 hover:text-white" href="/gallery">Gallery</Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-sm font-semibold">Powered by CricClubs</h2>
            <p className="mt-2 text-sm text-white/70">
              Live scoring and schedules are tracked on CricClubs for registered league competitions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
