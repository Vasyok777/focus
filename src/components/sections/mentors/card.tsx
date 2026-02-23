import Image from "next/image";
import { Heading } from "@/components/ui";
import type { Mentor } from "./types";

export function MentorCard({ name, experience, photo }: Mentor) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative aspect-square w-full overflow-hidden rounded-full bg-surface">
        <Image
          src={photo}
          alt={name}
          width={180}
          height={180}
          className="object-cover"
        />
      </div>

      <Heading as="h4" size="h3" className="mt-4 text-center">
        {name}
      </Heading>
      <p className="mt-1 text-center text-sm font-normal leading-label tracking-body text-white/50">
        {experience} years of experience
      </p>
    </div>
  );
}
