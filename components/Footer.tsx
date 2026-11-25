import Link from "next/link";
import { VisitorCounter } from "@/components/VisitorCounter";
import { CATEGORIES } from "@/lib/products";
import { AD_DISCLOSURE, COUPANG_FOOTER_DISCLOSURE, NOT_AFFILIATED, SISTER_SITES, SITE_NAME, sisterUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-slate-50 text-sm text-slate-600">
      <div className="mx-auto max-w-5xl space-y-4 px-4 py-8">
        <p className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-amber-900">
          <strong className="mr-1">광고 고지</strong>
          {AD_DISCLOSURE} {COUPANG_FOOTER_DISCLOSURE}
        </p>
        <p className="text-xs leading-relaxed">{NOT_AFFILIATED} 사양은 Apple 공식 사양 페이지와 네이버 Apple 브랜드스토어를 참고해 정리했으며, 가격·재고·구성은 수시로 바뀌므로 구매 전 링크에서 꼭 확인하세요.</p>
        <nav className="flex flex-wrap gap-x-4 gap-y-1">
          {CATEGORIES.map((c) => (
            <Link key={c.id} href={c.path}>{c.label}</Link>
          ))}
          <Link href="/about">사이트 안내</Link>
        </nav>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
          {SISTER_SITES.map((s) => (
            <a key={s.url} href={sisterUrl(s.url)} target="_blank" rel="noopener">{s.label}</a>
          ))}
        </div>
        <div className="flex items-center justify-between text-xs">
          <span>© {SITE_NAME} · 운영자</span>
          <VisitorCounter />
        </div>
      </div>
    </footer>
  );
}
