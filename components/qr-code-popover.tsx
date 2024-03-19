import { FC } from "react";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { QrCodeIcon } from "lucide-react";

export const QrCodePopOver: FC = () => (
  <div className="absolute bottom-10 right-10 hidden lg:block">
    <Popover>
      <PopoverTrigger>
        <div className="bg-slate-950 p-4 rounded-full">
          <QrCodeIcon />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-90" side="top" align="end">
        <Image alt="qr" src="/qr.png" width={500} />
      </PopoverContent>
    </Popover>
  </div>
);
