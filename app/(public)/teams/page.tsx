export const metadata = {
  title: 'Teams',
};

export default function TeamsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Teams</h1>
      <p className="mt-3 text-white/75">
        This page can list all participating teams. If your CricClubs league has a public team directory link, paste it into the site config to show it here.
      </p>

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-lg font-semibold">Coming soon</h2>
        <p className="mt-2 text-sm text-white/70">
          Add your CricClubs team list URL and this will auto-embed, similar to Live/Schedule pages.
        </p>
      </div>
    </main>
  );
}
