/**
 * ──────────────────────────────────────────────────────────────────────────
 *  CONTENT — single source of truth for everything on the page.
 *  Edit text, links, and placeholders here. Search for "ADD" / "PLACEHOLDER"
 *  to find the things you need to fill in.
 * ──────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Sushma Chiluvuri",
  firstName: "Sushma",
  title: "Senior QA Automation Engineer",
  valueProp:
    "Building reliable, automated test systems that catch failures before users do.",
  location: "Frisco, TX",
  email: "sushmachiluvuri.ch@gmail.com",

  /** ▶ Play Intro modal video. Embeddable URL.
   *  Loom share link https://www.loom.com/share/<ID> becomes /embed/<ID>. */
  videoUrl: "https://www.loom.com/embed/45ae8d295da9477f8fcf79343ab38359",

  /** Download CV button target — file lives at /public/assets/resume_ATS.pdf */
  cvUrl: "/assets/resume_ATS.pdf",

  /** Headshot — drop your photo at /public/assets/headshot.jpg */
  headshot: "/assets/headshot.jpg",

  socials: {
    linkedin: "https://www.linkedin.com/in/sushma-chiluvuri-m-s-b97408121/",
    github: "https://github.com/5ushma",
  },

  /** Formspree endpoint for the contact form. Create a form at formspree.io. */
  formspreeEndpoint: "https://formspree.io/f/FORMSPREE_ID", // <-- PLACEHOLDER
} as const;

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "What I Do", href: "#what-i-do" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const about = {
  paragraphs: [
    "I'm a Senior QA Automation Engineer with 6+ years of experience across web, API, and mobile testing. I design and build automated test systems that make releases predictable and surface failures early, before they reach users.",
    "I earned my M.S. in Computer Science from Southern Methodist University (SMU) in 2024, and I'm based in Frisco, TX. My toolkit spans Playwright, TypeScript, Selenium, Cypress, Appium, Postman, and JMeter, integrated into CI/CD pipelines with Jenkins, GitHub Actions, and GitLab CI.",
    "I work close to the team, grounded in Agile and Scrum, and focused on building reliable, maintainable frameworks the whole team can trust.",
  ],
  yearsLabel: "Years in QA",
  years: 6, // counter target — "6+ Years"
} as const;

/** EXPERIENCE — real roles, reverse chronological. */
export type ExperienceItem = {
  company: string;
  title: string;
  dates: string;
  location?: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Axzora Resourcing LLC",
    title: "Senior QA Automation Engineer",
    dates: "Jun 2025 to Present",
    location: "USA",
    bullets: [
      "Built scalable end to end automation for web and mobile releases, covering regression, exploratory, and UAT testing to support clean production deployments.",
      "Created a visual regression framework in Playwright and TypeScript using pixel level threshold comparisons and masking for non deterministic, AI driven UI, cutting regression cycle time by 40 percent.",
      "Defined and enforced a full test strategy across release phases, validating asynchronous system outputs and AI driven features.",
      "Owned defect management through release sanity checks and pre and post deployment validation, with clear root cause analysis tracked in JIRA.",
    ],
  },
  {
    company: "Community Dreams Foundation",
    title: "QA Automation Engineer",
    dates: "Sep 2024 to Jun 2025",
    location: "USA",
    bullets: [
      "Built automated UI, API, and mobile test suites with Selenium, Cypress, and Appium, reducing manual testing effort by 30 percent and improving release velocity across sprints.",
      "Designed REST API validation workflows in Postman integrated into CI/CD through GitHub Actions, reaching full automated regression coverage across service endpoints.",
      "Ran performance, load, and scalability testing with JMeter, finding critical bottlenecks and improving response time stability by 25 percent on high traffic modules.",
      "Managed SDLC and STLC test planning and JIRA based defect tracking across all sprint deliverables.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    title: "QA Engineer",
    dates: "May 2021 to Jun 2022",
    location: "India",
    bullets: [
      "Built Selenium and TestNG automation frameworks using the Page Object Model, raising defect detection by 35 percent and expanding coverage across enterprise web platforms.",
      "Designed and ran functional, regression, risk based, and cross browser testing while validating REST APIs through Postman and SQL queries, cutting integration defects by 20 percent.",
      "Streamlined STLC documentation and defect management, reducing maintenance overhead by 25 percent.",
    ],
  },
  {
    company: "Accenture",
    title: "QA Analyst",
    dates: "Dec 2017 to May 2021",
    location: "India",
    bullets: [
      "Delivered QA and automation testing across web and mobile applications for global enterprise clients, reducing production defects by 10 percent through risk based test strategies.",
      "Validated backend data integrity using SQL and ran performance and scalability testing with JMeter to keep systems reliable under high traffic.",
      "Worked with global Agile and Scrum teams to improve release quality and sprint velocity through clear stakeholder communication.",
    ],
  },
];

