"use client";
import { NextPressentation } from "@/lib/presentation-parts";
import { BedIcon, PuzzleIcon, SmileIcon } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

const abilities = [
  {
    name: "Laziness",
    icon: <BedIcon size={120} />,
  },
  {
    name: "confident",
    icon: <SmileIcon size={120} />,
  },
  {
    name: "creativity",
    icon: <PuzzleIcon size={120} />,
  },
];

export default function Page() {
  const [state, setState] = useState(0);
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div
      onClick={() => {
        if (state < abilities.length) {
          setState((prev) => prev + 1);
        } else {
          router.push(NextPressentation(pathname));
        }
      }}
      className="w-full h-full flex flex-col items-center justify-between md:gap-10 p-4 lg:p-0"
    >
      <p className="uppercase text-center text-[4rem]">What got me there?</p>
      <div className="w-7/12 grid lg:grid-cols-3 place-items-center">
        {abilities
          .filter((_, index) => index < state)
          .map((ability) => (
            <div className="flex flex-col items-center gap-2">
              {ability.icon}
              <p className="uppercase text-center text-[2rem]">
                {ability.name}
              </p>
            </div>
          ))}
      </div>
      {state === 0 ? <p>Click to see my abilities</p> : <div />}
    </div>
  );
}
