// 이 파일 하나에 모든 상품 정보와 구매 링크가 있습니다.
// 링크(url)는 네이버 쇼핑 커넥트(브랜드 커넥트) 제휴 링크입니다. brand.naver.com 상품 주소로 바꾸면 수수료가 적립되지 않습니다.
// 가격은 2026-11-25 기준이며 실제 가격은 링크에서 확인해야 합니다.

export type CategoryId = "iphone" | "ipad" | "mac" | "audio";
export type Variant = { label: string; price: number; url: string; image: string; productNo: string };
export type Model = {
  slug: string; cat: CategoryId; name: string; en: string; summary: string; who: string[];
  specs: Record<string, string>; src: string; variants: Variant[];
};

export const PRICE_DATE = "2026-11-25";

export const CATEGORIES: { id: CategoryId; label: string; path: string }[] = [
  {
    "id": "iphone",
    "label": "아이폰",
    "path": "/iphone"
  },
  {
    "id": "ipad",
    "label": "아이패드",
    "path": "/ipad"
  },
  {
    "id": "mac",
    "label": "맥",
    "path": "/mac"
  },
  {
    "id": "audio",
    "label": "에어팟·이어폰",
    "path": "/audio"
  }
];

export const MODELS: Model[] = [
  {
    "slug": "iphone-17",
    "cat": "iphone",
    "name": "아이폰 17",
    "en": "iPhone 17",
    "summary": "120Hz ProMotion 화면과 48MP 듀얼 카메라를 갖춘 기본형 아이폰. 가격과 성능의 균형이 가장 좋은 선택지입니다.",
    "who": [
      "처음 자급제 아이폰을 사는 분",
      "카메라·화면은 좋아야 하지만 Pro까지는 필요 없는 분",
      "배터리 오래 가는 무난한 폰을 원하는 분"
    ],
    "specs": {
      "화면": "15.9cm(6.3형) OLED, 최대 120Hz ProMotion, 상시표시형",
      "칩": "A19 (6코어 CPU)",
      "후면 카메라": "48MP 듀얼 Fusion(메인·울트라 와이드), 2배 광학 퀄리티",
      "전면 카메라": "18MP Center Stage",
      "배터리(동영상 재생)": "최대 30시간",
      "무게": "177g",
      "저장 용량": "256GB / 512GB",
      "인증": "Face ID",
      "방수": "IP68 (최대 6m, 30분)",
      "기타": "카메라 컨트롤, USB-C(USB 2)",
      "색상": "블랙, 화이트, 미스트 블루, 세이지, 라벤더"
    },
    "src": "https://www.apple.com/kr/iphone-17/specs/",
    "variants": [
      {
        "label": "256GB · 옵션 1",
        "price": 1450000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475140074?channelProductNo=12379874462&ac=crtshp&cid=1021046864721728&t=AWsGa7UAA6Ci_6u3QAAAAALh5eSeVngole8mWY0",
        "image": "https://shopping-phinf.pstatic.net/main_8992438/89924385179.4.jpg?type=f300",
        "productNo": "12379874462"
      },
      {
        "label": "256GB · 옵션 2",
        "price": 1450000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475140071?channelProductNo=12379874464&ac=crtshp&cid=1021046864721728&t=AWsGa7UAA6Ci_6u3QAAAAALh5eSg8YZUkQ03qbA",
        "image": "https://shopping-phinf.pstatic.net/main_8992438/89924385181.2.jpg?type=f300",
        "productNo": "12379874464"
      },
      {
        "label": "256GB · 옵션 3",
        "price": 1450000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475140065?channelProductNo=12379874463&ac=crtshp&cid=1021046864721728&t=AWsGa7kAA6Ci_6u3QAAAAALh5eSfNot1VAUI0VA",
        "image": "https://shopping-phinf.pstatic.net/main_8992438/89924385180.2.jpg?type=f300",
        "productNo": "12379874463"
      },
      {
        "label": "256GB · 옵션 4",
        "price": 1450000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475140064?channelProductNo=12379874461&ac=crtshp&cid=1021046864721728&t=AWsGa7kAA6Ci_6u3QAAAAALh5eSd3oqqEagwR_Y",
        "image": "https://shopping-phinf.pstatic.net/main_8992438/89924385178.2.jpg?type=f300",
        "productNo": "12379874461"
      },
      {
        "label": "256GB · 옵션 5",
        "price": 1450000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475135997?channelProductNo=12379874465&ac=crtshp&cid=1021046864721728&t=AWsGa7kAA6Ci_6u3QAAAAALh5eShj7KeJ28BYvM",
        "image": "https://shopping-phinf.pstatic.net/main_8992438/89924385182.4.jpg?type=f300",
        "productNo": "12379874465"
      },
      {
        "label": "512GB · 옵션 1",
        "price": 1750000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475131901?channelProductNo=12379874470&ac=crtshp&cid=1021046864721728&t=AWsGa70AA6Ci_6u3QAAAAALh5eSmqx0LdcNzJuU",
        "image": "https://shopping-phinf.pstatic.net/main_8992438/89924385187.jpg?type=f300",
        "productNo": "12379874470"
      },
      {
        "label": "512GB · 옵션 2",
        "price": 1750000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475131899?channelProductNo=12379874467&ac=crtshp&cid=1021046864721728&t=AWsGa74AA6Ci_6u3QAAAAALh5eSj8grzO2yoXYU",
        "image": "https://shopping-phinf.pstatic.net/main_8992438/89924385184.2.jpg?type=f300",
        "productNo": "12379874467"
      },
      {
        "label": "512GB · 옵션 3",
        "price": 1750000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475131890?channelProductNo=12379874468&ac=crtshp&cid=1021046864721728&t=AWsGa74AA6Ci_6u3QAAAAALh5eSk-VK-AtmSb4c",
        "image": "https://shopping-phinf.pstatic.net/main_8992438/89924385185.2.jpg?type=f300",
        "productNo": "12379874468"
      }
    ]
  },
  {
    "slug": "iphone-17e",
    "cat": "iphone",
    "name": "아이폰 17e",
    "en": "iPhone 17e",
    "summary": "A19 칩과 48MP 카메라를 담은 가장 저렴한 최신 아이폰. 꼭 필요한 기능만 원하는 분께 맞습니다.",
    "who": [
      "가장 낮은 가격으로 최신 칩을 원하는 분",
      "부모님·자녀용 아이폰",
      "카메라는 1개면 충분한 분"
    ],
    "specs": {
      "화면": "15.4cm OLED",
      "칩": "A19 (6코어 CPU)",
      "후면 카메라": "48MP Fusion (단일)",
      "전면 카메라": "12MP TrueDepth",
      "배터리(동영상 재생)": "최대 26시간",
      "무게": "170g",
      "저장 용량": "256GB / 512GB",
      "인증": "Face ID",
      "방수": "IP68 (최대 6m, 30분)",
      "색상": "블랙, 화이트, 소프트 핑크"
    },
    "src": "https://www.apple.com/kr/iphone-17e/specs/",
    "variants": [
      {
        "label": "256GB",
        "price": 1150000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475135975?channelProductNo=13192336504&ac=crtshp&cid=1021046864721728&t=AWsGa70AA6Ci_6u3QAAAAAMSUxR4y6L0f49wYPs",
        "image": "https://shopping-phinf.pstatic.net/main_9073684/90736847601.5.jpg?type=f300",
        "productNo": "13192336504"
      },
      {
        "label": "512GB",
        "price": 1450000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475131872?channelProductNo=13192336507&ac=crtshp&cid=1021046864721728&t=AWsGa78AA6Ci_6u3QAAAAAMSUxR7d__o4Xfc52g",
        "image": "https://shopping-phinf.pstatic.net/main_9073684/90736847604.1.jpg?type=f300",
        "productNo": "13192336507"
      }
    ]
  },
  {
    "slug": "iphone-air",
    "cat": "iphone",
    "name": "아이폰 에어",
    "en": "iPhone Air",
    "summary": "165g의 얇고 가벼운 티타늄 아이폰. 큰 16.6cm 화면과 A19 Pro 칩을 갖췄고, eSIM 전용입니다.",
    "who": [
      "가볍고 얇은 폰을 최우선으로 보는 분",
      "큰 화면을 원하지만 Pro Max는 무거운 분",
      "eSIM 사용에 거부감이 없는 분"
    ],
    "specs": {
      "화면": "16.6cm OLED, 최대 120Hz ProMotion",
      "칩": "A19 Pro (6코어 CPU)",
      "후면 카메라": "48MP Fusion (단일)",
      "전면 카메라": "18MP Center Stage",
      "배터리(동영상 재생)": "최대 27시간",
      "무게": "165g",
      "저장 용량": "256GB / 512GB / 1TB",
      "인증": "Face ID",
      "방수": "IP68 (최대 6m, 30분)",
      "기타": "티타늄 디자인, eSIM 전용, 카메라 컨트롤",
      "색상": "스페이스 블랙, 클라우드 화이트, 라이트 골드, 스카이 블루"
    },
    "src": "https://www.apple.com/kr/iphone-air/specs/",
    "variants": [
      {
        "label": "기본 구성",
        "price": 1521500,
        "url": "https://brandconnect.naver.com/affiliates/1021047475131885?channelProductNo=12379874657&ac=crtshp&cid=1021046864721728&t=AWsGa74AA6Ci_6u3QAAAAALh5eVhchnuEwKErMk",
        "image": "https://shopping-phinf.pstatic.net/main_8992438/89924385374.4.jpg?type=f300",
        "productNo": "12379874657"
      }
    ]
  },
  {
    "slug": "iphone-17-pro",
    "cat": "iphone",
    "name": "아이폰 17 프로",
    "en": "iPhone 17 Pro",
    "summary": "A19 Pro 칩과 4배 망원을 포함한 48MP 트리플 카메라. 직전 세대 Pro로, 할인된 가격이면 가성비가 좋습니다.",
    "who": [
      "망원 카메라가 꼭 필요한 분",
      "최신 18 Pro보다 낮은 가격의 Pro를 원하는 분",
      "영상 촬영(ProRes 등)을 하는 분"
    ],
    "specs": {
      "화면": "15.9cm OLED, 최대 120Hz ProMotion, 상시표시형",
      "칩": "A19 Pro (6코어 CPU, 6코어 GPU)",
      "후면 카메라": "48MP 프로 Fusion 3개(메인·울트라 와이드·4배 망원), 최대 8배 광학 퀄리티",
      "전면 카메라": "18MP Center Stage",
      "배터리(동영상 재생)": "최대 31시간",
      "무게": "204g",
      "저장 용량": "256GB / 512GB / 1TB",
      "인증": "Face ID",
      "방수": "IP68 (최대 6m, 30분)",
      "색상": "실버, 코스믹 오렌지, 딥 블루"
    },
    "src": "https://support.apple.com/ko-kr/125090",
    "variants": [
      {
        "label": "구성 1 · 옵션 1",
        "price": 1611000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475140087?channelProductNo=12379874472&ac=crtshp&cid=1021046864721728&t=AWsGa7UAA6Ci_6u3QAAAAALh5eSoEBNk_e-7_vo",
        "image": "https://shopping-phinf.pstatic.net/main_8992438/89924385189.jpg?type=f300",
        "productNo": "12379874472"
      },
      {
        "label": "구성 1 · 옵션 2",
        "price": 1611000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475140086?channelProductNo=12379874473&ac=crtshp&cid=1021046864721728&t=AWsGa7UAA6Ci_6u3QAAAAALh5eSpy3KPdCO5bS8",
        "image": "https://shopping-phinf.pstatic.net/main_8992438/89924385190.jpg?type=f300",
        "productNo": "12379874473"
      },
      {
        "label": "구성 2",
        "price": 1881000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475140084?channelProductNo=12379874475&ac=crtshp&cid=1021046864721728&t=AWsGa7UAA6Ci_6u3QAAAAALh5eSrCSemzq52D-g",
        "image": "https://shopping-phinf.pstatic.net/main_8992438/89924385192.1.jpg?type=f300",
        "productNo": "12379874475"
      }
    ]
  },
  {
    "slug": "iphone-17-pro-max",
    "cat": "iphone",
    "name": "아이폰 17 프로 맥스",
    "en": "iPhone 17 Pro Max",
    "summary": "17.4cm 큰 화면과 최대 37시간 동영상 재생. 직전 세대 대화면 Pro입니다.",
    "who": [
      "큰 화면과 긴 배터리가 최우선인 분",
      "망원·영상 촬영을 자주 하는 분"
    ],
    "specs": {
      "화면": "17.4cm OLED, 최대 120Hz ProMotion, 상시표시형",
      "칩": "A19 Pro",
      "후면 카메라": "48MP 프로 Fusion 3개(메인·울트라 와이드·4배 망원)",
      "전면 카메라": "18MP Center Stage",
      "배터리(동영상 재생)": "최대 37시간",
      "무게": "231g",
      "저장 용량": "256GB / 512GB / 1TB / 2TB",
      "인증": "Face ID",
      "방수": "IP68 (최대 6m, 30분)",
      "색상": "실버, 코스믹 오렌지, 딥 블루"
    },
    "src": "https://support.apple.com/ko-kr/125091",
    "variants": [
      {
        "label": "기본 구성",
        "price": 1885270,
        "url": "https://brandconnect.naver.com/affiliates/1021047475131900?channelProductNo=12379874647&ac=crtshp&cid=1021046864721728&t=AWsGa74AA6Ci_6u3QAAAAALh5eVXPC9yTnQLXFo",
        "image": "https://shopping-phinf.pstatic.net/main_8992438/89924385364.jpg?type=f300",
        "productNo": "12379874647"
      }
    ]
  },
  {
    "slug": "iphone-18-pro",
    "cat": "iphone",
    "name": "아이폰 18 프로",
    "en": "iPhone 18 Pro",
    "summary": "A20 Pro 칩과 가변 조리개 메인 카메라를 갖춘 최신 Pro. 사진·영상 성능을 가장 중시하는 분을 위한 모델입니다.",
    "who": [
      "최신·최고 성능 카메라를 원하는 분",
      "오래(4~5년) 쓸 폰을 찾는 분",
      "한 손에 들어오는 Pro를 원하는 분"
    ],
    "specs": {
      "화면": "15.9cm OLED, 최대 120Hz ProMotion, 상시표시형",
      "칩": "A20 Pro (6코어 CPU, 7코어 GPU)",
      "후면 카메라": "48MP 프로 Fusion(가변 조리개 메인·울트라 와이드·4배 망원)",
      "전면 카메라": "18MP Center Stage",
      "배터리(동영상 재생)": "최대 34시간",
      "무게": "211g",
      "저장 용량": "256GB / 512GB / 1TB / 2TB",
      "인증": "Face ID",
      "방수": "IP68 (최대 6m, 30분)",
      "색상": "블랙, 실버, 글레이셔, 버건디"
    },
    "src": "https://www.apple.com/kr/iphone-18-pro/specs/",
    "variants": [
      {
        "label": "256GB · 옵션 1",
        "price": 1990000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475140095?channelProductNo=13753699546&ac=crtshp&cid=1021046864721728&t=AWsGa6EAA6Ci_6u3QAAAAAMzyMza2x-bCCI_zfQ",
        "image": "https://shopping-phinf.pstatic.net/main_9129821/91298210910.jpg?type=f300",
        "productNo": "13753699546"
      },
      {
        "label": "256GB · 옵션 2",
        "price": 1990000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475140092?channelProductNo=13753699545&ac=crtshp&cid=1021046864721728&t=AWsGa6EAA6Ci_6u3QAAAAAMzyMzZX96Hp9MzgDE",
        "image": "https://shopping-phinf.pstatic.net/main_9129821/91298210909.jpg?type=f300",
        "productNo": "13753699545"
      },
      {
        "label": "256GB · 옵션 3",
        "price": 1990000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475140090?channelProductNo=13753699548&ac=crtshp&cid=1021046864721728&t=AWsGa6EAA6Ci_6u3QAAAAAMzyMzcV_kX9ORtI3U",
        "image": "https://shopping-phinf.pstatic.net/main_9129821/91298210912.jpg?type=f300",
        "productNo": "13753699548"
      },
      {
        "label": "256GB · 옵션 4",
        "price": 1990000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475140089?channelProductNo=13753699547&ac=crtshp&cid=1021046864721728&t=AWsGa6EAA6Ci_6u3QAAAAAMzyMzbXKQGoQAeaUI",
        "image": "https://shopping-phinf.pstatic.net/main_9129821/91298210911.jpg?type=f300",
        "productNo": "13753699547"
      },
      {
        "label": "512GB · 옵션 1",
        "price": 2290000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475140094?channelProductNo=13753699550&ac=crtshp&cid=1021046864721728&t=AWsGa6EAA6Ci_6u3QAAAAAMzyMzehgRP5qg8N3g",
        "image": "https://shopping-phinf.pstatic.net/main_9129821/91298210914.jpg?type=f300",
        "productNo": "13753699550"
      },
      {
        "label": "512GB · 옵션 2",
        "price": 2290000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475140093?channelProductNo=13753699549&ac=crtshp&cid=1021046864721728&t=AWsGa6EAA6Ci_6u3QAAAAAMzyMzdrHCoyQIDY2U",
        "image": "https://shopping-phinf.pstatic.net/main_9129821/91298210913.jpg?type=f300",
        "productNo": "13753699549"
      },
      {
        "label": "512GB · 옵션 3",
        "price": 2290000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475140091?channelProductNo=13753699551&ac=crtshp&cid=1021046864721728&t=AWsGa6EAA6Ci_6u3QAAAAAMzyMzfh0opSFKO_YM",
        "image": "https://shopping-phinf.pstatic.net/main_9129821/91298210915.jpg?type=f300",
        "productNo": "13753699551"
      },
      {
        "label": "512GB · 옵션 4",
        "price": 2290000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475140088?channelProductNo=13753699552&ac=crtshp&cid=1021046864721728&t=AWsGa7UAA6Ci_6u3QAAAAAMzyMzgzpExXt--t1w",
        "image": "https://shopping-phinf.pstatic.net/main_9129821/91298210916.jpg?type=f300",
        "productNo": "13753699552"
      },
      {
        "label": "1TB · 옵션 1",
        "price": 2890000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475135979?channelProductNo=13753699554&ac=crtshp&cid=1021046864721728&t=AWsGa70AA6Ci_6u3QAAAAAMzyMzid0KMkuMyeJ4",
        "image": "https://shopping-phinf.pstatic.net/main_9129821/91298210918.jpg?type=f300",
        "productNo": "13753699554"
      },
      {
        "label": "1TB · 옵션 2",
        "price": 2890000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475135969?channelProductNo=13753699553&ac=crtshp&cid=1021046864721728&t=AWsGa70AA6Ci_6u3QAAAAAMzyMzhTd_9r5bwjs8",
        "image": "https://shopping-phinf.pstatic.net/main_9129821/91298210917.jpg?type=f300",
        "productNo": "13753699553"
      },
      {
        "label": "1TB · 옵션 3",
        "price": 2890000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475131887?channelProductNo=13753699555&ac=crtshp&cid=1021046864721728&t=AWsGa74AA6Ci_6u3QAAAAAMzyMzjzfxMwGMjVZA",
        "image": "https://shopping-phinf.pstatic.net/main_9129821/91298210919.jpg?type=f300",
        "productNo": "13753699555"
      }
    ]
  },
  {
    "slug": "iphone-18-pro-max",
    "cat": "iphone",
    "name": "아이폰 18 프로 맥스",
    "en": "iPhone 18 Pro Max",
    "summary": "최신 Pro의 대화면 버전. 17.4cm 화면과 최대 43시간 동영상 재생으로 배터리가 가장 깁니다.",
    "who": [
      "배터리 시간이 가장 중요한 분",
      "큰 화면으로 영상·게임을 즐기는 분",
      "최고 사양을 원하는 분"
    ],
    "specs": {
      "화면": "17.4cm OLED, 최대 120Hz ProMotion, 상시표시형",
      "칩": "A20 Pro (6코어 CPU, 7코어 GPU)",
      "후면 카메라": "48MP 프로 Fusion(가변 조리개 메인·울트라 와이드·4배 망원)",
      "전면 카메라": "18MP Center Stage",
      "배터리(동영상 재생)": "최대 43시간",
      "무게": "249g",
      "저장 용량": "256GB / 512GB / 1TB / 2TB",
      "인증": "Face ID",
      "방수": "IP68 (최대 6m, 30분)",
      "색상": "블랙, 실버, 글레이셔, 버건디"
    },
    "src": "https://www.apple.com/kr/iphone-18-pro/specs/",
    "variants": [
      {
        "label": "256GB · 옵션 1",
        "price": 2190000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475140083?channelProductNo=13753699562&ac=crtshp&cid=1021046864721728&t=AWsGa7UAA6Ci_6u3QAAAAAMzyMzqFwjk6UkaZ6c",
        "image": "https://shopping-phinf.pstatic.net/main_9129821/91298210926.1.jpg?type=f300",
        "productNo": "13753699562"
      },
      {
        "label": "256GB · 옵션 2",
        "price": 2190000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475140082?channelProductNo=13753699561&ac=crtshp&cid=1021046864721728&t=AWsGa7UAA6Ci_6u3QAAAAAMzyMzp7yUV1TcF-V0",
        "image": "https://shopping-phinf.pstatic.net/main_9129821/91298210925.1.jpg?type=f300",
        "productNo": "13753699561"
      },
      {
        "label": "512GB · 옵션 1",
        "price": 2490000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475135996?channelProductNo=13753699590&ac=crtshp&cid=1021046864721728&t=AWsGa7kAA6Ci_6u3QAAAAAMzyM0GBdxM_UIJft0",
        "image": "https://shopping-phinf.pstatic.net/main_9129821/91298210954.1.jpg?type=f300",
        "productNo": "13753699590"
      },
      {
        "label": "512GB · 옵션 2",
        "price": 2490000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475135995?channelProductNo=13753699589&ac=crtshp&cid=1021046864721728&t=AWsGa7kAA6Ci_6u3QAAAAAMzyM0Fw_Pd4Nej0lw",
        "image": "https://shopping-phinf.pstatic.net/main_9129821/91298210953.1.jpg?type=f300",
        "productNo": "13753699589"
      },
      {
        "label": "2TB",
        "price": 3990000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475131875?channelProductNo=13753699598&ac=crtshp&cid=1021046864721728&t=AWsGa78AA6Ci_6u3QAAAAAMzyM0O_Ug4Q-9022M",
        "image": "https://shopping-phinf.pstatic.net/main_9129821/91298210962.1.jpg?type=f300",
        "productNo": "13753699598"
      }
    ]
  },
  {
    "slug": "iphone-duo",
    "cat": "iphone",
    "name": "아이폰 듀오",
    "en": "iPhone Duo",
    "summary": "접으면 13.6cm, 펼치면 19.3cm가 되는 폴더블 아이폰. 폰과 작은 태블릿을 하나로 쓰고 싶은 분께 맞습니다.",
    "who": [
      "폰 하나로 태블릿처럼 문서·영상을 보고 싶은 분",
      "새로운 폼팩터를 먼저 써보고 싶은 분",
      "예산 여유가 있는 분"
    ],
    "specs": {
      "화면": "외부 13.6cm OLED / 내부 19.3cm OLED 폴딩, ProMotion",
      "칩": "A20 Pro (6코어 CPU)",
      "후면 카메라": "48MP 듀얼 Fusion",
      "전면 카메라": "12MP Center Stage",
      "배터리(동영상 재생)": "외부 화면 최대 44시간 / 내부 화면 최대 31시간",
      "무게": "254g",
      "저장 용량": "256GB / 512GB / 1TB / 2TB",
      "인증": "Touch ID",
      "방수": "IP68",
      "기타": "티타늄 폴더블 디자인, eSIM 전용, USB 3",
      "색상": "나이트 스카이, 스타 화이트"
    },
    "src": "https://www.apple.com/kr/iphone-duo/specs/",
    "variants": [
      {
        "label": "256GB · 옵션 1",
        "price": 3290000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475135992?channelProductNo=13771279736&ac=crtshp&cid=1021046864721728&t=AWsGa7kAA6Ci_6u3QAAAAAM01Q149koz99hpGxo",
        "image": "https://shopping-phinf.pstatic.net/main_9131579/91315791100.jpg?type=f300",
        "productNo": "13771279736"
      },
      {
        "label": "256GB · 옵션 2",
        "price": 3290000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475135989?channelProductNo=13771279735&ac=crtshp&cid=1021046864721728&t=AWsGa7kAA6Ci_6u3QAAAAAM01Q13MI2nrLc9rZA",
        "image": "https://shopping-phinf.pstatic.net/main_9131579/91315791099.jpg?type=f300",
        "productNo": "13771279735"
      },
      {
        "label": "512GB · 옵션 1",
        "price": 3590000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475140067?channelProductNo=13771279737&ac=crtshp&cid=1021046864721728&t=AWsGa7kAA6Ci_6u3QAAAAAM01Q15fSkZ2pzcpFY",
        "image": "https://shopping-phinf.pstatic.net/main_9131579/91315791101.jpg?type=f300",
        "productNo": "13771279737"
      },
      {
        "label": "512GB · 옵션 2",
        "price": 3590000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475135993?channelProductNo=13771279738&ac=crtshp&cid=1021046864721728&t=AWsGa7kAA6Ci_6u3QAAAAAM01Q16KB7yQSytjtc",
        "image": "https://shopping-phinf.pstatic.net/main_9131579/91315791102.jpg?type=f300",
        "productNo": "13771279738"
      },
      {
        "label": "1TB",
        "price": 4190000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475131876?channelProductNo=13771279740&ac=crtshp&cid=1021046864721728&t=AWsGa78AA6Ci_6u3QAAAAAM01Q18D-PnHayxEWU",
        "image": "https://shopping-phinf.pstatic.net/main_9131579/91315791104.jpg?type=f300",
        "productNo": "13771279740"
      }
    ]
  },
  {
    "slug": "ipad-11",
    "cat": "ipad",
    "name": "아이패드 11세대 (A16)",
    "en": "iPad (A16)",
    "summary": "가장 저렴한 아이패드. 영상 시청, 인강, 메모 같은 일상 용도에 충분합니다.",
    "who": [
      "인강·유튜브·전자책용 첫 태블릿",
      "아이용·부모님용",
      "예산을 최소로 잡는 분"
    ],
    "specs": {
      "화면": "27.6cm Liquid Retina (500니트)",
      "칩": "A16 (5코어 CPU, 4코어 GPU)",
      "저장 용량": "128GB / 256GB / 512GB",
      "무게": "477g (Wi-Fi)",
      "배터리": "최대 10시간(동영상·웹)",
      "인증": "Touch ID(상단 버튼)",
      "펜슬": "Apple Pencil(USB-C), Apple Pencil 1세대(어댑터)",
      "색상": "실버, 블루, 핑크, 옐로"
    },
    "src": "https://www.apple.com/kr/ipad-11/specs/",
    "variants": [
      {
        "label": "기본 구성 · 옵션 1",
        "price": 696570,
        "url": "https://brandconnect.naver.com/affiliates/1021047475135976?channelProductNo=11750344616&ac=crtshp&cid=1021046864721728&t=AWsGa70AA6Ci_6u3QAAAAAK8YAeoP4WTH9HwCQg",
        "image": "https://shopping-phinf.pstatic.net/main_8929485/89294855135.4.jpg?type=f300",
        "productNo": "11750344616"
      },
      {
        "label": "기본 구성 · 옵션 2",
        "price": 696570,
        "url": "https://brandconnect.naver.com/affiliates/1021047475131897?channelProductNo=11750344615&ac=crtshp&cid=1021046864721728&t=AWsGa74AA6Ci_6u3QAAAAAK8YAenNtMSwRwFtyo",
        "image": "https://shopping-phinf.pstatic.net/main_8929485/89294855134.2.jpg?type=f300",
        "productNo": "11750344615"
      }
    ]
  },
  {
    "slug": "ipad-mini",
    "cat": "ipad",
    "name": "아이패드 미니 (A20 Pro)",
    "en": "iPad mini (A20 Pro)",
    "summary": "21.6cm OLED 화면의 한 손 태블릿. 가볍고 IP67 방수까지 갖춰 들고 다니기 좋습니다.",
    "who": [
      "전자책·필기를 들고 다니며 하는 분",
      "게임용 소형 태블릿",
      "가방이 작은 분"
    ],
    "specs": {
      "화면": "21.6cm Super Retina XDR OLED",
      "칩": "A20 Pro (128·256GB: 5코어 CPU / 512GB: 6코어 CPU)",
      "저장 용량": "128GB / 256GB / 512GB (256·512GB 나노 텍스처 옵션)",
      "무게": "255g (Wi-Fi)",
      "배터리": "최대 10시간(동영상·웹)",
      "방수": "IP67 (최대 1m, 30분)",
      "인증": "Touch ID(상단 버튼)",
      "펜슬": "Apple Pencil Pro, Apple Pencil(USB-C)",
      "색상": "미드나이트, 스타라이트"
    },
    "src": "https://www.apple.com/kr/ipad-mini/specs/",
    "variants": [
      {
        "label": "구성 1 · 옵션 1",
        "price": 1149000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475140077?channelProductNo=13834038405&ac=crtshp&cid=1021046864721728&t=AWsGa7UAA6Ci_6u3QAAAAAM4kqyFjKACElENQAk",
        "image": "https://shopping-phinf.pstatic.net/main_9137854/91378549782.jpg?type=f300",
        "productNo": "13834038405"
      },
      {
        "label": "구성 1 · 옵션 2",
        "price": 1149000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475140069?channelProductNo=13834038403&ac=crtshp&cid=1021046864721728&t=AWsGa7UAA6Ci_6u3QAAAAAM4kqyD0yC1tCJtmjE",
        "image": "https://shopping-phinf.pstatic.net/main_9137854/91378549781.jpg?type=f300",
        "productNo": "13834038403"
      },
      {
        "label": "구성 2 · 옵션 1",
        "price": 1319000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475135998?channelProductNo=13834038409&ac=crtshp&cid=1021046864721728&t=AWsGa7kAA6Ci_6u3QAAAAAM4kqyJbf0w5egFslk",
        "image": "https://shopping-phinf.pstatic.net/main_9137854/91378549785.jpg?type=f300",
        "productNo": "13834038409"
      },
      {
        "label": "구성 2 · 옵션 2",
        "price": 1319000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475135991?channelProductNo=13834038410&ac=crtshp&cid=1021046864721728&t=AWsGa7kAA6Ci_6u3QAAAAAM4kqyKuXIoZd-4i_M",
        "image": "https://shopping-phinf.pstatic.net/main_9137854/91378549786.jpg?type=f300",
        "productNo": "13834038410"
      },
      {
        "label": "구성 3 · 옵션 1",
        "price": 1399000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475140078?channelProductNo=13834038416&ac=crtshp&cid=1021046864721728&t=AWsGa7UAA6Ci_6u3QAAAAAM4kqyQiWkd9NCHGEQ",
        "image": "https://shopping-phinf.pstatic.net/main_9137854/91378549792.jpg?type=f300",
        "productNo": "13834038416"
      },
      {
        "label": "구성 3 · 옵션 2",
        "price": 1399000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475140068?channelProductNo=13834038415&ac=crtshp&cid=1021046864721728&t=AWsGa7kAA6Ci_6u3QAAAAAM4kqyPvxkGW1lxoiU",
        "image": "https://shopping-phinf.pstatic.net/main_9137854/91378549791.jpg?type=f300",
        "productNo": "13834038415"
      },
      {
        "label": "구성 4",
        "price": 1569000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475135984?channelProductNo=13834038419&ac=crtshp&cid=1021046864721728&t=AWsGa70AA6Ci_6u3QAAAAAM4kqyTw6xZfiLPevM",
        "image": "https://shopping-phinf.pstatic.net/main_9137854/91378549795.jpg?type=f300",
        "productNo": "13834038419"
      },
      {
        "label": "구성 5 · 옵션 1",
        "price": 1669000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475135983?channelProductNo=13834038413&ac=crtshp&cid=1021046864721728&t=AWsGa70AA6Ci_6u3QAAAAAM4kqyNW6sSvQCZrpE",
        "image": "https://shopping-phinf.pstatic.net/main_9137854/91378549789.jpg?type=f300",
        "productNo": "13834038413"
      },
      {
        "label": "구성 5 · 옵션 2",
        "price": 1669000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475131891?channelProductNo=13834038414&ac=crtshp&cid=1021046864721728&t=AWsGa74AA6Ci_6u3QAAAAAM4kqyOYi7U1i6XCB8",
        "image": "https://shopping-phinf.pstatic.net/main_9137854/91378549790.jpg?type=f300",
        "productNo": "13834038414"
      }
    ]
  },
  {
    "slug": "ipad-air-11",
    "cat": "ipad",
    "name": "아이패드 에어 11 (M4) Wi-Fi",
    "en": "iPad Air 11 (M4)",
    "summary": "M4 칩과 12GB 메모리로 필기·그림·가벼운 영상 편집까지 되는 실속형 고성능 아이패드.",
    "who": [
      "대학생 필기·과제용",
      "Pro 성능까지는 필요 없지만 오래 쓸 태블릿",
      "애플펜슬 프로를 쓰고 싶은 분"
    ],
    "specs": {
      "화면": "27.6cm Liquid Retina (500니트)",
      "칩": "M4 (8코어 CPU, 9코어 GPU), 12GB 메모리",
      "저장 용량": "128GB / 256GB / 512GB / 1TB",
      "무게": "464g",
      "배터리": "최대 10시간(동영상·웹)",
      "인증": "Touch ID(상단 버튼)",
      "펜슬": "Apple Pencil Pro, Apple Pencil(USB-C)",
      "색상": "블루, 퍼플, 스타라이트, 스페이스 그레이"
    },
    "src": "https://www.apple.com/kr/ipad-air/specs/",
    "variants": [
      {
        "label": "구성 1 · 옵션 1",
        "price": 1211530,
        "url": "https://brandconnect.naver.com/affiliates/1021047475140066?channelProductNo=13192336510&ac=crtshp&cid=1021046864721728&t=AWsGa7kAA6Ci_6u3QAAAAAMSUxR-vyKs15ODp5o",
        "image": "https://shopping-phinf.pstatic.net/main_9073684/90736847607.4.jpg?type=f300",
        "productNo": "13192336510"
      },
      {
        "label": "구성 1 · 옵션 2",
        "price": 1211530,
        "url": "https://brandconnect.naver.com/affiliates/1021047475135988?channelProductNo=13192336511&ac=crtshp&cid=1021046864721728&t=AWsGa7kAA6Ci_6u3QAAAAAMSUxR_K6kZqNpWdys",
        "image": "https://shopping-phinf.pstatic.net/main_9073684/90736847608.jpg?type=f300",
        "productNo": "13192336511"
      },
      {
        "label": "구성 1 · 옵션 3",
        "price": 1211530,
        "url": "https://brandconnect.naver.com/affiliates/1021047475131883?channelProductNo=13192336508&ac=crtshp&cid=1021046864721728&t=AWsGa74AA6Ci_6u3QAAAAAMSUxR81i12_7NILA8",
        "image": "https://shopping-phinf.pstatic.net/main_9073684/90736847605.jpg?type=f300",
        "productNo": "13192336508"
      },
      {
        "label": "구성 2 · 옵션 1",
        "price": 1376430,
        "url": "https://brandconnect.naver.com/affiliates/1021047475140075?channelProductNo=13192336515&ac=crtshp&cid=1021046864721728&t=AWsGa7UAA6Ci_6u3QAAAAAMSUxSDlF61q6ry94Q",
        "image": "https://shopping-phinf.pstatic.net/main_9073684/90736847611.2.jpg?type=f300",
        "productNo": "13192336515"
      },
      {
        "label": "구성 2 · 옵션 2",
        "price": 1376430,
        "url": "https://brandconnect.naver.com/affiliates/1021047475140072?channelProductNo=13192336516&ac=crtshp&cid=1021046864721728&t=AWsGa7UAA6Ci_6u3QAAAAAMSUxSEyPYTNPS182U",
        "image": "https://shopping-phinf.pstatic.net/main_9073684/90736847612.2.jpg?type=f300",
        "productNo": "13192336516"
      },
      {
        "label": "구성 2 · 옵션 3",
        "price": 1376430,
        "url": "https://brandconnect.naver.com/affiliates/1021047475135986?channelProductNo=13192336513&ac=crtshp&cid=1021046864721728&t=AWsGa7kAA6Ci_6u3QAAAAAMSUxSByR6d5klVsz8",
        "image": "https://shopping-phinf.pstatic.net/main_9073684/90736847609.2.jpg?type=f300",
        "productNo": "13192336513"
      },
      {
        "label": "구성 2 · 옵션 4",
        "price": 1376430,
        "url": "https://brandconnect.naver.com/affiliates/1021047475131896?channelProductNo=13192336514&ac=crtshp&cid=1021046864721728&t=AWsGa74AA6Ci_6u3QAAAAAMSUxSCQur_vKgSl9g",
        "image": "https://shopping-phinf.pstatic.net/main_9073684/90736847610.jpg?type=f300",
        "productNo": "13192336514"
      },
      {
        "label": "구성 3 · 옵션 1",
        "price": 1715930,
        "url": "https://brandconnect.naver.com/affiliates/1021047475140085?channelProductNo=13192336519&ac=crtshp&cid=1021046864721728&t=AWsGa7UAA6Ci_6u3QAAAAAMSUxSHTOLYIJnUVm4",
        "image": "https://shopping-phinf.pstatic.net/main_9073684/90736847615.jpg?type=f300",
        "productNo": "13192336519"
      },
      {
        "label": "구성 3 · 옵션 2",
        "price": 1715930,
        "url": "https://brandconnect.naver.com/affiliates/1021047475140073?channelProductNo=13192336520&ac=crtshp&cid=1021046864721728&t=AWsGa7UAA6Ci_6u3QAAAAAMSUxSI6D4XCfWuEnk",
        "image": "https://shopping-phinf.pstatic.net/main_9073684/90736847616.jpg?type=f300",
        "productNo": "13192336520"
      },
      {
        "label": "구성 3 · 옵션 3",
        "price": 1715930,
        "url": "https://brandconnect.naver.com/affiliates/1021047475135985?channelProductNo=13192336517&ac=crtshp&cid=1021046864721728&t=AWsGa7kAA6Ci_6u3QAAAAAMSUxSFCSG1yowHu78",
        "image": "https://shopping-phinf.pstatic.net/main_9073684/90736847613.jpg?type=f300",
        "productNo": "13192336517"
      }
    ]
  },
  {
    "slug": "ipad-air-11-cell",
    "cat": "ipad",
    "name": "아이패드 에어 11 (M4) 셀룰러",
    "en": "iPad Air 11 (M4) Cellular",
    "summary": "에어 11에 5G 셀룰러를 더한 모델. 와이파이 없는 곳에서도 바로 인터넷이 됩니다.",
    "who": [
      "외근·출장이 잦은 분",
      "차량·야외에서 태블릿을 쓰는 분"
    ],
    "specs": {
      "화면": "27.6cm Liquid Retina (500니트)",
      "칩": "M4 (8코어 CPU, 9코어 GPU), 12GB 메모리",
      "통신": "5G + Wi-Fi",
      "저장 용량": "128GB / 256GB / 512GB / 1TB",
      "무게": "465g",
      "배터리": "최대 10시간(Wi-Fi 웹·동영상), 셀룰러 웹 최대 9시간",
      "펜슬": "Apple Pencil Pro, Apple Pencil(USB-C)",
      "색상": "블루, 퍼플, 스타라이트, 스페이스 그레이"
    },
    "src": "https://www.apple.com/kr/ipad-air/specs/",
    "variants": [
      {
        "label": "구성 1",
        "price": 1454030,
        "url": "https://brandconnect.naver.com/affiliates/1021047475131882?channelProductNo=13192336667&ac=crtshp&cid=1021046864721728&t=AWsGa74AA6Ci_6u3QAAAAAMSUxUbGLCcXeaVjD8",
        "image": "https://shopping-phinf.pstatic.net/main_9073684/90736847761.jpg?type=f300",
        "productNo": "13192336667"
      },
      {
        "label": "구성 2 · 옵션 1",
        "price": 1618930,
        "url": "https://brandconnect.naver.com/affiliates/1021047475131889?channelProductNo=13192336671&ac=crtshp&cid=1021046864721728&t=AWsGa74AA6Ci_6u3QAAAAAMSUxUfxJcYd3H-Aik",
        "image": "https://shopping-phinf.pstatic.net/main_9073684/90736847764.jpg?type=f300",
        "productNo": "13192336671"
      },
      {
        "label": "구성 2 · 옵션 2",
        "price": 1618930,
        "url": "https://brandconnect.naver.com/affiliates/1021047475131879?channelProductNo=13192336670&ac=crtshp&cid=1021046864721728&t=AWsGa78AA6Ci_6u3QAAAAAMSUxUejmh9dTkYzm0",
        "image": "https://shopping-phinf.pstatic.net/main_9073684/90736847763.jpg?type=f300",
        "productNo": "13192336670"
      },
      {
        "label": "구성 2 · 옵션 3",
        "price": 1618930,
        "url": "https://brandconnect.naver.com/affiliates/1021047475131874?channelProductNo=13192336672&ac=crtshp&cid=1021046864721728&t=AWsGa78AA6Ci_6u3QAAAAAMSUxUgdam0zkBCC3w",
        "image": "https://shopping-phinf.pstatic.net/main_9073684/90736847765.jpg?type=f300",
        "productNo": "13192336672"
      }
    ]
  },
  {
    "slug": "ipad-air-13",
    "cat": "ipad",
    "name": "아이패드 에어 13 (M4) Wi-Fi",
    "en": "iPad Air 13 (M4)",
    "summary": "32.8cm 큰 화면의 에어. 화면 분할 작업, 악보·도면 보기에 좋습니다.",
    "who": [
      "큰 화면이 필요한 필기·문서 작업",
      "노트북 대용 태블릿",
      "그림 그리는 분"
    ],
    "specs": {
      "화면": "32.8cm Liquid Retina (600니트)",
      "칩": "M4 (8코어 CPU, 9코어 GPU), 12GB 메모리",
      "저장 용량": "128GB / 256GB / 512GB / 1TB",
      "무게": "616g",
      "배터리": "최대 10시간(동영상·웹)",
      "인증": "Touch ID(상단 버튼)",
      "펜슬": "Apple Pencil Pro, Apple Pencil(USB-C)",
      "색상": "블루, 퍼플, 스타라이트, 스페이스 그레이"
    },
    "src": "https://www.apple.com/kr/ipad-air/specs/",
    "variants": [
      {
        "label": "구성 1 · 옵션 1",
        "price": 1502530,
        "url": "https://brandconnect.naver.com/affiliates/1021047475135978?channelProductNo=13192336814&ac=crtshp&cid=1021046864721728&t=AWsGa70AA6Ci_6u3QAAAAAMSUxWutO7qyqKxjJQ",
        "image": "https://shopping-phinf.pstatic.net/main_9073684/90736847911.2.jpg?type=f300",
        "productNo": "13192336814"
      },
      {
        "label": "구성 1 · 옵션 2",
        "price": 1502530,
        "url": "https://brandconnect.naver.com/affiliates/1021047475135971?channelProductNo=13192336813&ac=crtshp&cid=1021046864721728&t=AWsGa70AA6Ci_6u3QAAAAAMSUxWtj7-gWa7svRM",
        "image": "https://shopping-phinf.pstatic.net/main_9073684/90736847910.2.jpg?type=f300",
        "productNo": "13192336813"
      },
      {
        "label": "구성 2 · 옵션 1",
        "price": 1667430,
        "url": "https://brandconnect.naver.com/affiliates/1021047475135994?channelProductNo=13192336818&ac=crtshp&cid=1021046864721728&t=AWsGa7kAA6Ci_6u3QAAAAAMSUxWyEWKTRTDfP7c",
        "image": "https://shopping-phinf.pstatic.net/main_9073684/90736847914.2.jpg?type=f300",
        "productNo": "13192336818"
      },
      {
        "label": "구성 2 · 옵션 2",
        "price": 1667430,
        "url": "https://brandconnect.naver.com/affiliates/1021047475135973?channelProductNo=13192336819&ac=crtshp&cid=1021046864721728&t=AWsGa70AA6Ci_6u3QAAAAAMSUxWzGnT6YYKmzPM",
        "image": "https://shopping-phinf.pstatic.net/main_9073684/90736847915.2.jpg?type=f300",
        "productNo": "13192336819"
      },
      {
        "label": "구성 2 · 옵션 3",
        "price": 1667430,
        "url": "https://brandconnect.naver.com/affiliates/1021047475135972?channelProductNo=13192336817&ac=crtshp&cid=1021046864721728&t=AWsGa70AA6Ci_6u3QAAAAAMSUxWxPCoY-w2YDBs",
        "image": "https://shopping-phinf.pstatic.net/main_9073684/90736847913.jpg?type=f300",
        "productNo": "13192336817"
      },
      {
        "label": "구성 3",
        "price": 2006930,
        "url": "https://brandconnect.naver.com/affiliates/1021047475135968?channelProductNo=13192336823&ac=crtshp&cid=1021046864721728&t=AWsGa70AA6Ci_6u3QAAAAAMSUxW3NakKlZLLDvQ",
        "image": "https://shopping-phinf.pstatic.net/main_9073684/90736847919.jpg?type=f300",
        "productNo": "13192336823"
      }
    ]
  },
  {
    "slug": "ipad-pro-11",
    "cat": "ipad",
    "name": "아이패드 프로 11 (M5)",
    "en": "iPad Pro 11 (M5)",
    "summary": "탠덤 OLED(Ultra Retina XDR)와 M5 칩, 5.3mm 두께의 최상위 아이패드.",
    "who": [
      "영상·사진 편집, 드로잉을 전문적으로 하는 분",
      "최고 화질 화면을 원하는 분"
    ],
    "specs": {
      "화면": "28.2cm Ultra Retina XDR(탠덤 OLED), 10~120Hz ProMotion",
      "칩": "M5 (256·512GB: 9코어 CPU / 1·2TB: 10코어 CPU)",
      "저장 용량": "256GB / 512GB / 1TB / 2TB",
      "무게": "444g (Wi-Fi)",
      "배터리": "최대 10시간(동영상·웹)",
      "포트": "Thunderbolt / USB 4",
      "펜슬": "Apple Pencil Pro, Apple Pencil(USB-C)",
      "색상": "실버, 스페이스 블랙"
    },
    "src": "https://www.apple.com/kr/ipad-pro/specs/",
    "variants": [
      {
        "label": "구성 1",
        "price": 1899050,
        "url": "https://brandconnect.naver.com/affiliates/1021047475131888?channelProductNo=12547694428&ac=crtshp&cid=1021046864721728&t=AWsGa74AA6Ci_6u3QAAAAALr5p9c97uCmqoZNms",
        "image": "https://shopping-phinf.pstatic.net/main_9009220/90092205281.6.jpg?type=f300",
        "productNo": "12547694428"
      },
      {
        "label": "구성 2",
        "price": 2231550,
        "url": "https://brandconnect.naver.com/affiliates/1021047475131881?channelProductNo=12547694430&ac=crtshp&cid=1021046864721728&t=AWsGa74AA6Ci_6u3QAAAAALr5p9eeLMIIu-dsxw",
        "image": "https://shopping-phinf.pstatic.net/main_9009220/90092205283.jpg?type=f300",
        "productNo": "12547694430"
      }
    ]
  },
  {
    "slug": "ipad-pro-13",
    "cat": "ipad",
    "name": "아이패드 프로 13 (M5)",
    "en": "iPad Pro 13 (M5)",
    "summary": "33.0cm 탠덤 OLED 대화면 프로. 노트북을 대신할 작업용 태블릿을 찾는 분께 맞습니다.",
    "who": [
      "큰 화면에서 편집·드로잉하는 분",
      "노트북 대신 태블릿 하나로 일하려는 분"
    ],
    "specs": {
      "화면": "33.0cm Ultra Retina XDR(탠덤 OLED), 10~120Hz ProMotion",
      "칩": "M5 (256·512GB: 9코어 CPU / 1·2TB: 10코어 CPU)",
      "저장 용량": "256GB / 512GB / 1TB / 2TB",
      "무게": "579g (Wi-Fi)",
      "배터리": "최대 10시간(동영상·웹)",
      "포트": "Thunderbolt / USB 4",
      "펜슬": "Apple Pencil Pro, Apple Pencil(USB-C)",
      "색상": "실버, 스페이스 블랙"
    },
    "src": "https://www.apple.com/kr/ipad-pro/specs/",
    "variants": [
      {
        "label": "구성 1",
        "price": 2374050,
        "url": "https://brandconnect.naver.com/affiliates/1021047475131877?channelProductNo=12547694443&ac=crtshp&cid=1021046864721728&t=AWsGa78AA6Ci_6u3QAAAAALr5p9riq3UKQgO1UI",
        "image": "https://shopping-phinf.pstatic.net/main_9009220/90092205294.2.jpg?type=f300",
        "productNo": "12547694443"
      },
      {
        "label": "구성 2 · 옵션 1",
        "price": 2706550,
        "url": "https://brandconnect.naver.com/affiliates/1021047475135974?channelProductNo=12547694445&ac=crtshp&cid=1021046864721728&t=AWsGa70AA6Ci_6u3QAAAAALr5p9tdal_EoXuuw8",
        "image": "https://shopping-phinf.pstatic.net/main_9009220/90092205296.jpg?type=f300",
        "productNo": "12547694445"
      },
      {
        "label": "구성 2 · 옵션 2",
        "price": 2706550,
        "url": "https://brandconnect.naver.com/affiliates/1021047475131895?channelProductNo=12547694444&ac=crtshp&cid=1021046864721728&t=AWsGa74AA6Ci_6u3QAAAAALr5p9sooyLZeD6vFE",
        "image": "https://shopping-phinf.pstatic.net/main_9009220/90092205295.jpg?type=f300",
        "productNo": "12547694444"
      }
    ]
  },
  {
    "slug": "macbook-neo",
    "cat": "mac",
    "name": "맥북 네오 (A18 Pro)",
    "en": "MacBook Neo",
    "summary": "A18 Pro 칩을 넣은 입문용 맥북. 문서·웹·인강 위주라면 가장 부담 없는 맥입니다.",
    "who": [
      "첫 맥북을 저렴하게 시작하는 학생",
      "문서·웹 위주 사용자",
      "가벼운 서브 노트북"
    ],
    "specs": {
      "화면": "33.0cm Liquid Retina (500니트, sRGB)",
      "칩": "A18 Pro (6코어 CPU, 5코어 GPU)",
      "메모리": "8GB",
      "저장 장치": "256GB / 512GB",
      "배터리": "동영상 스트리밍 최대 16시간",
      "무게": "1.23kg",
      "포트": "USB 3(USB-C) 1개, USB 2(USB-C) 1개, 3.5mm 잭",
      "기타": "Touch ID는 상위 구성(모델 2)에만 탑재, Wi-Fi 6E",
      "색상": "실버, 블러시, 시트러스, 인디고"
    },
    "src": "https://www.apple.com/kr/macbook-neo/specs/",
    "variants": [
      {
        "label": "구성 1 · 옵션 1",
        "price": 1130500,
        "url": "https://brandconnect.naver.com/affiliates/1021047475131902?channelProductNo=13203249085&ac=crtshp&cid=1021046864721728&t=AWsGa70AA6Ci_6u3QAAAAAMS-Ze9Hg-jO0tJ1EQ",
        "image": "https://shopping-phinf.pstatic.net/main_9074776/90747760182.2.jpg?type=f300",
        "productNo": "13203249085"
      },
      {
        "label": "구성 1 · 옵션 2",
        "price": 1130500,
        "url": "https://brandconnect.naver.com/affiliates/1021047475131894?channelProductNo=13203249087&ac=crtshp&cid=1021046864721728&t=AWsGa74AA6Ci_6u3QAAAAAMS-Ze_3Xkk9RhEYI0",
        "image": "https://shopping-phinf.pstatic.net/main_9074776/90747760184.2.jpg?type=f300",
        "productNo": "13203249087"
      },
      {
        "label": "구성 1 · 옵션 3",
        "price": 1130500,
        "url": "https://brandconnect.naver.com/affiliates/1021047475131878?channelProductNo=13203249081&ac=crtshp&cid=1021046864721728&t=AWsGa78AA6Ci_6u3QAAAAAMS-Ze5F_Ec7YyXOVA",
        "image": "https://shopping-phinf.pstatic.net/main_9074776/90747760178.jpg?type=f300",
        "productNo": "13203249081"
      },
      {
        "label": "구성 2 · 옵션 1",
        "price": 1320500,
        "url": "https://brandconnect.naver.com/affiliates/1021047475135990?channelProductNo=13203249086&ac=crtshp&cid=1021046864721728&t=AWsGa7kAA6Ci_6u3QAAAAAMS-Ze-0d8RbczKeGs",
        "image": "https://shopping-phinf.pstatic.net/main_9074776/90747760183.jpg?type=f300",
        "productNo": "13203249086"
      },
      {
        "label": "구성 2 · 옵션 2",
        "price": 1320500,
        "url": "https://brandconnect.naver.com/affiliates/1021047475135970?channelProductNo=13203249084&ac=crtshp&cid=1021046864721728&t=AWsGa70AA6Ci_6u3QAAAAAMS-Ze8bzZUnaxmKQE",
        "image": "https://shopping-phinf.pstatic.net/main_9074776/90747760181.jpg?type=f300",
        "productNo": "13203249084"
      },
      {
        "label": "구성 2 · 옵션 3",
        "price": 1320500,
        "url": "https://brandconnect.naver.com/affiliates/1021047475131884?channelProductNo=13203249082&ac=crtshp&cid=1021046864721728&t=AWsGa74AA6Ci_6u3QAAAAAMS-Ze6vGzV5e9iJ5I",
        "image": "https://shopping-phinf.pstatic.net/main_9074776/90747760179.2.jpg?type=f300",
        "productNo": "13203249082"
      }
    ]
  },
  {
    "slug": "macbook-air-13",
    "cat": "mac",
    "name": "맥북에어 13 (M5)",
    "en": "MacBook Air 13 (M5)",
    "summary": "가장 많이 팔리는 맥. M5 칩과 16GB 메모리로 대부분의 작업을 조용하게(팬리스) 처리합니다.",
    "who": [
      "대학생·직장인 메인 노트북",
      "들고 다니는 시간이 긴 분",
      "사진 정리·가벼운 영상 편집"
    ],
    "specs": {
      "화면": "34.5cm Liquid Retina (500니트)",
      "칩": "M5 (10코어 CPU, 8코어 GPU)",
      "메모리": "16GB (24·32GB 구성 가능)",
      "저장 장치": "512GB부터",
      "배터리": "동영상 스트리밍 최대 18시간",
      "무게": "1.23kg",
      "포트": "Thunderbolt 4 2개, MagSafe 3, 3.5mm 잭",
      "색상": "스카이 블루, 실버, 스타라이트, 미드나이트"
    },
    "src": "https://www.apple.com/kr/macbook-air/specs/",
    "variants": [
      {
        "label": "기본 구성 · 옵션 1",
        "price": 2080500,
        "url": "https://brandconnect.naver.com/affiliates/1021047475135987?channelProductNo=13197341200&ac=crtshp&cid=1021046864721728&t=AWsGa7kAA6Ci_6u3QAAAAAMSn3IQUvueFaNH4x0",
        "image": "https://shopping-phinf.pstatic.net/main_9074185/90741852295.jpg?type=f300",
        "productNo": "13197341200"
      },
      {
        "label": "기본 구성 · 옵션 2",
        "price": 2080500,
        "url": "https://brandconnect.naver.com/affiliates/1021047475135981?channelProductNo=13197341199&ac=crtshp&cid=1021046864721728&t=AWsGa70AA6Ci_6u3QAAAAAMSn3IPlaj4W1hkGIw",
        "image": "https://shopping-phinf.pstatic.net/main_9074185/90741852294.jpg?type=f300",
        "productNo": "13197341199"
      }
    ]
  },
  {
    "slug": "macbook-air-15",
    "cat": "mac",
    "name": "맥북에어 15 (M5)",
    "en": "MacBook Air 15 (M5)",
    "summary": "38.9cm 큰 화면의 에어. 화면은 크게, 무게는 가볍게 쓰고 싶은 분께 맞습니다.",
    "who": [
      "큰 화면으로 엑셀·문서를 보는 분",
      "데스크톱 대신 쓸 노트북",
      "영상 시청이 많은 분"
    ],
    "specs": {
      "화면": "38.9cm Liquid Retina (500니트)",
      "칩": "M5 (10코어 CPU, 10코어 GPU)",
      "메모리": "16GB부터",
      "저장 장치": "512GB부터",
      "배터리": "동영상 스트리밍 최대 18시간",
      "무게": "1.51kg",
      "포트": "Thunderbolt 4 2개, MagSafe 3, 3.5mm 잭",
      "색상": "스카이 블루, 실버, 스타라이트, 미드나이트"
    },
    "src": "https://www.apple.com/kr/macbook-air/specs/",
    "variants": [
      {
        "label": "구성 1 · 옵션 1",
        "price": 2365500,
        "url": "https://brandconnect.naver.com/affiliates/1021047475140080?channelProductNo=13197341400&ac=crtshp&cid=1021046864721728&t=AWsGa7UAA6Ci_6u3QAAAAAMSn3LYKkco4G41Ros",
        "image": "https://shopping-phinf.pstatic.net/main_9074185/90741852497.jpg?type=f300",
        "productNo": "13197341400"
      },
      {
        "label": "구성 1 · 옵션 2",
        "price": 2365500,
        "url": "https://brandconnect.naver.com/affiliates/1021047475140079?channelProductNo=13197341399&ac=crtshp&cid=1021046864721728&t=AWsGa7UAA6Ci_6u3QAAAAAMSn3LXObMsoQJrqBs",
        "image": "https://shopping-phinf.pstatic.net/main_9074185/90741852496.2.jpg?type=f300",
        "productNo": "13197341399"
      },
      {
        "label": "구성 1 · 옵션 3",
        "price": 2365500,
        "url": "https://brandconnect.naver.com/affiliates/1021047475140070?channelProductNo=13197341401&ac=crtshp&cid=1021046864721728&t=AWsGa7UAA6Ci_6u3QAAAAAMSn3LZAE0_DDekDRY",
        "image": "https://shopping-phinf.pstatic.net/main_9074185/90741852498.2.jpg?type=f300",
        "productNo": "13197341401"
      },
      {
        "label": "구성 1 · 옵션 4",
        "price": 2365500,
        "url": "https://brandconnect.naver.com/affiliates/1021047475135977?channelProductNo=13197341402&ac=crtshp&cid=1021046864721728&t=AWsGa70AA6Ci_6u3QAAAAAMSn3LaBLhF2COoURQ",
        "image": "https://shopping-phinf.pstatic.net/main_9074185/90741852499.jpg?type=f300",
        "productNo": "13197341402"
      },
      {
        "label": "구성 2 · 옵션 1",
        "price": 2850000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475140076?channelProductNo=13197341406&ac=crtshp&cid=1021046864721728&t=AWsGa7UAA6Ci_6u3QAAAAAMSn3LeZFwZvCIEsm0",
        "image": "https://shopping-phinf.pstatic.net/main_9074185/90741852501.jpg?type=f300",
        "productNo": "13197341406"
      },
      {
        "label": "구성 2 · 옵션 2",
        "price": 2850000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475131880?channelProductNo=13197341407&ac=crtshp&cid=1021046864721728&t=AWsGa78AA6Ci_6u3QAAAAAMSn3LfZFzjYr9C28I",
        "image": "https://shopping-phinf.pstatic.net/main_9074185/90741852502.2.jpg?type=f300",
        "productNo": "13197341407"
      },
      {
        "label": "구성 3",
        "price": 3173000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475131873?channelProductNo=13197341409&ac=crtshp&cid=1021046864721728&t=AWsGa78AA6Ci_6u3QAAAAAMSn3LhnHjLRQ-jz5c",
        "image": "https://shopping-phinf.pstatic.net/main_9074185/90741852504.jpg?type=f300",
        "productNo": "13197341409"
      }
    ]
  },
  {
    "slug": "macbook-pro-14",
    "cat": "mac",
    "name": "맥북프로 14 (M6)",
    "en": "MacBook Pro 14 (M6)",
    "summary": "Liquid Retina XDR 120Hz 화면과 M6 칩. 오래 켜두고 무거운 작업을 하는 분을 위한 프로 노트북입니다.",
    "who": [
      "영상·사진 편집, 개발 작업",
      "외부 모니터 여러 대를 쓰는 분",
      "팬이 있어 장시간 고부하 작업이 많은 분"
    ],
    "specs": {
      "화면": "35.9cm Liquid Retina XDR, 최대 120Hz ProMotion",
      "칩": "M6 (12코어 CPU, 12코어 GPU)",
      "메모리": "16GB / 24GB / 32GB",
      "저장 장치": "1TB부터",
      "배터리": "동영상 스트리밍 최대 24시간",
      "무게": "1.55kg",
      "색상": "스페이스 블랙, 실버"
    },
    "src": "https://www.apple.com/kr/macbook-pro/",
    "variants": [
      {
        "label": "16GB 메모리 · 1TB",
        "price": 3290000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475131886?channelProductNo=13835889938&ac=crtshp&cid=1021046864721728&t=AWsGa74AA6Ci_6u3QAAAAAM4ru0SQtvveOprrJY",
        "image": "https://shopping-phinf.pstatic.net/main_9138040/91380401316.jpg?type=f300",
        "productNo": "13835889938"
      },
      {
        "label": "24GB 메모리 · 1TB · 옵션 1",
        "price": 3630000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475131893?channelProductNo=13835889940&ac=crtshp&cid=1021046864721728&t=AWsGa74AA6Ci_6u3QAAAAAM4ru0UoQ6eMC7DiiY",
        "image": "https://shopping-phinf.pstatic.net/main_9138040/91380401318.jpg?type=f300",
        "productNo": "13835889940"
      },
      {
        "label": "24GB 메모리 · 1TB · 옵션 2",
        "price": 3630000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475131892?channelProductNo=13835889939&ac=crtshp&cid=1021046864721728&t=AWsGa74AA6Ci_6u3QAAAAAM4ru0TkbFuB7Mangg",
        "image": "https://shopping-phinf.pstatic.net/main_9138040/91380401317.jpg?type=f300",
        "productNo": "13835889939"
      },
      {
        "label": "32GB 메모리 · 1TB",
        "price": 3970000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475131903?channelProductNo=13835889941&ac=crtshp&cid=1021046864721728&t=AWsGa70AA6Ci_6u3QAAAAAM4ru0VRnuOPQ-q3X8",
        "image": "https://shopping-phinf.pstatic.net/main_9138040/91380401319.jpg?type=f300",
        "productNo": "13835889941"
      }
    ]
  },
  {
    "slug": "airpods-5",
    "cat": "audio",
    "name": "에어팟 5",
    "en": "AirPods 5",
    "summary": "오픈형인데도 노이즈 캔슬링이 되는 기본 에어팟. 귀에 꽂는 실리콘 팁이 불편한 분께 좋습니다.",
    "who": [
      "커널형(이어팁)이 답답한 분",
      "통화·출퇴근용 무난한 이어폰"
    ],
    "specs": {
      "칩": "H2",
      "소음 제어": "액티브 노이즈 캔슬링, 적응형 오디오, 주변음 허용",
      "배터리": "ANC 켠 상태 최대 4시간 / 끈 상태 최대 6시간, 케이스 포함 ANC 최대 20시간",
      "충전": "USB-C",
      "방수": "IP57",
      "무게": "4.3g(한 쪽)"
    },
    "src": "https://www.apple.com/kr/airpods-5/specs/",
    "variants": [
      {
        "label": "기본 구성",
        "price": 199000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475144161?channelProductNo=13753702047&ac=crtshp&cid=1021046864721728&t=AWsGa6EAA6Ci_6u3QAAAAAMzyNafJB17Q_v11r8",
        "image": "https://shopping-phinf.pstatic.net/main_9129821/91298213411.jpg?type=f300",
        "productNo": "13753702047"
      }
    ]
  },
  {
    "slug": "airpods-5-wireless",
    "cat": "audio",
    "name": "에어팟 5 (무선 충전 케이스)",
    "en": "AirPods 5 (무선 충전 케이스)",
    "summary": "에어팟 5에 무선 충전 케이스와 스와이프 음량 조절을 더한 모델.",
    "who": [
      "무선 충전 패드·애플워치 충전기를 쓰는 분",
      "케이스로 음량 조절을 하고 싶은 분"
    ],
    "specs": {
      "칩": "H2",
      "소음 제어": "액티브 노이즈 캔슬링, 적응형 오디오, 주변음 허용",
      "배터리": "ANC 켠 상태 최대 5시간",
      "충전": "USB-C, Apple Watch 충전기, Qi 인증 충전기",
      "기타": "스와이프 음량 조절",
      "방수": "IP57"
    },
    "src": "https://www.apple.com/kr/airpods-5/specs/",
    "variants": [
      {
        "label": "기본 구성",
        "price": 229000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475140081?channelProductNo=13753702046&ac=crtshp&cid=1021046864721728&t=AWsGa7UAA6Ci_6u3QAAAAAMzyNaeodG9pQB1cKM",
        "image": "https://shopping-phinf.pstatic.net/main_9129821/91298213410.jpg?type=f300",
        "productNo": "13753702046"
      }
    ]
  },
  {
    "slug": "airpods-pro-3",
    "cat": "audio",
    "name": "에어팟 프로 3",
    "en": "AirPods Pro 3",
    "summary": "가장 강력한 노이즈 캔슬링과 운동용 심박 센서, 청력 보조 기능까지 갖춘 커널형 에어팟.",
    "who": [
      "지하철·비행기에서 소음을 확실히 줄이고 싶은 분",
      "운동하면서 심박을 재는 분",
      "보청 기능이 필요한 분"
    ],
    "specs": {
      "칩": "H2",
      "소음 제어": "액티브 노이즈 캔슬링, 적응형 오디오, 주변음 허용",
      "배터리": "ANC 켠 상태 최대 8시간, 케이스 포함 최대 24시간",
      "건강": "운동용 심박 센서, 청력 테스트, 보청기 기능",
      "충전": "MagSafe, Apple Watch 충전기, Qi, USB-C",
      "방수": "IP57 (이어폰·케이스)",
      "구성": "실리콘 이어팁 5가지 크기(XXS~L)"
    },
    "src": "https://www.apple.com/kr/airpods-pro/specs/",
    "variants": [
      {
        "label": "기본 구성",
        "price": 332100,
        "url": "https://brandconnect.naver.com/affiliates/1021047475135999?channelProductNo=12381514295&ac=crtshp&cid=1021046864721728&t=AWsGa7kAA6Ci_6u3QAAAAALh_uo3pEXuy1FRHVQ",
        "image": "https://shopping-phinf.pstatic.net/main_8992602/89926025012.6.jpg?type=f300",
        "productNo": "12381514295"
      }
    ]
  },
  {
    "slug": "earpods",
    "cat": "audio",
    "name": "이어팟 (유선)",
    "en": "EarPods",
    "summary": "배터리 걱정 없는 정품 유선 이어폰. 충전할 필요가 없고 통화 마이크가 있습니다.",
    "who": [
      "충전 없이 바로 쓰는 유선 이어폰이 필요한 분",
      "인강·회의용 저렴한 이어폰",
      "예비용"
    ],
    "specs": {
      "형태": "유선 이어폰(리모컨·마이크 포함)",
      "단자": "상품명 기준 USB-C (구매 전 상품 페이지에서 단자 확인)"
    },
    "src": "https://brand.naver.com/applestore",
    "variants": [
      {
        "label": "구성 1 · 옵션 1",
        "price": 27500,
        "url": "https://brandconnect.naver.com/affiliates/1021047475135982?channelProductNo=11559324889&ac=crtshp&cid=1021046864721728&t=AWsGa70AA6Ci_6u3QAAAAAKw_UzZkb37-UtsLTU",
        "image": "https://shopping-phinf.pstatic.net/main_8910383/89103835295.4.jpg?type=f300",
        "productNo": "11559324889"
      },
      {
        "label": "구성 1 · 옵션 2",
        "price": 27500,
        "url": "https://brandconnect.naver.com/affiliates/1021047475135980?channelProductNo=11329942689&ac=crtshp&cid=1021046864721728&t=AWsGa70AA6Ci_6u3QAAAAAKjUTShtH0qOMQmavw",
        "image": "https://shopping-phinf.pstatic.net/main_8887445/88874453020.7.jpg?type=f300",
        "productNo": "11329942689"
      },
      {
        "label": "구성 1 · 옵션 3",
        "price": 27500,
        "url": "https://brandconnect.naver.com/affiliates/1021047475131898?channelProductNo=11338420884&ac=crtshp&cid=1021046864721728&t=AWsGa74AA6Ci_6u3QAAAAAKj0pKUf2kckgbQuc0",
        "image": "https://shopping-phinf.pstatic.net/main_8888293/88882931215.3.jpg?type=f300",
        "productNo": "11338420884"
      },
      {
        "label": "USB-C · 옵션 1",
        "price": 28000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475144163?channelProductNo=11750347087&ac=crtshp&cid=1021046864721728&t=AWsGa6EAA6Ci_6u3QAAAAAK8YBFPs7adostlApk",
        "image": "https://shopping-phinf.pstatic.net/main_8929485/89294857604.jpg?type=f300",
        "productNo": "11750347087"
      },
      {
        "label": "USB-C · 옵션 2",
        "price": 28000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475144162?channelProductNo=11750347086&ac=crtshp&cid=1021046864721728&t=AWsGa6EAA6Ci_6u3QAAAAAK8YBFO33KWM-3UZ4s",
        "image": "https://shopping-phinf.pstatic.net/main_8929485/89294857603.jpg?type=f300",
        "productNo": "11750347086"
      },
      {
        "label": "USB-C · 옵션 3",
        "price": 28000,
        "url": "https://brandconnect.naver.com/affiliates/1021047475144160?channelProductNo=11750347839&ac=crtshp&cid=1021046864721728&t=AWsGa6EAA6Ci_6u3QAAAAAK8YBQ_pzFumZNUnWM",
        "image": "https://shopping-phinf.pstatic.net/main_8929485/89294858357.jpg?type=f300",
        "productNo": "11750347839"
      }
    ]
  }
];

export const modelsByCat = (c: CategoryId) => MODELS.filter((m) => m.cat === c);
export const getModel = (slug: string) => MODELS.find((m) => m.slug === slug);
export const minPrice = (m: Model) => Math.min(...m.variants.map((v) => v.price));
