export const PLATFORM_URL = "https://platform.proofrr.com/";
export const INTEGRATIONS_URL = "https://platform.proofrr.com/";
export const HERO_DEMO_VIDEO_URL =
  "https://res.cloudinary.com/djxnyqaya/video/upload/v1776800024/intovideo_c9efjh.mp4";

export const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/contact", label: "Contact" },
] as const;

export const FOOTER_QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#pricing", label: "Pricing" },
] as const;

export const FOOTER_ALL_PAGES = [
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact us" },
  { href: "/blog", label: "Blog" },
  { href: "/waitlist", label: "Waitlist" },
] as const;

export const SOCIAL_LINKS = [
  {
    href: "https://x.com/HelloProofrr",
    label: "X",
    icon: "/proofrr/social-x.svg",
  },
  {
    href: "https://www.linkedin.com/company/proofrr/",
    label: "LinkedIn",
    icon: "/proofrr/social-linkedin.svg",
  },
  {
    href: "https://www.instagram.com/helloproofrr/",
    label: "Instagram",
    icon: "/proofrr/social-instagram.svg",
  },
] as const;

export const HOME_FEATURES = [
  {
    title: "One workspace. Zero confusion.",
    description:
      "Design, feedback, and approvals live in one clean dashboard so nothing gets lost across tools or threads.",
    image: "/proofrr/dashboard.png",
    tint: "bg-white",
  },
  {
    title: "Comment where it matters.",
    description:
      "Leave precise, contextual feedback directly on designs, screens, or prototypes. No screenshots. No back and forth.",
    image: "/proofrr/hero-card-signoff.png",
    tint: "bg-[#fff4ce]",
  },
  {
    title: "Faster sign offs, fewer revisions.",
    description:
      "Real time collaboration keeps everyone aligned, helping teams move from review to approval without delays.",
    image: "/proofrr/feature-collab.png",
    tint: "bg-[#f1f2ff]",
  },
] as const;

export const STEP_ITEMS = [
  {
    number: "01",
    title: "Start your project",
    description:
      "Upload creatives, invite teammates or clients, and set review stages in seconds.",
  },
  {
    number: "02",
    title: "Review with ease",
    description:
      "Comment on specific areas, compare versions, and keep feedback structured.",
  },
  {
    number: "03",
    title: "Export & ship",
    description:
      "Finalize approvals, export assets, and move to delivery without confusion.",
  },
] as const;

export const INTEGRATIONS = [
  { src: "/proofrr/integration-openai.png", alt: "OpenAI" },
  { src: "/proofrr/integration-calendar.png", alt: "Google Calendar" },
  { src: "/proofrr/integration-razorpay.png", alt: "Razorpay" },
  { src: "/proofrr/integration-aws.png", alt: "AWS" },
  { src: "/proofrr/integration-meet.png", alt: "Google Meet" },
] as const;

export const MAJOR_BENEFITS = [
  {
    title: "AI-powered feedback",
    description:
      "Auto spell-checks, smart summaries, and cleaner feedback threads powered by AI.",
    icon: "/proofrr/icon-ai.svg",
  },
  {
    title: "Fast & secure performance",
    description:
      "Built for speed with enterprise-grade security and version control.",
    icon: "/proofrr/icon-security.svg",
  },
] as const;

export const MINOR_BENEFITS = [
  {
    title: "Effortless design experience",
    description:
      "Minimal UI that stays out of your way while you focus on the work.",
      type:"design"
  },
  {
    title: "Easy collaboration",
    description:
      "Collaborate with team members effortlessly on image creatives, videos and documents.",
      type:"Easy collaboration"
  },
] as const;

export const WORKFLOWS = [
  "Brand & Marketing Teams",
  "Content & Video Teams",
  "Design & Creative Agencies",
  "Production Teams",
  "Freelancers & Solopreneurs",
  "Designers & Video Editors",
] as const;

export const ABOUT_BULLETS = [
  "No scattered WhatsApp feedback.",
  "No buried email threads.",
  "No lost revisions.",
  "No confusing client approvals.",
] as const;

