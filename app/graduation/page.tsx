"use client";
import { NextPressentation } from "@/lib/presentation-parts";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

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
      <Image alt="graduate" src="/graduate.gif" className="max-w-[90vw]" />
    </div>
  );
}
