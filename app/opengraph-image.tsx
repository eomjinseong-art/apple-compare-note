import { ImageResponse } from "next/og";

export const alt = "애플 비교노트";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const text = "애플 비교노트아이폰·아이패드·맥·에어팟 모델별 비교";
  const font = await fetch(`https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@700&text=${encodeURIComponent(text)}`)
    .then((r) => r.text())
    .then((css) => css.match(/src: url\((.+?)\)/)?.[1])
    .then((url) => (url ? fetch(url).then((r) => r.arrayBuffer()) : null))
    .catch(() => null);
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", background: "#0f172a", color: "#f8fafc", padding: "72px", fontFamily: "NotoKR" }}>
        <div style={{ color: "#94a3b8", fontSize: 28, letterSpacing: 6 }}>COMPARE NOTE</div>
        <div style={{ marginTop: 24, fontSize: 80 }}>애플 비교노트</div>
        <div style={{ marginTop: 20, fontSize: 32, color: "#cbd5e1" }}>아이폰·아이패드·맥·에어팟 모델별 비교</div>
      </div>
    ),
    { ...size, fonts: font ? [{ name: "NotoKR", data: font, weight: 700 }] : [] },
  );
}
