import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth';

export const metadata = {
  title: 'Admin Dashboard',
  robots: { index: false, follow: false },
};

export default async function AdminDashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/admin/login');

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Admin Dashboard</h1>
          <p className="mt-2 text-white/70">Logged in as {session.user?.name ?? 'Admin'}.</p>
        </div>
        <Link
          href="/"
          className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
        >
          Back to site
        </Link>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-semibold">Announcements</h2>
          <p className="mt-2 text-sm text-white/70">
            This starter kit keeps content static. If you want admin-editable announcements and gallery uploads, I can add a PostgreSQL + Prisma setup.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-semibold">CricClubs Links</h2>
          <p className="mt-2 text-sm text-white/70">
            Add your CricClubs URLs in Hostinger Environment Variables to enable live matches and schedules.
          </p>
        </div>
      </div>
    </main>
  );
}
