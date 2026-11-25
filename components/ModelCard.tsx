import Link from "next/link";
import { won } from "@/components/ui";
import { minPrice, type Model } from "@/lib/products";

export function ModelCard({ model }: { model: Model }) {
  const v = model.variants[0];
  return (
    <Link href={`/models/${model.slug}`} className="flex gap-3 rounded-2xl border border-slate-200 p-3 hover:border-slate-400">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={v.image} alt={model.name} width={80} height={80} loading="lazy" referrerPolicy="no-referrer" className="h-20 w-20 rounded-xl bg-slate-100 object-contain" />
      <span className="min-w-0">
        <span className="block font-bold">{model.name}</span>
        <span className="mt-0.5 line-clamp-2 block text-sm text-slate-600">{model.summary}</span>
        <span className="mt-1 block text-xs text-slate-500">{won(minPrice(model))}부터 · 구성 {model.variants.length}개</span>
      </span>
    </Link>
  );
}
