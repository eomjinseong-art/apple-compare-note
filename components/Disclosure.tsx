import { AD_DISCLOSURE } from "@/lib/site";

export function Disclosure() {
  return (
    <div className="bg-amber-50 border-b border-amber-200 text-amber-900 text-xs sm:text-sm">
      <p className="mx-auto max-w-5xl px-4 py-2">
        <span className="mr-1 rounded bg-amber-200 px-1.5 py-0.5 text-[11px] font-bold">광고</span>
        {AD_DISCLOSURE}
      </p>
    </div>
  );
}
