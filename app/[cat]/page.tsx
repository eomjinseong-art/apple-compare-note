import { CoupangAccessories } from "@/components/CoupangAccessories";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BuyButtons } from "@/components/BuyButtons";
import { JsonLd, won } from "@/components/ui";
import { GUIDES } from "@/lib/guides";
import { CATEGORIES, getModel, minPrice, modelsByCat, type CategoryId } from "@/lib/products";
import { canonicalUrl, pageMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ cat: c.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ cat: string }> }) {
  const { cat } = await params;
  const c = CATEGORIES.find((x) => x.id === cat);
  if (!c) return {};
  const g = GUIDES[c.id];
  return pageMetadata({ title: g.title, description: g.intro, path: c.path, keywords: modelsByCat(c.id).map((m) => `${m.name} 가격`) });
}

export default async function CategoryPage({ params }: { params: Promise<{ cat: string }> }) {
  const { cat } = await params;
  const c = CATEGORIES.find((x) => x.id === cat);
  if (!c) notFound();
  const g = GUIDES[c.id as CategoryId];
  const models = modelsByCat(c.id);
  return (
    <div className="space-y-10">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: g.title,
          url: canonicalUrl(c.path),
          itemListElement: models.map((m, i) => ({ "@type": "ListItem", position: i + 1, name: m.name, url: canonicalUrl(`/models/${m.slug}`) })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: SITE_NAME, item: canonicalUrl("/") },
            { "@type": "ListItem", position: 2, name: c.label, item: canonicalUrl(c.path) },
          ],
        }}
      />
      <section>
        <h1 className="text-2xl font-bold">{g.title}</h1>
        <p className="mt-2 text-slate-600">{g.intro}</p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold">나한테 맞는 모델 고르기</h2>
        <ul className="space-y-2">
          {g.picks.map((p) => (
            <li key={p.q} className="rounded-xl border border-slate-200 p-3">
              <p className="font-medium">Q. {p.q}</p>
              <p className="mt-1 text-sm text-slate-700">{p.a}</p>
              <p className="mt-2 flex flex-wrap gap-2">
                {p.slugs.map((s) => (
                  <a key={s} href={`#${s}`} className="rounded-full bg-slate-900 px-3 py-1 text-xs text-white">{getModel(s)?.name} 보기</a>
                ))}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold">{c.label} 사양 비교표</h2>
        <div className="-mx-4 overflow-x-auto px-4">
          <table className="min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="sticky left-0 bg-slate-100 p-2 text-left">항목</th>
                {models.map((m) => (
                  <th key={m.slug} className="p-2 text-left align-bottom">
                    <Link href={`/models/${m.slug}`} className="text-blue-700">{m.name}</Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <th className="sticky left-0 bg-white p-2 text-left font-medium">최저가(링크 기준)</th>
                {models.map((m) => (
                  <td key={m.slug} className="p-2 tabular-nums">{won(minPrice(m))}~</td>
                ))}
              </tr>
              {g.compareKeys.map((k) => (
                <tr key={k} className="border-b border-slate-100 align-top">
                  <th className="sticky left-0 bg-white p-2 text-left font-medium">{k}</th>
                  {models.map((m) => (
                    <td key={m.slug} className="p-2 text-slate-700">{m.specs[k] ?? "—"}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-500">가격은 2026-11-25 네이버 쇼핑 커넥트 상품 기준이며, 실제 가격은 링크에서 확인하세요. 사양 출처는 각 모델 페이지에 적었습니다.</p>
      </section>

      <section className="space-y-8">
        <h2 className="text-xl font-bold">모델별 설명과 구매 링크</h2>
        {models.map((m) => (
          <article key={m.slug} id={m.slug} className="scroll-mt-28 rounded-2xl border border-slate-200 p-4">
            <h3 className="text-lg font-bold">
              <Link href={`/models/${m.slug}`}>{m.name}</Link>
            </h3>
            <p className="mt-1 text-slate-700">{m.summary}</p>
            <p className="mt-2 text-sm text-slate-600">이런 분께: {m.who.join(" · ")}</p>
            <div className="mt-3">
              <BuyButtons model={m} />
            </div>
            <Link href={`/models/${m.slug}`} className="mt-3 inline-block text-sm text-blue-700">상세 사양 보기 →</Link>
          </article>
        ))}
      </section>

      <CoupangAccessories />

      <section>
        <h2 className="mb-2 text-xl font-bold">구매 전 체크</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
          {g.tips.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
