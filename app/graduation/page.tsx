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
      <img alt="graduate" src="/graduate.gif" />
    </div>
  );
}
