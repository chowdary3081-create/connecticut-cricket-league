import Image from 'next/image';
import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/20">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/ccl-logo.jpg"
              alt="Connecticut Cricket League"
              width={56}
              height={56}
              className="rounded-xl bg-white p-1"
            />
            <div>
              <div className="text-lg font-semibold">Connecticut Cricket League</div>
              <div className="text-sm text-white/60">A historic cricket league in Connecticut.</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm md:grid-cols-3">
            <div className="space-y-2">
              <div className="text-white/60">League</div>
              <ul className="space-y-1">
                <li><Link className="hover:underline" href="/about">About</Link></li>
                <li><Link className="hover:underline" href="/match-center">Match Center</Link></li>
                <li><Link className="hover:underline" href="/teams">Teams</Link></li>
              </ul>
            </div>
            <div className="space-y-2">
              <div className="text-white/60">Competitions</div>
              <ul className="space-y-1">
                <li><Link className="hover:underline" href="/leatherball">Leather Ball</Link></li>
                <li><Link className="hover:underline" href="/tcl">CCL - TCL</Link></li>
                <li><Link className="hover:underline" href="/points-table">Points Table</Link></li>
              </ul>
            </div>
            <div className="space-y-2">
              <div className="text-white/60">Support</div>
              <ul className="space-y-1">
                <li><Link className="hover:underline" href="/contact">Contact</Link></li>
                <li><Link className="hover:underline" href="/gallery">Gallery</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 text-xs text-white/50">
          © {new Date().getFullYear()} Connecticut Cricket League. Entertainment and informational website.
        </div>
      </div>
    </footer>
  );
}
