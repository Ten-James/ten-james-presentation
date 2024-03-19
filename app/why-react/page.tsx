"use client";
import { NextPressentation } from "@/lib/presentation-parts";
import { ChevronRight } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div
      onClick={() => {
        router.push(NextPressentation(pathname));
      }}
      className="w-full h-full flex flex-col lg:flex-row items-center justify-center md:gap-10"
    >
      <img src="/csharplogo.png" className="w-1/3" />
      <ChevronRight size={120} />
      <img src="/reactlogo.png" className="w-1/3" />
    </div>
  );
}
