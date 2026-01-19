import { EmbeddedMatchCenter } from '@/components/cricket/EmbeddedMatchCenter';

export default function LeatherBallPage() {
  const liveUrl = process.env.CRICCLUBS_LEATHER_LIVE_URL ?? '';
  const scheduleUrl = process.env.CRICCLUBS_LEATHER_SCHEDULE_URL ?? '';

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <EmbeddedMatchCenter
        title="Leather Ball Cricket"
        liveUrl={liveUrl}
        scheduleUrl={scheduleUrl}
      />
    </main>
  );
}
