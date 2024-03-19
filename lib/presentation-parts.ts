"use client";
import { usePathname, useRouter } from "next/navigation";

export type ProjectsType = "Astronomic" | "MatApp" | "Czechtina" | "Unsplarty";

export type JobsType = "TietoEvry" | "LudekCoUk" | "Brainsov" | "Amenit";

const getProjectsLink = (project: ProjectsType) => `/projects/${project}`;
const getJobsLink = (job: JobsType) => `/jobs/${job}`;

const Presentations = [
  "/",
  getProjectsLink("Astronomic"),
  getJobsLink("LudekCoUk"),
  "/why-react",
  getJobsLink("Brainsov"),
  getProjectsLink("Unsplarty"),
  getProjectsLink("MatApp"),
  "/graduation",
  getJobsLink("Amenit"),
  getJobsLink("TietoEvry"),
  "/why-school",
  getProjectsLink("Czechtina"),
  "/what-have-i-learned",
  "/contact",
  "/thanks",
];

export const NextPressentation = (current: string) => {
  const currentIndex = Presentations.indexOf(current);
  if (currentIndex === -1 || currentIndex === Presentations.length - 1) {
    return Presentations[0];
  }
  return Presentations[currentIndex + 1];
};
