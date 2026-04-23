import Image from "next/image";
import Link from "next/link";
import { Check, MessageSquare } from "lucide-react";

import {
  HERO_DEMO_VIDEO_URL,
  HOME_FEATURES,
  INTEGRATIONS,
  INTEGRATIONS_URL,
  MAJOR_BENEFITS,
  MINOR_BENEFITS,
  PLATFORM_URL,
  STEP_ITEMS,
  WORKFLOWS,
} from "@/lib/proofrr-content";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CtaSection } from "@/components/cta-section";
import { ProofrrDemoVideo } from "@/components/proofrr-demo-video";
import { ProofrrLinkButton } from "@/components/proofrr-link-button";
import { Reveal } from "@/components/reveal";
import { WordReveal } from "@/components/word-reveal";

const INTEGRATION_CONNECTORS = [
  {
    path: "M 50 20 C 50 112, 188 146, 250 236",
    delay: "0s",
  },
  {
    path: "M 150 20 C 150 126, 224 164, 250 236",
    delay: "0.2s",
  },
  {
    path: "M 250 20 L 250 236",
    delay: "0.4s",
  },
  {
    path: "M 350 20 C 350 126, 276 164, 250 236",
    delay: "0.6s",
  },
  {
    path: "M 450 20 C 450 112, 312 146, 250 236",
    delay: "0.8s",
  },
] as const;

const INTEGRATION_HUB_LOGO_SRC =
  "https://res.cloudinary.com/djxnyqaya/image/upload/v1766374668/Proofrr_Square_Logo_1_xvxkqb.svg";

