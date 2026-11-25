export const SITE_NAME = "애플 비교노트";
export const SITE_TAGLINE = "아이폰·아이패드·맥·에어팟, 모델별 사양 비교와 고르는 법";
export const SITE_SUB =
  "아이폰 17·18 프로·에어·듀오, 아이패드 미니·에어·프로, 맥북 네오·에어·프로, 에어팟까지 모델별 사양과 차이를 한눈에 비교하고 나한테 맞는 모델을 고르세요.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://apple-compare-note.vercel.app";

/** Abacus visitor counter. One hit per browser per local day; test traffic is excluded. */
export const ABACUS_NAMESPACE = "apple-compare-note";
export const ABACUS_KEY = "visits";
export const ABACUS_STORAGE_KEY = "apple-compare-note:visits:day";
export const PROD_HOSTS = ["apple-compare-note.vercel.app"];

export const AD_DISCLOSURE =
  "이 페이지는 네이버 쇼핑 커넥트 활동의 일환으로, 구매 시 운영자가 수수료를 제공받을 수 있습니다.";
export const COUPANG_FOOTER_DISCLOSURE =
  "액세서리 링크는 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.";
export const NOT_AFFILIATED =
  "애플 비교노트는 Apple Inc.와 관련이 없는 개인 운영 비교 사이트입니다. Apple, iPhone, iPad, Mac, MacBook, AirPods는 Apple Inc.의 상표입니다.";

export const GOOGLE_SITE_VERIFICATION = "LglMaYLzS6dacAPQ5ZgZdPgzdtfLbp_1Rk5vh3WNPlM";
export const NAVER_SITE_VERIFICATION = "3cb0523b6f41578e7b92e0aa5212934224ffa9a2";

export const SISTER_SITES = [
  { label: "장기렌트 비교노트", url: "https://longrent-guide.vercel.app" },
  { label: "시니어 정리·돌봄 노트", url: "https://senior-care-note.vercel.app" },
  { label: "나두 허브", url: "https://tinalinkeom.vercel.app" },
] as const;

export function sisterUrl(url: string, medium = "footer") {
  const u = new URL("/", url);
  u.searchParams.set("utm_source", "apple-compare-note");
  u.searchParams.set("utm_medium", medium);
  return u.toString();
}
