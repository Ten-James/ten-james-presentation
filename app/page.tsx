"use client";
import { QrCodePopOver } from "@/components/qr-code-popover";
import { NextPressentation } from "@/lib/presentation-parts";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div
        onClick={() => router.push(NextPressentation("/"))}
        className="w-full h-full grid place-items-center"
      >
        <motion.div
          className="w-1/3 origin-center"
          animate={{
            scale: [1, 1, 1.1, 1],
            rotate: [0, 0, 0, 360],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            times: [0, 0.4, 0.7, 1],
            repeat: Infinity,
          }}
        >
          <img src="/logo.svg" alt="logo" />
        </motion.div>
        <p className="opacity-15 absolute bottom-0 left-[50%] text-nowrap translate-x-[-50%] z-10 translate-y-[-2rem]">
          Click to continue
        </p>
      </div>
      <QrCodePopOver />
    </>
  );
}
