import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Heading, Text } from "@/components/ui";
import type { Course } from "./types";

export function CourseCard({ number, title, description, href }: Course) {
  return (
    <Link
      href={href}
      className="gradient-hero flex h-113 flex-col rounded-xl border border-white/20 p-8 transition-colors hover:border-white/30"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-normal leading-label tracking-body text-white/40">
          {number}
        </span>
        <span className="group flex h-8 w-8 items-center justify-center rounded-full bg-surface transition-colors hover:bg-accent">
          <ArrowUpRight size={20} className="text-[#777777] transition-colors group-hover:text-white" />
        </span>
      </div>

      <Heading as="h3" size="h3" className="mt-8 max-w-68">
        {title}
      </Heading>

      <Text className="mt-auto pt-10 text-white/50">{description}</Text>
    </Link>
  );
}
