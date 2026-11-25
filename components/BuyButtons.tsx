import { won } from "@/components/ui";
import type { Model } from "@/lib/products";
import { PRICE_DATE } from "@/lib/products";
import { AD_DISCLOSURE } from "@/lib/site";

export function BuyButtons({ model }: { model: Model }) {
  return (
    <div className="space-y-2">
      <p className="text-xs text-amber-800">
        <span className="mr-1 rounded bg-amber-200 px-1.5 py-0.5 font-bold">광고</span>
        {AD_DISCLOSURE}
      </p>
      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {model.variants.map((v) => (
          <li key={v.productNo}>
            <a
              href={v.url}
              target="_blank"
              rel="sponsored noopener"
              className="flex items-center gap-3 rounded-xl border border-slate-200 p-2 hover:border-slate-400 hover:bg-slate-50"
              data-product-no={v.productNo}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={v.image} alt={`${model.name} ${v.label}`} width={64} height={64} loading="lazy" referrerPolicy="no-referrer" className="h-16 w-16 rounded-lg bg-slate-100 object-contain" />
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-medium">{v.label}</span>
                <span className="block text-sm tabular-nums text-slate-700">{won(v.price)}</span>
                <span className="block text-[11px] text-slate-400">{PRICE_DATE} 기준 · 가격은 링크에서 확인</span>
              </span>
              <span className="shrink-0 rounded-lg bg-slate-900 px-3 py-2 text-xs font-bold text-white">
                구매하기 <span className="ml-0.5 rounded bg-white/20 px-1 text-[10px]">광고</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
      <p className="text-[11px] text-slate-400">같은 구성 안의 ‘옵션’은 대개 색상 차이입니다. 정확한 용량·색상·가격은 연결되는 네이버 상품 페이지에서 확인하세요.</p>
    </div>
  );
}
