"use client";
import { NextPressentation, ProjectsType } from "@/lib/presentation-parts";
import { usePathname, useRouter } from "next/navigation";

type JobsInfo = {
  [key in ProjectsType]: {
    name: string;
    link: string;
    desc: string[];
    stack: string[];
    image: string;
    imageClass: string;
  };
};

const projectsInfo: JobsInfo = {
  Czechtina: {
    name: "Czechtina",
    link: "github.com/Ten-James/czechtina",
    desc: ["Compiler for my own language.", "Written in Kotlin."],
    stack: ["Kotlin", "Gradle"],
    image: "/czechtina.png",
    imageClass: "lg:w-6/12",
  },
  MatApp: {
    name: "MatApp",
    link: "github.com/Ten-James/matapp",
    desc: ["Restaurants app.", "Managing orders, foods and ingredients."],
    stack: ["React", "TS", "SocketIO", "Express"],
    image: "/matapp.png",
    imageClass: "lg:w-6/12 lg:translate-y-[-20%]",
  },
  Astronomic: {
    name: "Astronomic",
    link: "---",
    desc: ["Astronomy Game.", "Doging asteroids and collecting points."],
    stack: ["Unity", "C#"],
    image: "/astronomic.webp",
    imageClass: "w-3/6 lg:w-2/12",
  },
  Unsplarty: {
    name: "Unsplarty",
    link: "github.com/Ten-James/unsplarty",
    desc: [
      "Unsplash image guesser game.",
      "Search and download images.",
      "Firebase realtime database.",
    ],
    stack: ["React", "TS", "Firebase"],
    image: "/unsplarty.png",
    imageClass: "lg:w-5/12 translate-y-[-20%]",
  },
};

export default function Page({
  params: { project },
}: {
  params: { project: ProjectsType };
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
      <p className="text-right text-3xl lg:text-[6rem] font-bold">
        {projectsInfo[project].name}
      </p>
      <p className="text-right text-2xl lg:text-[5rem] font-light">
        {projectsInfo[project].link}
      </p>
      <div className="flex flex-col gap-2 lg:gap-4 lg:pt-16">
        {projectsInfo[project].desc.map((desc, index) => (
          <p className="text-right text-lg lg:text-4xl font-light" key={index}>
            {desc}
          </p>
        ))}
      </div>
      <img
        src={projectsInfo[project].image}
        alt={project}
        className={`w-4/6 mx-auto ${projectsInfo[project].imageClass} lg:absolute lg:bottom-10 lg:left:10`}
      />
      <div className="absolute bottom-8 right-1/2 translate-x-[50%] lg:translate-x-0 lg:right-8 flex gap-1 lg:gap-4">
        {projectsInfo[project].stack.map((stack, index) => (
          <p
            className=" uppercase font-light text-lg lg:text-4xl bg-slate-200 text-black py-1 px-2 lg:py-8 lg:px-12 rounded-full shadow-md"
            key={index}
          >
            {stack}
          </p>
        ))}
      </div>
    </div>
  );
}
