export const metadata = {
  title: 'Points Table',
};

function Embed({ url }: { url: string }) {
  if (!url) {
    return (
      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-lg font-semibold">Coming soon</h2>
        <p className="mt-2 text-sm text-white/70">
          Add a CricClubs points table URL to show standings here.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/20">
      <iframe
        title="CCL Points Table"
        src={url}
        className="h-[78vh] w-full"
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

export default function PointsTablePage() {
  const url = process.env.CRICCLUBS_POINTS_TABLE_URL ?? '';

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Points Table</h1>
      <p className="mt-3 text-white/75">Standings and league tables.</p>
      <Embed url={url} />
    </main>
  );
}
