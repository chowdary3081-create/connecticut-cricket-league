export const metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">About Connecticut Cricket League</h1>
      <p className="mt-4 text-white/80">
        Connecticut Cricket League (CCL) is one of the longest-running cricket communities in Connecticut, serving players and teams for more than 50 years.
      </p>
      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-xl font-semibold">Our mission</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-white/80">
          <li>Run well-organized, fair competitions across formats.</li>
          <li>Promote sportsmanship, community, and youth development.</li>
          <li>Provide reliable match tracking via CricClubs.</li>
        </ul>
      </div>
      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-xl font-semibold">Formats under CCL</h2>
        <p className="mt-2 text-white/80">
          Leather Ball Cricket and Hard Tennis Ball Cricket (CCL - TCL).
        </p>
      </div>
    </main>
  );
}
