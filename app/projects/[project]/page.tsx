"use client";
import { NextPressentation } from "@/lib/presentation-parts";
import { usePathname, useRouter } from "next/navigation";

export default function Page({ params }: { params: { project: string } }) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div
      onClick={() => {
        router.push(NextPressentation(pathname));
      }}
    >
      My Post: {params.project}
    </div>
  );
}
