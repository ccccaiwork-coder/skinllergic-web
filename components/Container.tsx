import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const Component = Tag as React.ElementType;
  return (
    <Component className={cn("mx-auto w-full max-w-6xl px-6 md:px-8", className)}>
      {children}
    </Component>
  );
}
