import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import { HOME_FEATURES, PLATFORM_URL } from "@/lib/proofrr-content";
import { cn } from "@/lib/utils";
import { CtaSection } from "@/components/cta-section";
import { ProofrrLinkButton } from "@/components/proofrr-link-button";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Waitlist",
};

export default function WaitlistPage() {
  return (
    <div className="pb-24">
      <section className="container-shell pt-14 md:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#3563f0]">
              Join the beta
            </p>
            <h1 className="mt-4 font-heading text-5xl font-semibold tracking-[-0.05em] text-[#101011] sm:text-6xl md:text-7xl">
              Get early access to Proofrr.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#606266]">
              Be first in line for the AI-powered creative workflow that brings
              review, feedback, and approvals into one streamlined space.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Centralized review and approvals",
                "Contextual comments directly on the work",
                "Faster sign-offs with fewer revisions",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-base font-medium text-[#101011]">
                  <CheckCircle2 className="h-5 w-5 text-[#3563f0]" />
                  {item}
                </div>
              ))}
            </div>

            <ProofrrLinkButton
              href={PLATFORM_URL}
              label="Sign Up for the Beta"
              target="_blank"
              rel="noreferrer"
              withArrow
              arrowClassName="h-7 w-7"
              className="proofrr-button-shadow mt-9 inline-flex h-13 rounded-full border-0 bg-[linear-gradient(180deg,#4d7fff_0%,#3563f0_100%)] px-6 text-[15px] font-semibold text-white"
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-[2rem] bg-[#f0f2f6] p-4 shadow-[0_20px_50px_rgba(16,16,17,0.07)]">
              <Image
                src="/proofrr/dashboard.png"
                alt="Proofrr dashboard"
                width={1920}
                height={1080}
                className="h-auto w-full rounded-[1.6rem]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-shell pt-16 md:pt-20">
        <div className="grid gap-5 md:grid-cols-3">
          {HOME_FEATURES.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.05}>
              <div className="rounded-[1.8rem] bg-white p-4 shadow-[0_20px_50px_rgba(16,16,17,0.07)]">
                <div className={cn("overflow-hidden rounded-[1.45rem]", feature.tint)}>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={1476}
                    height={1476}
                    className="h-auto w-full"
                  />
                </div>
                <h2 className="mt-5 font-heading text-2xl font-semibold text-[#101011]">
                  {feature.title}
                </h2>
                <p className="mt-2 text-base leading-7 text-[#606266]">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection className="pt-20 md:pt-24" />
    </div>
  );
}
