import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva("font-medium text-white", {
  variants: {
    size: {
      display: "text-[48px] leading-[54px] tracking-[-0.04em]",
      h2: "text-[48px] leading-[54px] tracking-[-0.04em]",
      h3: "text-[28px] leading-[32px]",
    },
  },
  defaultVariants: { size: "h2" },
});

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants> & {
    as?: "h1" | "h2" | "h3" | "h4";
  };

export function Heading({
  as: Tag = "h2",
  size,
  className,
  children,
  ...props
}: HeadingProps) {
  return (
    <Tag className={cn(headingVariants({ size }), className)} {...props}>
      {children}
    </Tag>
  );
}
