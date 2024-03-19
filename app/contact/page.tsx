"use client";
import { NextPressentation } from "@/lib/presentation-parts";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="w-8/12 flex gap-10 flex-col lg:flex-row justify-center items-center">
      <div className="relative cursor-pointer">
        <img
          alt="Me"
          onClick={() => router.push(NextPressentation(pathname))}
          src="/me.jfif"
        />
        <p className="opacity-15 absolute top-0 left-[50%] translate-x-[-20%] w-[100%] z-10 translate-y-[-2rem]">
          Click on me to continue
        </p>
      </div>
      <Link
        className=" lg:hidden rounded-full cursor-pointer bg-slate-950 p-10"
        href="https://github.com/Ten-James"
        target="_blank"
      >
        <GithubIcon size={120} />
      </Link>
      <Link
        className="lg:hidden rounded-full cursor-pointer bg-slate-950 p-10"
        href="https://www.linkedin.com/in/jakub-indrak/"
        target="_blank"
      >
        <LinkedinIcon size={120} />
      </Link>
      <div className="hidden pl-10 gap-10 lg:flex flex-col flex-grow">
        <Link
          href="https://github.com/Ten-James"
          target="_blank"
          className="block text-[3rem]"
        >
          www.github.com/Ten-James
        </Link>
        <Link
          href="https://www.linkedin.com/in/jakub-indrak/"
          target="_blank"
          className="block text-[3rem]"
        >
          www.linkedin.com/in/jakub-indrak/
        </Link>
      </div>
    </div>
  );
}
