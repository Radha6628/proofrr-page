"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Sparkles } from "lucide-react";

import { NAV_LINKS, PLATFORM_URL } from "@/lib/proofrr-content";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ProofrrLinkButton } from "@/components/proofrr-link-button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 pt-4 md:pt-6">
      <div className="container-shell">
        <div className="proofrr-nav-shadow flex items-center justify-between rounded-[2rem] border border-[#cfe0ff] bg-[rgba(240,242,246,0.84)] px-3 py-3 backdrop-blur-xl md:px-6">
          <Link
            href="/"
            className="proofrr-button-shadow flex h-12 items-center rounded-full bg-[linear-gradient(180deg,#3e75ff_0%,#3563f0_100%)] px-4"
          >
            <Image
              src="/proofrr/logo-nav.svg"
              alt="Proofrr"
              width={84}
              height={26}
              style={{ width: 84, height: "auto" }}
              priority
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[15px] font-medium text-[#606266] hover:text-[#101011]",
                  isActive(pathname, item.href) && "text-[#101011]"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ProofrrLinkButton
              href={PLATFORM_URL}
              label="Sign in"
              target="_blank"
              rel="noreferrer"
              className="proofrr-button-shadow h-12 rounded-full border-0 bg-[linear-gradient(180deg,#4d7fff_0%,#3563f0_100%)] px-8 text-[15px] font-semibold text-white"
            />
          </div>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger
                aria-label="Open menu"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d7e3ff] bg-white/90 text-[#101011] shadow-[0_10px_24px_rgba(16,16,17,0.08)]"
              >
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[86vw] border-l border-[#d7e3ff] bg-white p-0 text-[#101011]"
              >
                <SheetHeader className="border-b border-[#eef2fb] px-5 py-6">
                  <Image
                    src="/proofrr/logo-nav.svg"
                    alt="Proofrr"
                    width={92}
                    height={28}
                    style={{ width: 92, height: "auto" }}
                  />
                  <SheetTitle className="mt-4 text-xl font-semibold">
                    Navigate Proofrr
                  </SheetTitle>
                  <SheetDescription className="text-[#606266]">
                    Explore the public pages or head straight into the beta.
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-2 px-5 py-5">
                  {NAV_LINKS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "rounded-2xl border px-4 py-3 text-base font-medium transition-colors",
                        isActive(pathname, item.href)
                          ? "border-[#cfe0ff] bg-[#f0f5ff] text-[#101011]"
                          : "border-transparent bg-[#f7f9fd] text-[#606266] hover:border-[#dce7ff] hover:text-[#101011]"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="px-5 pb-6">
                  <Link
                    href={PLATFORM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "proofrr-button-shadow flex h-12 w-full items-center justify-center gap-2 rounded-full border-0 bg-[linear-gradient(180deg,#4d7fff_0%,#3563f0_100%)] text-[15px] font-semibold text-white hover:brightness-105"
                    )}
                  >
                    <Sparkles className="h-4 w-4" />
                    Sign in
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
