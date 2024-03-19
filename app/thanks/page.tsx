"use client";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className="w-3/4 h-full flex flex-col justify-center items-center lg:flex-row gap-2 lg:gap-10"
    >
      <img alt="logo" src="/logo.svg" className="w-full lg:w-1/3" />
      <div>
        <p className="pb-4 text-[2rem] uppercase text-center lg:text-left lg:pb-0 lg:text-[5rem]">
          Thanks
        </p>
        <p className="text-center lg:text-left lg:text-[2rem]">
          Fantastic! You&apos;ve completed the presentation.
        </p>
      </div>
    </div>
  );
}