export function LandingPage() {
  return (
    <div className="pb-24">
      <section className="container-shell relative pt-14 md:pt-20">
        <div className="relative overflow-hidden rounded-[2rem] bg-white px-4 pb-14 pt-6 sm:px-8 md:px-10 md:pb-20 md:pt-10">
          <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(112,165,255,0.18),transparent_70%)]" />
          <div className="proofrr-hero-plane absolute inset-x-6 bottom-0 h-60 origin-top [transform:perspective(100px)_rotateX(44deg)] opacity-50 sm:inset-x-10" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(to_top,white,transparent)]" />

          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
            <Reveal
              delay={0.2}
              className="flex items-center gap-3 rounded-full border border-[#f0f2f6] bg-white/90 px-3 py-1.5 shadow-[0_10px_24px_rgba(16,16,17,0.05)]"
            >
              <Badge className="rounded-full bg-[#101011] px-3 py-1 text-white hover:bg-[#101011]">
                New
              </Badge>
              <span className="text-sm font-medium text-[#2b2b2c]">
                Revolutionize your project workflow
              </span>
            </Reveal>

            <h1 className="mt-8 max-w-5xl bg-[linear-gradient(0deg,#427eff_0%,#000000_143%)] bg-clip-text font-heading text-[3.1rem] leading-[0.92] font-bold tracking-[-0.05em] text-transparent sm:text-[4.7rem] md:text-[6.75rem]">
              <span className="hidden md:inline">
                Go from draft to approved - 3x faster
              </span>
              <span className="md:hidden">
                Go from draft to
                <br />
                approved - 3x faster
              </span>
            </h1>

            <Reveal delay={1} duration={1} className="mt-8 max-w-3xl">
              <p className="text-lg leading-8 text-[#606266] sm:text-xl">
                Manage projects, collect feedback, and get client approvals —
                all in one simple, AI-powered workspace.
              </p>
            </Reveal>

            <Reveal delay={1.2} duration={1} className="mt-9">
              <ProofrrLinkButton
                href={PLATFORM_URL}
                label="Sign Up for the Beta"
                target="_blank"
                rel="noreferrer"
                withArrow
                className="proofrr-button-shadow h-14 rounded-full border-0 bg-[linear-gradient(180deg,#4d7fff_0%,#3563f0_100%)] px-7 text-[16px] font-semibold text-white"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-shell pt-4 md:pt-6">
        <Reveal className="overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[0_24px_60px_rgba(16,16,17,0.12)]">
          <ProofrrDemoVideo
            src={HERO_DEMO_VIDEO_URL}
            poster="/proofrr/dashboard.png"
          />
        </Reveal>
      </section>

      <section className="container-shell pt-6 md:pt-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#3563f0]">
              The ultimate platform for marketing teams
            </p>
          </Reveal>
          <WordReveal
            as="h2"
            delay={0.08}
            containerClassName="mt-4"
            className="font-heading text-4xl font-semibold tracking-tight text-[#101011] sm:text-5xl"
            text="One place for your brand’s creatives — upload, share, get approvals. Zero chaos."
          />
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {HOME_FEATURES.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.07}>
              <Card
                className="proofrr-card-shadow rounded-[2rem] border-0 bg-white pb-5"
              >
                <div className={cn("mx-3 mt-3 overflow-hidden rounded-[1.65rem]", feature.tint)}>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={1920}
                    height={1080}
                    loading="eager"
                    className="h-auto w-full object-cover object-top"
                  />
                </div>
                <CardHeader className="px-6 pt-1">
                  <CardTitle className="font-heading text-[2rem] font-semibold leading-tight">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6">
                  <CardDescription className="text-base leading-8 text-[#606266]">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-shell pt-20 md:pt-28">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-8">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#3563f0]">
                Simplify your workflow
              </p>
            </Reveal>
            {STEP_ITEMS.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.06} className="flex gap-5">
                <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f0f2f6] text-lg font-semibold text-[#606266]">
                  {item.number}
                </div>
                <div>
                  <h3 className="font-heading text-3xl font-semibold text-[#101011]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-lg leading-8 text-[#606266]">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <div className="relative overflow-hidden rounded-[2rem] bg-[#f0f2f6] p-5 sm:p-8">
              <div className="proofrr-grid absolute inset-0 opacity-40" />
              <div className="relative z-10 overflow-hidden rounded-[2rem] bg-white/90 shadow-[0_24px_50px_rgba(16,16,17,0.08)]">
                <Image
                  src="/proofrr/candidate-trgl.png"
                  alt="Upload any file"
                  width={966}
                  height={894}
                  loading="eager"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="integrations" className="container-shell pt-20 md:pt-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-[#f0f2f6] p-6 sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center_bottom,rgba(53,99,240,0.08),transparent_52%)]" />
              <div className="relative mx-auto flex min-h-[360px] max-w-[520px] items-end justify-center pb-8 pt-6">
                <svg
                  viewBox="0 0 500 260"
                  preserveAspectRatio="none"
                  className="pointer-events-none absolute inset-x-0 top-12 h-[230px] w-full"
                  aria-hidden="true"
                >
                  {INTEGRATION_CONNECTORS.map((connector) => (
                    <g key={connector.path}>
                      <path
                        d={connector.path}
                        pathLength={100}
                        fill="none"
                        stroke="rgba(112, 165, 255, 0.5)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                      />
                      <path
                        d={connector.path}
                        pathLength={100}
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.9)"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                        className="proofrr-connector-flow"
                        style={{ animationDelay: connector.delay }}
                      />
                    </g>
                  ))}
                </svg>
                <div className="absolute inset-x-0 top-0 grid grid-cols-5 gap-3 px-2 sm:px-4">
                  {INTEGRATIONS.map((integration) => (
                    <div
                      key={integration.alt}
                      className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-[0_12px_24px_rgba(16,16,17,0.08)] sm:h-18 sm:w-18"
                    >
                      <Image
                        src={integration.src}
                        alt={integration.alt}
                        width={44}
                        height={44}
                        loading="eager"
                        className="h-10 w-10 rounded-xl object-cover"
                      />
                    </div>
                  ))}
                </div>
                <Image
                  src={INTEGRATION_HUB_LOGO_SRC}
                  alt="Proofrr logo"
                  width={96}
                  height={96}
                  loading="eager"
                  unoptimized
                  className="proofrr-button-shadow h-24 w-24 rounded-[1.65rem]"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#3563f0]">
              One platform, unlimited integrations
            </p>
            <WordReveal
              as="h2"
              delay={0.08}
              containerClassName="mt-4"
              className="font-heading text-4xl font-semibold tracking-tight text-[#101011] sm:text-5xl"
              text="Connect the tools your team already relies on."
            />
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#606266]">
              Proofrr sits in the middle of your review process so files,
              calendars, calls, AI tools, and delivery workflows stay connected.
            </p>
            <Link
              href={INTEGRATIONS_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#101011] px-6 text-[15px] font-semibold text-white shadow-[0_18px_28px_rgba(16,16,17,0.2)] transition-transform hover:-translate-y-0.5"
            >
              View all integrations
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="container-shell pt-20 md:pt-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#3563f0]">
            Power up your creative workflow with next-gen features
          </p>
        </Reveal>
        <div className="proofrr-dark-glow mt-8 rounded-[2.2rem] px-6 py-8 sm:px-8 md:px-10 md:py-10">
          <div className="grid gap-6 lg:grid-cols-2">
            {MAJOR_BENEFITS.map((benefit, index) => (
              <Reveal key={benefit.title} delay={index * 0.06}>
                <div className="overflow-hidden rounded-[2rem] border border-[#2b2b2c] bg-[#2b2b2c]">
                  <div className="relative flex min-h-[300px] items-center justify-center bg-[#101011] px-6">
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-[radial-gradient(circle_at_center_bottom,rgba(255,255,255,0.09),transparent_60%)]" />
                  <Image
                    src={benefit.icon}
                    alt=""
                    width={165}
                    height={165}
                    loading="eager"
                    className="h-auto w-[120px] sm:w-[145px]"
                  />
                  </div>
                  <div className="px-7 py-6">
                    <h3 className="font-heading text-3xl font-semibold text-white">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 text-base leading-8 text-[#a7a7a7]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {MINOR_BENEFITS.map((item, index) => (
              <Reveal key={item.title} delay={0.12 + index * 0.05}>
                <div className="rounded-[1.6rem] border border-[#2b2b2c] bg-[#2b2b2c] px-5 py-5">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-heading text-2xl font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-[#a7a7a7]">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell pt-20 md:pt-28">
        <div className="relative overflow-hidden rounded-[2rem] bg-white px-5 py-10 sm:px-8 md:px-10">
          <div className="proofrr-grid-fade opacity-90" />
          <div className="relative z-10">
            <Reveal className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#3563f0]">
                The perfect review solution for every workflow
              </p>
            </Reveal>
            <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_0.92fr]">
              <Reveal>
                <div className="overflow-hidden rounded-[2rem] bg-[#f0f2f6] p-4 shadow-[0_20px_50px_rgba(16,16,17,0.08)]">
                  <Image
                    src="/proofrr/candidate-qed.png"
                    alt="Comment workflow"
                    width={1000}
                    height={1000}
                    loading="eager"
                    className="h-auto w-full rounded-[1.5rem]"
                  />
                </div>
              </Reveal>
              <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {WORKFLOWS.map((workflow, index) => (
                  <Reveal
                    key={workflow}
                    delay={index * 0.04}
                    className="flex items-center gap-3 text-lg font-medium text-[#2b2b2c]"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#edf2ff] text-[#3563f0]">
                      <MessageSquare className="h-4 w-4" />
                    </span>
                    <span>{workflow}</span>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection className="pt-20 md:pt-28" />
    </div>
  );
}
