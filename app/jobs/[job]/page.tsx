"use client";
import { JobsType, NextPressentation } from "@/lib/presentation-parts";
import { usePathname, useRouter } from "next/navigation";

type JobsInfo = {
  [key in JobsType]: {
    name: string;
    title: string;
    desc: string[];
    stack: string[];
  };
};

const jobsInfo: JobsInfo = {
  LudekCoUk: {
    name: "Software Developer",
    title: "Ludek.co.uk",
    desc: [
      "My first job as a developer.",
      "Doing exporting and migrating data from databases.",
      "Doing stuff noone else wanted to do.",
    ],
    stack: ["dotnet", "SQL", "WPF"],
  },
  Amenit: {
    name: "Software Developer",
    title: "Amenit s.r.o.",
    desc: [
      "Web applications in dontnet core.",
      "Working with Umbraco CMS.",
      "Trying to get run old projects.",
      "Migrating old webs",
    ],
    stack: ["dotnet", "JS", "Umbraco"],
  },
  Brainsov: {
    name: "Frontend Developer",
    title: "Brainsov s.r.o.",
    desc: [
      "Web applications in react.",
      "Administration panel for Moje Karolina",
      "Bad comunication with others.",
      "Refactoring bad code.",
    ],
    stack: ["React", "JS", "NextJS"],
  },
  TietoEvry: {
    name: "Frontend Developer Internship",
    title: "TietoEvry",
    desc: [
      "Web applications in react.",
      "Working on new internal projects",
      "Code review for other students.",
    ],
    stack: ["React", "TS", "Tanstack"],
  },
};

export default function Page({
  params: { job },
}: {
  params: { job: JobsType };
}) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div
      onClick={() => {
        router.push(NextPressentation(pathname));
      }}
      className="w-full h-full p-10 lg:p-5 flex flex-col gap-10 lg:gap-20"
    >
      <p className="text-3xl lg:text-[6rem] font-bold">{jobsInfo[job].name}</p>
      <p className="text-2xl lg:text-[5rem] font-light">
        {jobsInfo[job].title}
      </p>
      <div className="flex flex-col gap-2 lg:gap-4 lg:pt-16">
        {jobsInfo[job].desc.map((desc, index) => (
          <p className="text-lg lg:text-4xl font-light" key={index}>
            {desc}
          </p>
        ))}
      </div>
      <div className="absolute bottom-8 right-1/2 translate-x-[50%] lg:translate-x-0 lg:right-8 flex gap-1 lg:gap-4">
        {jobsInfo[job].stack.map((stack, index) => (
          <p
            className="uppercase font-light text-lg lg:text-4xl bg-slate-200 text-black py-1 px-3 lg:py-8 lg:px-12 rounded-full shadow-md"
            key={index}
          >
            {stack}
          </p>
        ))}
      </div>
    </div>
  );
}
