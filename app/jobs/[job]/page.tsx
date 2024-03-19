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
      "Migrating old webs",
    ],
    stack: ["dotnet", "Javascript", "Umbraco"],
  },
  Brainsov: {
    name: "Frontend Developer",
    title: "Brainsov s.r.o.",
    desc: [
      "Web applications in react.",
      "Administration panel for Moje Karolina",
      "Refactoring bad code.",
    ],
    stack: ["React", "Javascript", "NodeJS", "NextJS"],
  },
  TietoEvry: {
    name: "Frontend Developer Internship",
    title: "TietoEvry",
    desc: ["Web applications in react.", "Code review for other students."],
    stack: ["React", "Typescript", "Tanstack"],
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
      <div className="absolute bottom-10 right-10 flex gap-2 lg:gap-4">
        {jobsInfo[job].stack.map((stack, index) => (
          <p
            className="font-light text-lg lg:text-4xl bg-slate-200 text-black py-1 px-2 lg:py-8 lg:px-12 rounded-full shadow-md"
            key={index}
          >
            {stack}
          </p>
        ))}
      </div>
    </div>
  );
}
