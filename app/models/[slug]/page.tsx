import { CoupangAccessories } from "@/components/CoupangAccessories";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BuyButtons } from "@/components/BuyButtons";
import { ModelCard } from "@/components/ModelCard";
import { JsonLd } from "@/components/ui";
import { CATEGORIES, MODELS, getModel, minPrice, modelsByCat } from "@/lib/products";
import { canonicalUrl, pageMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return MODELS.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const m = getModel(slug);
  if (!m) return {};
  return pageMetadata({
    title: `${m.name} 사양·가격 비교`,
    description: `${m.name}(${m.en}) — ${m.summary} 주요 사양, 추천 대상, 용량별 구매 링크를 정리했습니다.`,
    path: `/models/${m.slug}`,
    keywords: [m.name, `${m.name} 가격`, `${m.name} 사양`, m.en],
  });
}

export default async function ModelPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const m = getModel(slug);
  if (!m) notFound();
  const cat = CATEGORIES.find((c) => c.id === m.cat)!;
  const prices = m.variants.map((v) => v.price);
  const others = modelsByCat(m.cat).filter((x) => x.slug !== m.slug);
  return (
    <div className="space-y-8">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: m.name,
          alternateName: m.en,
          description: m.summary,
          image: m.variants[0].image,
          brand: { "@type": "Brand", name: "Apple" },
          offers: { "@type": "AggregateOffer", priceCurrency: "KRW", lowPrice: Math.min(...prices), highPrice: Math.max(...prices), offerCount: m.variants.length },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: SITE_NAME, item: canonicalUrl("/") },
            { "@type": "ListItem", position: 2, name: cat.label, item: canonicalUrl(cat.path) },
            { "@type": "ListItem", position: 3, name: m.name, item: canonicalUrl(`/models/${m.slug}`) },
          ],
        }}
      />
      <nav className="text-xs text-slate-500">
        <Link href="/">홈</Link> › <Link href={cat.path}>{cat.label}</Link> › {m.name}
      </nav>
      <section className="flex flex-col gap-4 sm:flex-row">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={m.variants[0].image} alt={m.name} width={160} height={160} referrerPolicy="no-referrer" className="h-40 w-40 rounded-2xl bg-slate-100 object-contain" />
        <div>
          <h1 className="text-2xl font-bold">{m.name} <span className="text-base font-normal text-slate-500">{m.en}</span></h1>
          <p className="mt-2 text-slate-700">{m.summary}</p>
          <p className="mt-2 text-sm text-slate-500">링크 기준 {minPrice(m).toLocaleString("ko-KR")}원부터 · 구성 {m.variants.length}개 (2026-11-25 기준)</p>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-lg font-bold">이런 분께 추천</h2>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          {m.who.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-2 text-lg font-bold">주요 사양</h2>
        <table className="w-full border-collapse text-sm">
          <tbody>
            {Object.entries(m.specs).map(([k, v]) => (
              <tr key={k} className="border-b border-slate-100 align-top">
                <th className="w-32 p-2 text-left font-medium text-slate-600">{k}</th>
                <td className="p-2">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-2 text-xs text-slate-500">
          사양 출처: <a href={m.src} target="_blank" rel="noopener nofollow" className="underline">{m.src.replace(/^https?:\/\//, "")}</a>
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-lg font-bold">구매 링크</h2>
        <BuyButtons model={m} />
      </section>

      <CoupangAccessories />

      {others.length > 0 && (
        <section>
          <h2 className="mb-2 text-lg font-bold">다른 {cat.label}와 비교</h2>
          <p className="mb-3 text-sm"><Link href={cat.path} className="text-blue-700">{cat.label} 전체 비교표 보기 →</Link></p>
          <div className="grid gap-3 sm:grid-cols-2">
            {others.map((o) => (
              <ModelCard key={o.slug} model={o} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
