import { EmbeddedMatchCenter } from '@/components/cricket/EmbeddedMatchCenter';

export default function TclPage() {
  const liveUrl = process.env.CRICCLUBS_TCL_LIVE_URL ?? '';
  const scheduleUrl = process.env.CRICCLUBS_TCL_SCHEDULE_URL ?? '';

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <EmbeddedMatchCenter
        title="Hard Tennis Ball Cricket (CCL - TCL)"
        liveUrl={liveUrl}
        scheduleUrl={scheduleUrl}
      />
    </main>
  );
}
