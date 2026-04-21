import Image from "next/image";
import Link from "next/link";

import {
  FOOTER_ALL_PAGES,
  FOOTER_QUICK_LINKS,
  SOCIAL_LINKS,
} from "@/lib/proofrr-content";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-[#101011] text-white">
      <div className="container-shell">
        <div className="rounded-t-[2rem] bg-[#101011] px-6 py-14 md:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.85fr_0.85fr]">
            <div className="space-y-6">
              <div className="w-[156px] sm:w-[186px]">
                <Image
                  src="/proofrr/logo-footer.svg"
                  alt="Proofrr"
                  width={186}
                  height={60}
                  className="w-full"
                  style={{ height: "auto" }}
                />
              </div>
              <div>
                <p className="text-sm font-medium text-[#a7a7a7]">Follow us on:</p>
                <div className="mt-4 flex items-center gap-3">
                  {SOCIAL_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={link.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2b2b2c] bg-[#2b2b2c] transition-transform hover:-translate-y-0.5"
                    >
                      <Image src={link.icon} alt="" width={18} height={18} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold">Quick Links</h2>
              <div className="mt-5 space-y-3 text-[#a7a7a7]">
                {FOOTER_QUICK_LINKS.map((item) => (
                  <Link key={item.href} href={item.href} className="block hover:text-white">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold">All Pages</h2>
              <div className="mt-5 space-y-3 text-[#a7a7a7]">
                {FOOTER_ALL_PAGES.map((item) => (
                  <Link key={item.href} href={item.href} className="block hover:text-white">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-[#2b2b2c] pt-6 text-center text-sm text-[#a7a7a7]">
            Designed with ♥️ by{" "}
            <Link href="https://www.webestica.com/" target="_blank" rel="noreferrer" className="text-white hover:text-[#70a5ff]">
              Proofrr
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
