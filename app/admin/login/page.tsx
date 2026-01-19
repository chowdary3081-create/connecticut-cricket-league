import { Suspense } from "react";
import LoginClient from "./LoginClient";

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-md px-4 py-12 text-sm text-white/70">Loading…</div>}>
      <LoginClient />
    </Suspense>
  );
}
