import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <header className="container-page pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <Image src="/ccl-logo.png" alt="CCL" width={44} height={44} />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">Connecticut Cricket League</div>
              <div className="text-xs text-white/60">Official website</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <Link className="hover:text-white" href="/match-center">Match Center</Link>
            <Link className="hover:text-white" href="/schedule">Schedule</Link>
            <Link className="hover:text-white" href="/points">Points</Link>
            <Link className="hover:text-white" href="/about">About</Link>
          </nav>
        </div>
      </header>

      <section className="container-page pt-10 pb-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Historic League in Connecticut
            </div>

            <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight">
              Connecticut Cricket League
            </h1>

            <p className="mt-4 text-base md:text-lg text-white/70 max-w-xl leading-relaxed">
              Competitive cricket, community, and season updates. View match center, schedules, points,
              and league announcements.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link className="btn btn-primary" href="/match-center">Open Match Center</Link>
              <Link className="btn btn-secondary" href="/about">About CCL</Link>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <Image src="/ccl-logo.png" alt="CCL" width={48} height={48} />
              </div>
              <div>
                <div className="text-xs text-white/60">Match formats</div>
                <div className="text-base font-semibold">Leather Ball and Hard Tennis Ball</div>
                <div className="text-sm text-white/60">CCL • TCL</div>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <Link href="/match-center?format=leather" className="block rounded-2xl border border-white/10 bg-black/20 p-4 hover:bg-black/30 transition">
                <div className="font-semibold">Leather Ball</div>
                <div className="text-sm text-white/60">Live matches and schedule</div>
              </Link>

              <Link href="/match-center?format=tcl" className="block rounded-2xl border border-white/10 bg-black/20 p-4 hover:bg-black/30 transition">
                <div className="font-semibold">CCL - TCL</div>
                <div className="text-sm text-white/60">Live games and schedule</div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page pb-14">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="card p-6">
            <div className="text-sm font-semibold">Latest Updates</div>
            <div className="mt-2 text-sm text-white/60">
              Add announcements here (or connect to CricClubs feed later).
            </div>
          </div>

          <div className="card p-6">
            <div className="text-sm font-semibold">Quick Links</div>
            <div className="mt-3 grid gap-2 text-sm text-white/70">
              <Link className="hover:text-white" href="/schedule">Schedule</Link>
              <Link className="hover:text-white" href="/points">Points Table</Link>
              <Link className="hover:text-white" href="/teams">Teams</Link>
            </div>
          </div>

          <div className="card p-6">
            <div className="text-sm font-semibold">Powered by CricClubs</div>
            <div className="mt-2 text-sm text-white/60">
              Match data and fixtures are maintained via CricClubs.
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="container-page py-8 text-sm text-white/60">
          © {new Date().getFullYear()} Connecticut Cricket League. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
