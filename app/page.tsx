import Link from "next/link";
import { ModelCard } from "@/components/ModelCard";
import { JsonLd } from "@/components/ui";
import { GUIDES } from "@/lib/guides";
import { CATEGORIES, MODELS, modelsByCat } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_SUB, SITE_TAGLINE, SITE_URL } from "@/lib/site";

export const metadata = pageMetadata({ title: SITE_TAGLINE, description: SITE_SUB, path: "/" });

export default function Home() {
  return (
    <div className="space-y-10">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebSite", name: SITE_NAME, url: SITE_URL, inLanguage: "ko-KR", description: SITE_SUB }} />
      <section>
        <h1 className="text-2xl font-bold leading-snug sm:text-3xl">{SITE_TAGLINE}</h1>
        <p className="mt-2 text-slate-600">{SITE_SUB}</p>
        <p className="mt-2 text-sm text-slate-500">모델 {MODELS.length}종 · 구매 링크 {MODELS.reduce((n, m) => n + m.variants.length, 0)}개</p>
      </section>
      {CATEGORIES.map((c) => (
        <section key={c.id}>
          <div className="mb-3 flex items-end justify-between">
            <h2 className="text-xl font-bold">{c.label}</h2>
            <Link href={c.path} className="text-sm text-blue-700">비교표·고르는 법 →</Link>
          </div>
          <p className="mb-3 text-sm text-slate-600">{GUIDES[c.id].intro}</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {modelsByCat(c.id).map((m) => (
              <ModelCard key={m.slug} model={m} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
