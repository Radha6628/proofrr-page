"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

type ProofrrLinkButtonProps = {
  href: string;
  label: string;
  className?: string;
  target?: string;
  rel?: string;
  withArrow?: boolean;
  arrowClassName?: string;
};

export function ProofrrLinkButton({
  href,
  label,
  className,
  target,
  rel,
  withArrow = false,
  arrowClassName,
}: ProofrrLinkButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={cn(
        buttonVariants({ size: "lg" }),
        "group/proofrr-button relative isolate overflow-hidden whitespace-nowrap transition-[filter,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:brightness-105",
        className
      )}
    >
      <span className="relative grid overflow-hidden leading-none">
        <span className="col-start-1 row-start-1 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] [transform:perspective(500px)_translateY(0)_rotateX(0deg)] group-hover/proofrr-button:opacity-0 group-hover/proofrr-button:[transform:perspective(500px)_translateY(-55%)_rotateX(60deg)]">
          {label}
        </span>
        <span
          aria-hidden="true"
          className="col-start-1 row-start-1 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] [transform:perspective(500px)_translateY(55%)_rotateX(-60deg)] group-hover/proofrr-button:opacity-100 group-hover/proofrr-button:[transform:perspective(500px)_translateY(0)_rotateX(0deg)]"
        >
          {label}
        </span>
      </span>

      {withArrow ? (
        <span
          className={cn(
            "relative ml-3 flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white text-[#3563f0]",
            arrowClassName
          )}
        >
          <ArrowRight className="absolute h-4 w-4 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/proofrr-button:translate-x-1.5 group-hover/proofrr-button:opacity-0" />
          <ArrowRight className="absolute h-4 w-4 -translate-x-1.5 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/proofrr-button:translate-x-0 group-hover/proofrr-button:opacity-100" />
        </span>
      ) : null}
    </Link>
  );
}
