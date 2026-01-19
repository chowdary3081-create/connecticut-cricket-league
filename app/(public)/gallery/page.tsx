import Image from 'next/image';

export const metadata = {
  title: 'Gallery',
};

const items = [
  { src: '/images/ccl-logo.jpg', alt: 'CCL Logo' },
  { src: '/images/og.png', alt: 'CCL Preview' },
  { src: '/images/og-ccl.png', alt: 'CCL Share Image' },
];

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Gallery</h1>
      <p className="mt-3 text-white/75">
        Upload match photos, team photos, and event highlights to showcase the league.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div key={it.src} className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <div className="relative aspect-[4/3]">
              <Image src={it.src} alt={it.alt} fill className="object-cover" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
