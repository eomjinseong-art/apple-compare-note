const COUPANG_URL = "https://link.coupang.com/a/hsdzLh1vB6";
export const COUPANG_DISCLOSURE =
  "이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.";

const ITEMS = [
  { name: "케이스", desc: "모델명을 꼭 확인하고 고르세요. 카메라 돌출부 보호형이 무난합니다." },
  { name: "충전기", desc: "아이폰·아이패드는 USB-C PD 20W 이상, 맥북은 모델별 권장 출력을 확인하세요." },
  { name: "보호 필름", desc: "강화유리·저반사(종이질감) 중 용도에 맞게. 화면 크기가 맞는지 확인하세요." },
  { name: "케이블", desc: "USB-C to C 케이블은 충전 출력(60W/240W)과 길이를 보고 고르세요." },
];

export function CoupangAccessories() {
  return (
    <section id="accessories" data-coupang-accessories="" className="rounded-2xl border border-slate-200 p-4">
      <h2 className="text-xl font-bold">액세서리는 쿠팡에서</h2>
      <p className="mt-1 text-sm text-slate-600">본체는 위 링크에서, 케이스·충전기·필름·케이블 같은 소모품은 쿠팡 로켓배송으로 빠르게 받을 수 있어요.</p>
      <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {ITEMS.map((it) => (
          <li key={it.name}>
            <a
              href={COUPANG_URL}
              target="_blank"
              rel="sponsored noopener"
              className="flex h-full items-center gap-3 rounded-xl border border-slate-200 p-3 hover:border-slate-400 hover:bg-slate-50"
            >
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold">{it.name}</span>
                <span className="block text-xs text-slate-600">{it.desc}</span>
              </span>
              <span className="shrink-0 rounded-lg bg-[#e5322d] px-3 py-2 text-xs font-bold text-white">
                쿠팡에서 보기 <span className="ml-0.5 rounded bg-white/20 px-1 text-[10px]">광고</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-amber-800">
        <span className="mr-1 rounded bg-amber-200 px-1.5 py-0.5 font-bold">광고</span>
        {COUPANG_DISCLOSURE}
      </p>
    </section>
  );
}
