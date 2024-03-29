"use client";
import { NextPressentation } from "@/lib/presentation-parts";
import { useRouter, usePathname } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div
      onClick={() => {
        router.push(NextPressentation(pathname));
      }}
      className="w-full h-full grid place-items-center"
    >
      <img alt="meme" src="/meme.jpg" className="max-w-[90vw] lg:w-1/3" />
    </div>
  );
}
