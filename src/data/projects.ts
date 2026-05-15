export type Category = "web" | "extension" | "mobile";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: Category;
  tags: string[];
  url: string;
  imageUrl?: string;
}

export const projects: Project[] = [
  // ─── Browser Extensions ───────────────────────────────────────────────────
  {
    id: "whatstack",
    title: "WhatStack",
    subtitle: "Website Tech Stack Detector",
    description:
      "Decode the architecture of any website instantly. Detects 1,000+ technologies — frameworks, CMS, analytics, hosting — by scanning JS variables, HTTP headers, and metadata.",
    category: "extension",
    tags: ["Chrome Extension", "Developer Tool"],
    url: "https://whatstack.brilworks.com",
  },
  {
    id: "eyerest",
    title: "EyeRest",
    subtitle: "#1 Eye Care Timer for Chrome",
    description:
      "Science-backed 20-20-20 rule reminders that protect your eyes during long work sessions. No accounts, no data collection — just gentle, timely nudges to look away.",
    category: "extension",
    tags: ["Chrome Extension", "Health & Wellness"],
    url: "https://eyerest.brilworks.com",
  },
  {
    id: "chromapro",
    title: "ChromaPro",
    subtitle: "Professional Color Picker & Palette Generator",
    description:
      "Precision pixel sampling, intelligent palette generation, and accessibility compliance checking — all without leaving your browser. Export colors in any format designers need.",
    category: "extension",
    tags: ["Chrome Extension", "Design Tool"],
    url: "https://chromapro.brilworks.com",
  },
  {
    id: "snapmark",
    title: "SnapMark",
    subtitle: "Screenshot & Annotation Tool for Chrome",
    description:
      "Capture full-page or region screenshots and annotate with arrows, highlights, and blur — then share instantly via cloud link. No signup, no cost.",
    category: "extension",
    tags: ["Chrome Extension", "Productivity"],
    url: "https://snapmark.brilworks.com",
  },
  {
    id: "dark",
    title: "Dark Mode for Chrome",
    subtitle: "Night & Eye Care Reading Modes",
    description:
      "Classic Dark, Midnight Black, and Black & White reading modes for any website. Per-site pause control, auto-scheduling, and zero data collection — built specifically for long reading sessions.",
    category: "extension",
    tags: ["Chrome Extension", "Accessibility"],
    url: "https://dark.brilworks.com",
  },
  {
    id: "nudge",
    title: "Nudge",
    subtitle: "Your Personal CRM Inside the Browser",
    description:
      "Save follow-ups from Gmail, LinkedIn, WhatsApp, and Outlook with one tap. Smart reminders resurface conversations at the right moment — no CRM setup, no harvested data.",
    category: "extension",
    tags: ["Chrome Extension", "Productivity"],
    url: "https://nudge.brilworks.com",
    imageUrl: "/images/nudge-icon.png",
  },

  {
    id: "browsex",
    title: "BrowseX",
    subtitle: "Intelligent Web Automation Powered by AI",
    description:
      "Extract data, fill forms, navigate websites, and accomplish tasks automatically. BrowseX uses AI to eliminate repetitive browser work — privacy-first, no data sold to third parties.",
    category: "extension",
    tags: ["Chrome Extension", "AI / ML", "Automation"],
    url: "https://chromewebstore.google.com/detail/browsex-ai-web-automation/giflafbkeahbjpoenblgifmneopecmhn",
  },
  {
    id: "cursors",
    title: "Best Custom Cursors",
    subtitle: "Anime, Gaming & Cute Pointers",
    description:
      "Customize your browser with exclusive anime, gaming, and aesthetic mouse cursors — Katana, Sakura, Fire, Kawaii, and more. Lightweight, privacy-respecting, one-click to apply.",
    category: "extension",
    tags: ["Chrome Extension", "Customization"],
    url: "https://chromewebstore.google.com/detail/best-custom-cursors-anime/mnbdkjcfgfelpmkbjhdgjmlcjjmpheef",
  },

  // ─── Web Apps ─────────────────────────────────────────────────────────────
  {
    id: "invoicify",
    title: "Invoicify AI",
    subtitle: "Neural-Powered Invoice Processing",
    description:
      "Automate invoice data extraction and processing with neural networks. Reduces manual entry, speeds up reconciliation, and integrates with existing accounting workflows.",
    category: "web",
    tags: ["AI / ML", "FinTech"],
    url: "https://invoicify.brilworks.com",
  },
  {
    id: "statementflow",
    title: "StatementFlow",
    subtitle: "AI Credit Card Statement Analyzer",
    description:
      "Upload any credit card statement and get instant AI-powered categorization, spending insights, and anomaly detection — turning raw PDFs into actionable financial data.",
    category: "web",
    tags: ["AI / ML", "FinTech"],
    url: "https://statementflow.brilworks.com",
  },
  {
    id: "audit",
    title: "AI Audit & Compliance Assistant",
    subtitle: "Automated Financial Auditing & GST Compliance",
    description:
      "Powered by Gemini 2.0 Flash — auto-validates GSTIN, detects duplicate invoices and calculation mismatches, and generates executive audit summaries from uploaded Excel documents.",
    category: "web",
    tags: ["AI / ML", "Finance", "Compliance"],
    url: "https://audit.brilworks.com",
  },
  {
    id: "coursesphere",
    title: "CourseSphere",
    subtitle: "Full-Stack Online Course Platform",
    description:
      "Role-based platform for students, instructors, and admins. Secure video upload via Cloudinary, course creation tools, enrollment management, and dark/light mode — built with Next.js and Supabase.",
    category: "web",
    tags: ["EdTech", "E-Learning"],
    url: "https://coursesphere.brilworks.com",
  },
  {
    id: "card",
    title: "CardDex",
    subtitle: "Scan QR Codes. Collect Digital Cards.",
    description:
      "Scan a QR code on a physical card to unlock its animated digital version in your personal binder. Admins generate AI reveal videos via Google Veo directly from the card image.",
    category: "mobile",
    tags: ["iOS", "Android", "AI / ML"],
    url: "https://card.brilworks.com",
  },
  {
    id: "order",
    title: "OrderFlow",
    subtitle: "Premium Order Management System",
    description:
      "End-to-end order lifecycle management with role-based access for admin, manager, and staff. Real-time order tracking, status updates, and reporting in one dashboard.",
    category: "web",
    tags: ["E-Commerce", "Operations"],
    url: "https://order.brilworks.com",
  },
  {
    id: "admission",
    title: "Admissions OS",
    subtitle: "AI-Orchestrated MBA Application Platform",
    description:
      "Five autonomous AI agents — Strategy, Framework, Story Architect, Editing, and Gap — pass structured context sequentially to guide every essay, resume, and recommendation letter to submission-ready quality.",
    category: "web",
    tags: ["AI / ML", "EdTech"],
    url: "https://admission.brilworks.com",
  },
  {
    id: "roomplanner",
    title: "3D Room Designer",
    subtitle: "AI-Powered Browser-Based Interior Design Tool",
    description:
      "Describe a room in natural language and let the AI set it up. Drag-and-drop 18+ furniture items, switch lighting moods, customize walls and floors, and export high-res PNGs — all in the browser.",
    category: "web",
    tags: ["3D / AR", "AI / ML", "Interior Design"],
    url: "https://roomplanner.brilworks.com",
  },
  {
    id: "voice",
    title: "Brilworks Voice Agents",
    subtitle: "Real-Time AI Voice Agents for 16 Industries",
    description:
      "Powered by Google Gemini — real-time voice conversations with industry-specific agents in 14 languages. Create and manage custom agents with your own prompts via the built-in Supabase-backed platform.",
    category: "web",
    tags: ["AI / ML", "Voice AI"],
    url: "https://voice.brilworks.com",
  },
  {
    id: "aster",
    title: "Aster Lite",
    subtitle: "Manufacturing & Operations OS for B2B Lighting",
    description:
      "Role-based SaaS for B2B lighting manufacturers — manage leads, generate GST-compliant quotations, track orders via kanban, and monitor inventory in real time with a premium dark-themed interface.",
    category: "web",
    tags: ["Manufacturing", "ERP", "SaaS"],
    url: "https://aster-lite-os.vercel.app",
  },
  {
    id: "garagemap",
    title: "GarageMap",
    subtitle: "Comprehensive Garage & Workshop Management",
    description:
      "Built with Next.js and Firebase — manage customers, vehicles, job cards, invoices, inventory, and finances in one platform. Includes audit logs, reminders, and financial reports for service centers.",
    category: "web",
    tags: ["Automotive", "SaaS"],
    url: "https://garagemap.brilworks.com",
  },
  {
    id: "vectortrace",
    title: "VectorTrace",
    subtitle: "Vector Conversion Tool",
    description:
      "Convert raster images into clean, scalable vector graphics with intelligent tracing algorithms. Perfect for logos, icons, and artwork that need to scale without quality loss.",
    category: "web",
    tags: ["Design Tool", "Image Processing"],
    url: "https://vectortrace.brilworks.com",
  },
  {
    id: "hrtech",
    title: "HR-Tech",
    subtitle: "AI-Powered Recruitment Platform",
    description:
      "Streamline hiring with AI-driven candidate screening, automated interview scheduling, and smart pipeline management — reducing time-to-hire without sacrificing quality.",
    category: "web",
    tags: ["AI / ML", "HR Tech"],
    url: "https://hrtech.brilworks.com",
  },
  {
    id: "realestate",
    title: "ConstructOps AI",
    subtitle: "Real Estate & Construction Platform",
    description:
      "AI-powered operations platform for real estate and construction teams. Manage projects, track progress, coordinate contractors, and maintain compliance from a unified dashboard.",
    category: "web",
    tags: ["AI / ML", "Real Estate"],
    url: "https://realestate.brilworks.com",
  },
  {
    id: "restaurant",
    title: "OrderNest",
    subtitle: "Restaurant Management Platform",
    description:
      "Manage your restaurant's complete operations — menus, orders, tables, and staff — from a single intuitive interface designed for fast-paced food service environments.",
    category: "web",
    tags: ["F&B", "Operations"],
    url: "https://restaurant.brilworks.com",
  },
  {
    id: "lifeai",
    title: "LifeAI",
    subtitle: "AI Life Assistant",
    description:
      "A personal AI companion that helps you organize goals, build habits, and make smarter daily decisions — combining planning, journaling, and intelligent coaching in one place.",
    category: "web",
    tags: ["AI / ML", "Lifestyle"],
    url: "https://lifeai.brilworks.com",
  },

  // ─── Mobile Apps ──────────────────────────────────────────────────────────
  {
    id: "circle",
    title: "Circle Up",
    subtitle: "Community & Social Platform",
    description:
      "A mobile-first community platform that brings people together around shared interests. Create circles, post updates, and engage with your community on iOS and Android.",
    category: "mobile",
    tags: ["iOS", "Android", "Social"],
    url: "https://circle.brilworks.com",
  },
  {
    id: "scaneat",
    title: "ScanEat",
    subtitle: "Food Barcode Scanner & Health Analyzer",
    description:
      "Scan a barcode to get an instant Nutri-Score, ingredient breakdown, allergen warnings, and personalized health recommendations. Cross-platform — Next.js web app and React Native mobile app powered by OpenFoodFacts.",
    category: "mobile",
    tags: ["iOS", "Android", "Health", "React Native"],
    url: "https://scaneat.brilworks.com",
  },
];

export const categoryMeta: Record<
  Category | "all",
  { label: string; description: string }
> = {
  all: { label: "All", description: "All projects" },
  web: { label: "Web & Demos", description: "Web applications and demos" },
  extension: { label: "Extensions", description: "Browser extensions" },
  mobile: { label: "Mobile Apps", description: "iOS and Android apps" },
};
