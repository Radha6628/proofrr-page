import type { Metadata } from "next";
import Image from "next/image";

import { ABOUT_BULLETS, PLATFORM_URL } from "@/lib/proofrr-content";
import { CtaSection } from "@/components/cta-section";
import { ProofrrLinkButton } from "@/components/proofrr-link-button";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="pb-24">
      <section className="container-shell pt-14 md:pt-20">
        <div className="rounded-[2rem] bg-white px-5 py-10 sm:px-8 md:px-10 md:py-14">
          <Reveal className="mx-auto max-w-4xl text-center">
            <h1 className="font-heading text-5xl font-semibold tracking-[-0.05em] text-[#101011] sm:text-6xl md:text-7xl">
              Built for How Creative Work Actually Happens
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#606266]">
              Proofrr is a creative collaboration and feedback platform designed
              for freelancers, creative teams, agencies, and growing brands.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-10">
            <div className="overflow-hidden rounded-[2rem] bg-[#f0f2f6] p-3 shadow-[0_24px_50px_rgba(16,16,17,0.08)]">
              <Image
                src="/proofrr/about-hero.png"
                alt="Proofrr workspace preview"
                width={2160}
                height={876}
                className="h-auto w-full rounded-[1.6rem]"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-shell pt-16 md:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <h2 className="font-heading text-4xl font-semibold tracking-tight text-[#101011] sm:text-5xl">
              We didn’t build another generic project management tool.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#606266]">
              We built a system where creative work moves forward without chaos.
            </p>

            <div className="mt-8 space-y-4">
              {ABOUT_BULLETS.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#eef2fb] bg-[#f9fbff] px-4 py-4 text-base font-medium text-[#101011]"
                >
                  {item}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[2rem] bg-[#f0f2f6] px-6 py-7 shadow-[0_18px_40px_rgba(16,16,17,0.06)]">
              <p className="text-lg leading-8 text-[#2b2b2c]">
                Proofrr brings project management, content review, contextual
                feedback, version tracking, and AI-assisted proofing into one
                streamlined workspace.
              </p>
              <h3 className="mt-8 font-heading text-3xl font-semibold text-[#101011]">
                The Problem We’re Fixing
              </h3>
              <p className="mt-4 text-lg leading-8 text-[#606266]">
                Teams use one tool for tasks. Another for file sharing. Another
                for feedback. Clients reply on email. Stakeholders comment on
                WhatsApp.
              </p>
              <p className="mt-4 text-lg leading-8 text-[#606266]">
                Proofrr consolidates that entire approval path into one place so
                creative work can move without scattered context.
              </p>

              <ProofrrLinkButton
                href={PLATFORM_URL}
                label="Get Started"
                target="_blank"
                rel="noreferrer"
                withArrow
                arrowClassName="h-7 w-7"
                className="proofrr-button-shadow mt-8 inline-flex h-13 rounded-full border-0 bg-[linear-gradient(180deg,#4d7fff_0%,#3563f0_100%)] px-6 text-[15px] font-semibold text-white"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection className="pt-20 md:pt-24" />
    </div>
  );
}