export const FAQ_ITEMS = [
  {
    question: "What is Proofrr?",
    answer:
      "Proofrr is an all-in-one creative collaboration platform that helps teams manage projects, review creatives, and exchange clear, contextual feedback without scattered emails, WhatsApp threads, or confusing approvals.",
  },
  {
    question:
      "How is Proofrr different from tools like Drive, WhatsApp, or generic proofing software?",
    answer:
      "Unlike generic tools, Proofrr is built specifically for creative workflows. It combines visual proofing, AI-powered feedback, version comparison, and client-friendly reviews in one lightweight interface, so feedback doesn't get lost or diluted.",
  },
  {
    question: "Do clients need to sign up or log in to give feedback?",
    answer:
      "No. Clients can review and comment instantly through a no-login system. This removes friction, speeds up approvals, and makes collaboration easier for non-technical stakeholders.",
  },
  {
    question: "Who is Proofrr best suited for?",
    answer:
      "Proofrr is ideal for freelancers, small creative agencies, and brands that manage frequent creative revisions, especially teams that want fast feedback, fewer tools, and predictable pricing without per-user costs.",
  },
  {
    question: "Is Proofrr free to use?",
    answer:
      "Yes. Proofrr has a free plan that lets you review creatives, share feedback, and collaborate with clients at no cost. Upgrade anytime to access advanced AI features and expanded controls as your workflow grows.",
  },
] as const;

export const PRIVACY_SECTIONS = [
  {
    title: "1. Overview",
    paragraphs: [
      "Proofrr is a creative collaboration platform designed to simplify feedback, approvals, and project workflows.",
      "By using Proofrr, you agree to the collection and use of information in accordance with this policy.",
    ],
  },
  {
    title: "2. Information We Collect",
    paragraphs: [
      "a. Information You Provide: Name, email address, account details, project data, briefs, creative assets, feedback, voice notes, and comments shared within projects.",
      "b. Automatically Collected Information: Device information, browser type, IP address, pages visited, features used, time spent, and log data for performance and debugging.",
      "c. Client & External Access Data: Since Proofrr allows no-login feedback sharing, we may collect identifiers, feedback activity, and related interactions.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    paragraphs: [
      "We use your data to operate and improve the platform, enable collaboration between teams and clients, and provide AI-powered features such as feedback summarization, spell-check, and content suggestions.",
      "We also use it to improve product performance, user experience, and support communication.",
    ],
  },
  {
    title: "4. AI & Data Processing",
    paragraphs: [
      "Proofrr uses AI to enhance workflows by analyzing text feedback, comments, and project metadata.",
      "The published policy states that workspace data is not used to train public AI models and remains private to your workspace.",
    ],
  },
  {
    title: "5. Data Sharing",
    paragraphs: [
      "Proofrr does not sell your data.",
      "Data may be shared only with trusted service providers or legal authorities when required by law, and third-party partners are required to maintain strict confidentiality.",
    ],
  },
  {
    title: "6. Data Security",
    paragraphs: [
      "Proofrr highlights encryption in transit and at rest, access controls, authentication systems, and regular monitoring and security updates as core safeguards.",
    ],
  },
  {
    title: "7. Data Retention",
    paragraphs: [
      "Data is retained while your account is active, as needed to provide services, or as required by legal obligations.",
      "Users can request deletion of their data at any time.",
    ],
  },
  {
    title: "8. Your Rights",
    paragraphs: [
      "You have the right to access your data, correct inaccurate information, request deletion, and withdraw consent for data usage.",
      "Support requests are directed to support@proofrr.com.",
    ],
  },
  {
    title: "9. Cookies & Tracking",
    paragraphs: [
      "Cookies and similar technologies are used to improve performance, understand user behavior, and enhance user experience.",
    ],
  },
  {
    title: "10. Third-Party Integrations",
    paragraphs: [
      "Proofrr may integrate with design platforms, communication tools, and file-sharing services. The policy notes that third-party privacy practices are separate from Proofrr.",
    ],
  },
  {
    title: "11. Children’s Privacy",
    paragraphs: [
      "Proofrr is not intended for users under the age of 13 and does not knowingly collect data from children.",
    ],
  },
  {
    title: "12. Updates to This Policy",
    paragraphs: [
      "The policy may be updated over time, with changes reflected using a revised effective date.",
    ],
  },
  {
    title: "13. Contact Us",
    paragraphs: [
      "If you have questions or concerns, contact support@proofrr.com.",
      "Company: Proofrr",
    ],
  },
] as const;

