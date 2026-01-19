'use client';

import * as React from 'react';

function ComingSoon({ title }: { title: string }) {
  return (
    <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-white/70">
        Live matches and schedules will appear here once CricClubs links are added.
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/60">
        <li>Leather Ball: Live URL + Schedule URL</li>
        <li>TCL: Live URL + Schedule URL</li>
      </ul>
    </div>
  );
}

export function EmbeddedMatchCenter({
  title,
  liveUrl,
  scheduleUrl,
}: {
  title: string;
  liveUrl?: string;
  scheduleUrl?: string;
}) {
  const hasLive = Boolean(liveUrl);
  const hasSchedule = Boolean(scheduleUrl);

  const [tab, setTab] = React.useState<'live' | 'schedule'>(() =>
    hasLive ? 'live' : 'schedule'
  );

  const activeUrl = tab === 'live' ? liveUrl : scheduleUrl;

  return (
    <section>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-1 text-sm text-white/70">
            Powered by CricClubs. This page shows live scoring and full schedules when configured.
          </p>
        </div>

        <div className="flex w-full gap-2 md:w-auto">
          <button
            type="button"
            onClick={() => setTab('live')}
            disabled={!hasLive}
            className={`flex-1 rounded-xl px-4 py-2 text-sm font-medium md:flex-none ${
              tab === 'live'
                ? 'bg-white/15'
                : 'bg-transparent hover:bg-white/10'
            } ${!hasLive ? 'cursor-not-allowed opacity-40' : ''}`}
          >
            Live
          </button>
          <button
            type="button"
            onClick={() => setTab('schedule')}
            disabled={!hasSchedule}
            className={`flex-1 rounded-xl px-4 py-2 text-sm font-medium md:flex-none ${
              tab === 'schedule'
                ? 'bg-white/15'
                : 'bg-transparent hover:bg-white/10'
            } ${!hasSchedule ? 'cursor-not-allowed opacity-40' : ''}`}
          >
            Schedule
          </button>
        </div>
      </div>

      {activeUrl ? (
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
          <iframe
            title={`${title} - ${tab}`}
            src={activeUrl}
            className="h-[78vh] w-full"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        <ComingSoon title="Coming soon" />
      )}
    </section>
  );
}
