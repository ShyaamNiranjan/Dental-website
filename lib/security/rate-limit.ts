const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(key: string, limit = 8, windowMs = 60_000) {
  const now = Date.now();
  const entry = rateLimitStore.get(key);

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true };
  }

  if (entry.count >= limit) {
    return { allowed: false };
  }

  entry.count += 1;
  rateLimitStore.set(key, entry);
  return { allowed: true };
}

export function generateConfirmationCode() {
  const segment = Math.random().toString(36).slice(2, 6).toUpperCase();
  const digits = Math.floor(1000 + Math.random() * 9000);
  return `CS-${segment}-${digits}`;
}
