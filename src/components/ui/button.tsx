import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-opacity hover:opacity-80 disabled:opacity-40",
        variant === "primary" && "bg-accent text-dark",
        variant === "ghost"   && "border border-white/20 text-white hover:bg-white/5",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
