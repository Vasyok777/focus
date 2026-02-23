import { cn } from "@/lib/utils";

type TextProps = React.HTMLAttributes<HTMLParagraphElement>;

export function Text({ className, children, ...props }: TextProps) {
  return (
    <p
      className={cn("leading-5 tracking-body text-white", className)}
      {...props}
    >
      {children}
    </p>
  );
}