type BlogPostSeed = {
  date: string;
  title: string;
  excerpt: string;
};

const blogSeed: BlogPostSeed[] = [
  {
    date: "Jan 4, 2026",
    title: "How a Lack of Boundaries Kills Creative Proofing Quality",
    excerpt:
      "Why review chaos spreads when approval roles are fuzzy, and how stronger boundaries tighten feedback loops.",
  },
  {
    date: "Jan 3, 2026",
    title: "The Hidden Cost of Decision Fatigue in Creative Feedback",
    excerpt:
      "Too many reviewers and too many channels burn time fast. This piece looks at the real drag on approvals.",
  },
  {
    date: "Jan 2, 2026",
    title: "The Creative Project Manager's Checklist for Flawless Marketing Campaigns",
    excerpt:
      "A straightforward review checklist to keep marketing projects moving from brief to approval without drift.",
  },
  {
    date: "Jan 2, 2026",
    title: "4 Signs Your Team Has Outgrown Email for Creative Feedback",
    excerpt:
      "A quick diagnostic for spotting when inbox-based approvals are slowing your team more than helping.",
  },
  {
    date: "Oct 13, 2025",
    title: "Beyond PDFs: How to Proof and Approve Interactive Web Pages and Videos",
    excerpt:
      "Creative proofing is no longer static. Learn what changes when the work is interactive, motion-heavy, and live.",
  },
  {
    date: "Oct 13, 2025",
    title: "The Cost of Clutter: How Poor Version Control is Killing Your Margins",
    excerpt:
      "Version sprawl quietly creates rework, delay, and wasted budget. This article focuses on the operational cost.",
  },
  {
    date: "Dec 31, 2025",
    title: "The Ultimate Guide to Giving Actionable Creative Feedback",
    excerpt:
      "A practical guide to feedback that designers and marketers can actually implement without another clarification thread.",
  },
  {
    date: "Dec 30, 2025",
    title:
      "Proofing vs. Editing: Understanding the Critical Differences in Your Creative Workflow",
    excerpt:
      "Two similar-sounding steps create very different outcomes. This article clarifies where each belongs.",
  },
  {
    date: "Dec 30, 2025",
    title:
      "Is Your Brand Compliant? Why Creative Proofing is Your First Line of Defense",
    excerpt:
      "Brand risk often shows up in review. This piece explains how proofing helps catch compliance issues early.",
  },
  {
    date: "Dec 29, 2025",
    title: "Stop the Email Chaos: The Modern Solution for Marketing Feedback",
    excerpt:
      "What modern feedback workflows look like when email stops being the default operating system.",
  },
  {
    date: "Dec 29, 2025",
    title: "5 Simple Steps to Streamline Your Document Proofing Workflow",
    excerpt:
      "Five concise process improvements that make approvals faster without introducing extra project overhead.",
  },
  {
    date: "Dec 29, 2025",
    title: "How to Halve Your Creative Approval Time with Online Proofing",
    excerpt:
      "A tighter proofing loop, fewer revision passes, and better visibility can cut turnaround time dramatically.",
  },
];

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const BLOG_POSTS = blogSeed.map((post) => ({
  ...post,
  slug: slugify(post.title),
  content: [
    `${post.title} reflects the same theme that runs through Proofrr's product copy: creative work moves faster when feedback, versions, and approvals stay in one clear system.`,
    "The public site consistently positions scattered review channels as the core problem. Email threads, chat apps, and disconnected file links slow decisions, blur ownership, and create avoidable revision loops.",
    "A stronger workflow replaces that fragmentation with clear context, review stages, and single-source visibility for teams and clients.",
  ],
  takeaways: [
    "Reduce tool-switching during review.",
    "Keep comments tied directly to the work.",
    "Shorten approval paths with clearer ownership.",
  ],
}));