/** WHAT I DO — 6 hover cards. icon is a key resolved in the component. */
export type Capability = {
  icon:
    | "framework"
    | "api"
    | "mobile"
    | "performance"
    | "cicd"
    | "regression";
  title: string;
  description: string;
};

export const capabilities: Capability[] = [
  {
    icon: "framework",
    title: "Test Automation Frameworks",
    description:
      "Scalable, maintainable frameworks built on the Page Object Model, designed to be reused, extended, and trusted across teams.",
  },
  {
    icon: "api",
    title: "API Testing",
    description:
      "Contract, functional, and regression coverage for REST APIs with Postman and code driven suites integrated into the pipeline.",
  },
  {
    icon: "mobile",
    title: "Mobile Testing (Appium)",
    description:
      "Automated Android flows with Appium, including reliability and stress testing to surface flaky, failure prone paths.",
  },
  {
    icon: "performance",
    title: "Performance Testing (JMeter)",
    description:
      "Load and stress scenarios with JMeter to validate latency and throughput before real traffic finds the limits.",
  },
  {
    icon: "cicd",
    title: "CI/CD Integration",
    description:
      "Tests that run on every commit through Jenkins, GitHub Actions, and GitLab CI for fast feedback and fewer surprises at release.",
  },
  {
    icon: "regression",
    title: "Functional & Regression Testing",
    description:
      "Thorough functional coverage and dependable regression suites that protect releases as the product evolves.",
  },
];

/** SKILLS — grouped chips. No proficiency percentages, by design. */
export const skillGroups: { category: string; skills: string[] }[] = [
  {
    category: "Automation Tools",
    skills: ["Playwright", "Selenium", "Cypress", "Appium"],
  },
  {
    category: "Languages",
    skills: ["TypeScript", "Java", "Python", "SQL"],
  },
  {
    category: "API & Performance",
    skills: ["Postman", "REST API Testing", "JMeter"],
  },
  {
    category: "CI/CD & Version Control",
    skills: ["Jenkins", "GitHub Actions", "GitLab CI", "Git"],
  },
  {
    category: "Practices & Methodologies",
    skills: ["Agile / Scrum", "BDD / Cucumber", "JIRA", "Page Object Model"],
  },
];

/** PROJECTS — three real projects. */
export type Project = {
  title: string;
  tagline: string;
  summary: string;
  details: string[];
  tech: string[];
};

export const projects: Project[] = [
  {
    title: "Mobile App Reliability and Stress Testing Suite",
    tagline: "Android · Appium · reliability benchmarking",
    summary:
      "An automated reliability suite for an Android app that surfaces flaky and failure prone flows under stress.",
    details: [
      "Built an automated reliability suite for an Android app to surface flaky and failure prone flows under stress.",
      "Ran repeated stress and load test cycles, captured failures, and classified them by type and root cause.",
      "Implemented hardening improvements and produced a before and after reliability benchmark that showed measurable stability gains.",
    ],
    tech: [
      "Appium",
      "Python",
      "Android",
      "Stress Testing",
      "Failure Classification",
      "Reliability Benchmarking",
    ],
  },
  {
    title: "End to End Web Automation Framework",
    tagline: "Playwright · TypeScript · Page Object Model",
    summary:
      "A scalable Playwright and TypeScript framework built on the Page Object Model for maintainable, reusable tests.",
    details: [
      "Designed a scalable Playwright and TypeScript automation framework with the Page Object Model for maintainable, reusable tests.",
      "Added cross browser and parallel execution, integrated into CI/CD for automated runs on every commit.",
      "Reduced regression cycle time and improved release confidence across the team.",
    ],
    tech: [
      "Playwright",
      "TypeScript",
      "POM",
      "CI/CD",
      "Cross Browser",
      "Parallel Testing",
    ],
  },
  {
    title: "API & Performance Testing Pipeline",
    tagline: "Postman · REST · JMeter · CI/CD",
    summary:
      "Automated API coverage with JMeter performance tests integrated into the delivery pipeline.",
    details: [
      "Built automated API test coverage with Postman and REST testing and integrated JMeter performance tests into the delivery pipeline.",
      "Validated functional correctness along with latency and throughput under load, catching regressions early.",
    ],
    tech: [
      "Postman",
      "REST API Testing",
      "JMeter",
      "Performance Testing",
      "CI/CD",
    ],
  },
];
