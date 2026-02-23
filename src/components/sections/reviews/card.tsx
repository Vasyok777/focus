import Image from "next/image";
import { Star } from "lucide-react";
import { Text } from "@/components/ui";
import type { Review } from "./types";

export function ReviewCard({ name, role, rating, text, photo }: Review) {
  return (
    <div className="flex flex-col gap-5 rounded-xl border border-white/20 p-5">
      <div className="flex justify-between">
        <div className="flex gap-3">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-surface">
            <Image src={photo} alt={name} fill className="object-cover" />
          </div>
          <div>
            <p className="text-[20px] font-medium leading-[28px] text-white">
              {name}
            </p>
            <p className="text-[14px] font-normal leading-[18px] tracking-[-0.28px] text-white/50">
              {role}
            </p>
          </div>
        </div>

        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < rating
                  ? "fill-accent text-accent"
                  : "fill-[#414141] text-[#414141]"
              }
            />
          ))}
        </div>
      </div>

      <Text>{text}</Text>
    </div>
  );
}
