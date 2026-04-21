import Image from "next/image";

import { PLATFORM_URL } from "@/lib/proofrr-content";
import { cn } from "@/lib/utils";
import { ProofrrLinkButton } from "@/components/proofrr-link-button";
import { Reveal } from "@/components/reveal";
import { WordReveal } from "@/components/word-reveal";

type CtaSectionProps = {
  className?: string;
};

export function CtaSection({ className }: CtaSectionProps) {
  return (
    <section id="pricing" className={cn("container-shell", className)}>
      <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(235,241,255,0.95)_34%,rgba(212,225,255,0.95)_100%)] px-5 pt-12 shadow-[0_26px_60px_rgba(53,99,240,0.12)] sm:px-8 md:px-10 md:pt-16">
        <div className="proofrr-grid-fade opacity-65" />
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="max-w-3xl">
            <WordReveal
              as="h2"
              className="font-heading text-4xl font-semibold tracking-tight text-[#101011] sm:text-5xl md:text-6xl"
              text="Take your creative workflow to the next level!"
            />
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#606266] sm:text-lg">
              Revolutionise your workflow with the most effective collaboration
              tool. Perfect for freelancers, agencies and marketing teams.
            </p>
          </div>

          <Reveal delay={0.08} className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <ProofrrLinkButton
              href={PLATFORM_URL}
              label="Get Started"
              target="_blank"
              rel="noreferrer"
              withArrow
              arrowClassName="h-7 w-7"
              className="proofrr-button-shadow h-13 rounded-full border-0 bg-[linear-gradient(180deg,#4d7fff_0%,#3563f0_100%)] px-6 text-[15px] font-semibold text-white"
            />
            <div className="rounded-full border border-[#1f1f20] bg-[#101011] px-5 py-3 text-sm font-medium text-white shadow-[0_16px_30px_rgba(16,16,17,0.18)]">
              Mobile app coming soon
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="relative z-10 mt-10">
          <div className="mx-auto max-w-[1080px] overflow-hidden rounded-t-[1.9rem] border border-white/70 bg-white/80 p-2 shadow-[0_26px_60px_rgba(16,16,17,0.12)] md:p-4">
            <Image
              src="/proofrr/dashboard.png"
              alt="Proofrr dashboard"
              width={1920}
              height={1080}
              loading="eager"
              className="h-auto w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
