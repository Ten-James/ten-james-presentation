"use client";
import { NextPressentation } from "@/lib/presentation-parts";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
export default function Page({ params }: { params: { job: string } }) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div
      onClick={() => {
        router.push(NextPressentation(pathname));
      }}
    >
      My Post: {params.job}
    </div>
  );
}
