import Link from 'next/link';

function Tile({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="mt-2 text-sm text-white/70">{desc}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white/80">
          Open
        </div>
      </div>
      <div className="mt-5 h-px w-full bg-white/10" />
      <p className="mt-4 text-sm text-white/70">
        Live scoring, fixtures, and match details.
      </p>
    </Link>
  );
}

export default function MatchCenterPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Match Center</h1>
      <p className="mt-2 max-w-2xl text-sm text-white/70">
        Choose a format to view live matches and schedules.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Tile
          title="Leather Ball Cricket"
          desc="League matches and tournaments tracked in CricClubs"
          href="/leatherball"
        />
        <Tile
          title="Hard Tennis Ball (CCL - TCL)"
          desc="TCL games organized under Connecticut Cricket League"
          href="/tcl"
        />
      </div>
    </main>
  );
}
