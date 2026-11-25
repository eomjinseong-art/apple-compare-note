import Link from "next/link";
import { CATEGORIES } from "@/lib/products";
import { SITE_NAME } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex h-12 items-center justify-between">
          <Link href="/" className="text-base font-bold tracking-tight">{SITE_NAME}</Link>
          <Link href="/about" className="text-xs text-slate-500">사이트 안내</Link>
        </div>
        <nav className="-mx-4 flex gap-1 overflow-x-auto px-4 pb-2 text-sm" aria-label="카테고리">
          {CATEGORIES.map((c) => (
            <Link key={c.id} href={c.path} className="whitespace-nowrap rounded-full border border-slate-200 px-3 py-1 hover:bg-slate-100">
              {c.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
