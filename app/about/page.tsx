import { pageMetadata } from "@/lib/seo";
import { AD_DISCLOSURE, NOT_AFFILIATED } from "@/lib/site";

export const metadata = pageMetadata({ title: "사이트 안내", description: "애플 비교노트의 운영 방식, 광고(네이버 쇼핑 커넥트) 고지, 사양·가격 정보 출처를 안내합니다.", path: "/about" });

export default function About() {
  return (
    <div className="space-y-4 text-slate-700">
      <h1 className="text-2xl font-bold text-slate-900">사이트 안내</h1>
      <p>애플 비교노트는 아이폰·아이패드·맥·에어팟을 사려는 분이 모델 간 차이를 쉽게 비교할 수 있도록 정리한 비교 사이트입니다.</p>
      <h2 className="pt-2 text-lg font-bold text-slate-900">광고 고지</h2>
      <p>{AD_DISCLOSURE} 구매 버튼은 모두 네이버 쇼핑 커넥트 제휴 링크이며 「광고」로 표시했습니다. 구매자가 추가로 내는 비용은 없습니다.</p>
      <h2 className="pt-2 text-lg font-bold text-slate-900">정보 출처</h2>
      <p>사양은 Apple 공식 사양 페이지(apple.com/kr, support.apple.com)와 네이버 Apple 브랜드스토어를 참고했습니다. 가격은 2026-11-25에 확인한 값이며 수시로 바뀌므로 구매 전 링크에서 확인하세요.</p>
      <h2 className="pt-2 text-lg font-bold text-slate-900">상표</h2>
      <p>{NOT_AFFILIATED}</p>
    </div>
  );
}
