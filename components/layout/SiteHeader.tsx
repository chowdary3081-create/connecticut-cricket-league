import Image from 'next/image';
import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/match-center', label: 'Match Center' },
  { href: '/leatherball', label: 'Leather Ball' },
  { href: '/tcl', label: 'CCL - TCL' },
  { href: '/teams', label: 'Teams' },
  { href: '/points-table', label: 'Points Table' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10">
            <Image
              src="/images/ccl-logo.jpg"
              alt="Connecticut Cricket League logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="leading-tight">
            <div className="text-base font-semibold tracking-tight">Connecticut Cricket League</div>
            <div className="text-xs text-white/60">Since 1970s • Community • Competition</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="lg:hidden">
          <Link
            href="/match-center"
            className="rounded-xl bg-white/10 px-3 py-2 text-sm font-medium hover:bg-white/15"
          >
            Match Center
          </Link>
        </div>
      </div>
    </header>
  );
}
