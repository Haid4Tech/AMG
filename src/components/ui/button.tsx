import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center gap-2 2xl:gap-3 3xl:gap-4 whitespace-nowrap rounded-full text-sm 2xl:text-base 3xl:text-lg font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 2xl:[&_svg:not([class*='size-'])]:size-5 3xl:[&_svg:not([class*='size-'])]:size-6 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-9 2xl:h-11 3xl:h-12 px-4 2xl:px-6 3xl:px-8 py-2 2xl:py-3 3xl:py-4 has-[>svg]:px-3 2xl:has-[>svg]:px-4 3xl:has-[>svg]:px-6",
        sm: "h-8 2xl:h-10 3xl:h-11 rounded-full gap-1.5 2xl:gap-2 3xl:gap-3 px-3 2xl:px-4 3xl:px-6 has-[>svg]:px-2.5 2xl:has-[>svg]:px-3 3xl:has-[>svg]:px-4",
        lg: "h-10 2xl:h-12 3xl:h-14 rounded-full px-6 2xl:px-8 3xl:px-10 has-[>svg]:px-4 2xl:has-[>svg]:px-6 3xl:has-[>svg]:px-8",
        icon: "size-9 2xl:size-11 3xl:size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
