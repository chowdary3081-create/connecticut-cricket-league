type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

export function rateLimit(
  key: string,
  opts: { limit: number; windowMs: number }
): { ok: true } | { ok: false; retryAfterSec: number } {
  const now = Date.now();
  const b = buckets.get(key);

  if (!b || now > b.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + opts.windowMs });
    return { ok: true };
  }

  if (b.count >= opts.limit) {
    const retryAfterSec = Math.ceil((b.resetAt - now) / 1000);
    return { ok: false, retryAfterSec };
  }

  b.count += 1;
  buckets.set(key, b);
  return { ok: true };
}
