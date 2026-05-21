export type Category = "web" | "extension" | "mobile";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: Category | Category[];
  tags: string[];
  url: string;
  imageUrl?: string;
  iosUrl?: string;
  androidUrl?: string;
}

export function inCategory(project: Project, cat: Category): boolean {
  return Array.isArray(project.category)
    ? project.category.includes(cat)
    : project.category === cat;
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
    imageUrl: "/images/whatstack.png",
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
    imageUrl: "/images/eyerest.png",
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
    imageUrl: "/images/chromapro.png",
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
    imageUrl: "/images/snapmark.png",
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
    imageUrl: "/images/darkmode.png",
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
    imageUrl: "/images/nudge.png",
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
    imageUrl: "/images/browsexai.png",
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
    imageUrl: "/images/bestcursors.png",
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
    imageUrl: "/images/invoicify.png",
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
    imageUrl: "/images/statementflow.png",
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
    imageUrl: "/images/ai-audit.png",
  },
  {
    id: "coursesphere",
    title: "Course Sphere",
    subtitle: "Full-Stack Online Course Platform",
    description:
      "Role-based platform for students, instructors, and admins. Secure video upload via Cloudinary, course creation tools, enrollment management, and dark/light mode — built with Next.js and Supabase.",
    category: "web",
    tags: ["EdTech", "E-Learning"],
    url: "https://coursesphere.brilworks.com",
    imageUrl: "/images/coursesphere.png",
  },
  {
    id: "order",
    title: "Order Flow",
    subtitle: "Premium Order Management System",
    description:
      "End-to-end order lifecycle management with role-based access for admin, manager, and staff. Real-time order tracking, status updates, and reporting in one dashboard.",
    category: "web",
    tags: ["E-Commerce", "Operations"],
    url: "https://order.brilworks.com",
    imageUrl: "/images/orderflow.png",
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
    imageUrl: "/images/admission.png",
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
    imageUrl: "/images/roomplanner.png",
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
    imageUrl: "/images/voiceagents.png",
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
    imageUrl: "/images/asterlite.png",
  },
  {
    id: "garagemap",
    title: "Garage Map",
    subtitle: "Comprehensive Garage & Workshop Management",
    description:
      "Built with Next.js and Firebase — manage customers, vehicles, job cards, invoices, inventory, and finances in one platform. Includes audit logs, reminders, and financial reports for service centers.",
    category: "web",
    tags: ["Automotive", "SaaS"],
    url: "https://garagemap.brilworks.com",
    imageUrl: "/images/garagemap.png",
  },
  {
    id: "vectortrace",
    title: "Vector Trace",
    subtitle: "Vector Conversion Tool",
    description:
      "Convert raster images into clean, scalable vector graphics with intelligent tracing algorithms. Perfect for logos, icons, and artwork that need to scale without quality loss.",
    category: "web",
    tags: ["Design Tool", "Image Processing"],
    url: "https://vectortrace.brilworks.com",
    imageUrl: "/images/vectortrace.webp",
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
    imageUrl: "/images/hrtech.png",
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
    imageUrl: "/images/constructAI.png",
  },
  {
    id: "restaurant",
    title: "Order Nest",
    subtitle: "Restaurant Management Platform",
    description:
      "Manage your restaurant's complete operations — menus, orders, tables, and staff — from a single intuitive interface designed for fast-paced food service environments.",
    category: "web",
    tags: ["F&B", "Operations"],
    url: "https://restaurant.brilworks.com",
    imageUrl: "/images/ordernest.webp",
  },
  {
    id: "lifeai",
    title: "Life AI",
    subtitle: "AI Life Assistant",
    description:
      "A personal AI companion that helps you organize goals, build habits, and make smarter daily decisions — combining planning, journaling, and intelligent coaching in one place.",
    category: "web",
    tags: ["AI / ML", "Lifestyle"],
    url: "https://lifeai.brilworks.com",
    imageUrl: "/images/lifeai.png",
  },

  // ─── Mobile Apps ──────────────────────────────────────────────────────────

  {
    id: "petfinder",
    title: "Pet-Finder",
    subtitle: "Find Your Perfect Pet Companion",
    description:
      "Browse thousands of adoptable pet listings near you, filter by breed, age, and location, and connect directly with shelters or owners to help reunite lost animals with their families.",
    category: "mobile",
    tags: ["iOS", "Android", "Lifestyle"],
    url: "https://play.google.com/store/apps/details?id=com.brilworks.petfinder",
    imageUrl: "/images/petfinder.webp",
    iosUrl: "https://apps.apple.com/in/app/pet-finder/id6754903257",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.brilworks.petfinder",
  },
  {
    id: "docchat",
    title: "Doctor Chat",
    subtitle: "Secure Doctor-Patient Communication",
    description:
      "Connect patients and doctors with real-time messaging, appointment workflows, and in-app video calling — a simple, secure all-in-one healthcare communication platform.",
    category: "mobile",
    tags: ["iOS", "Android", "Health Tech"],
    url: "https://play.google.com/store/apps/details?id=com.brilworksdigital.docchat",
    imageUrl: "/images/docchat.webp",
    iosUrl: "https://apps.apple.com/in/app/doctor-chat/id6762255825",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.brilworksdigital.docchat",
  },
  {
    id: "kinderland",
    title: "Kinderland",
    subtitle: "Learn 123 & ABC — Kids Education",
    description:
      "Unlock a world of fun and learning with tracing, connecting, and interactive exercises. Kinderland combines education and entertainment to make every moment a learning adventure for young minds.",
    category: "mobile",
    tags: ["iOS", "Android", "EdTech"],
    url: "https://play.google.com/store/apps/details?id=com.brilworks.games.kinderland",
    imageUrl: "/images/kinderland.webp",
    iosUrl:
      "https://apps.apple.com/in/app/kinderland-learn-123-abc/id6452722323",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.brilworks.games.kinderland",
  },
  {
    id: "colorcommand",
    title: "Color Command",
    subtitle: "Brain Training Stroop Effect Game",
    description:
      "Master your reflexes with the ultimate Stroop Effect brain training game — where the color of text and its meaning conflict to challenge your mental agility and reaction speed.",
    category: ["web", "mobile"],
    tags: ["Web App", "iOS", "Android", "Gaming"],
    url: "https://play.google.com/store/apps/details?id=com.brilworks.colorcommand",
    imageUrl: "/images/colorcommand.png",
    iosUrl:
      "https://apps.apple.com/in/app/color-command-brain-training/id6767218237",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.brilworks.colorcommand",
  },
  {
    id: "elara",
    title: "Elara",
    subtitle: "Pregnancy & Maternal Wellness Tracker",
    description:
      "A personalized maternal wellness companion with expert-curated prenatal and postnatal content, baby growth tracking, yoga, meditation, and mindful practices for every stage of pregnancy.",
    category: "mobile",
    tags: ["iOS", "Android", "Health & Wellness"],
    url: "https://play.google.com/store/apps/details?id=com.brilworksdigital.Elara",
    imageUrl: "/images/Elara.webp",
    iosUrl: "https://apps.apple.com/in/app/elara-prenatal-app/id6760452596",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.brilworksdigital.Elara",
  },
  {
    id: "cabunorider",
    title: "Cabuno-Rider",
    subtitle: "Driver App — Accept Rides & Track Earnings",
    description:
      "The all-in-one driver app for going online, accepting nearby ride requests, navigating in real time, and tracking daily earnings — all from one clean dashboard.",
    category: "mobile",
    tags: ["iOS", "Android", "Transportation"],
    url: "https://play.google.com/store/apps/details?id=com.brilworks.cabunorider",
    imageUrl: "/images/cabunorider.webp",
    iosUrl: "https://apps.apple.com/in/app/cabuno-rider/id6759718805",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.brilworks.cabunorider",
  },
  {
    id: "spinerecoverypro",
    title: "Spine Recovery Pro",
    subtitle: "Clinically Guided Spine Rehabilitation",
    description:
      "Personalized spine rehabilitation with clinical exercise plans, progress tracking, and compliance monitoring — bridging patients and healthcare professionals for measurable recovery outcomes.",
    category: "mobile",
    tags: ["Android", "Health & Wellness"],
    url: "https://play.google.com/store/apps/details?id=com.brilworksdigital.spinerecoverypro",
    imageUrl: "/images/spinerecoverypro.webp",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.brilworksdigital.spinerecoverypro",
  },
  {
    id: "mrbrush",
    title: "Mr. Brush",
    subtitle: "AI-Powered Image Generator",
    description:
      "Transform your imagination into stunning visual art using advanced AI with custom styles and text prompts — a cutting-edge mobile creative studio powered by generative AI.",
    category: "mobile",
    tags: ["Android", "AI / ML"],
    url: "https://play.google.com/store/apps/details?id=com.brilworksdigital.Mrbrush",
    imageUrl: "/images/mrbrush.webp",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.brilworksdigital.Mrbrush",
  },
  {
    id: "lifepilot",
    title: "LifePilot AI",
    subtitle: "AI Assistant for Health, Finance & Life",
    description:
      "A personal AI assistant providing intelligent guidance across health, finance, and productivity — structured assistant categories that help you make smarter decisions every day.",
    category: "mobile",
    tags: ["Android", "AI / ML", "Lifestyle"],
    url: "https://play.google.com/store/apps/details?id=com.brilworks.lifePilot",
    imageUrl: "/images/lifepilot.webp",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.brilworks.lifePilot",
  },
  {
    id: "kindcircle",
    title: "Kind Circle",
    subtitle: "Support Network for Neurodivergent Families",
    description:
      "A dedicated community platform connecting parents raising children with autism, ADHD, and other neurodivergent conditions — share experiences, find support, and access expert resources.",
    category: "mobile",
    tags: ["Android", "Social"],
    url: "https://play.google.com/store/apps/details?id=com.brilworksdigital.KindCircle",
    imageUrl: "/images/kindcircle.webp",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.brilworksdigital.KindCircle",
  },
  {
    id: "ordernest-mobile",
    title: "Order Nest",
    subtitle: "Restaurant Orders — Mobile App",
    description:
      "The mobile companion for restaurant teams — design menus, configure tables, invite staff, and track real-time orders, sales, and billing from anywhere.",
    category: "mobile",
    tags: ["iOS", "Android", "F&B"],
    url: "https://play.google.com/store/apps/details?id=com.brilworks.orderNest",
    imageUrl: "/images/ordernest.webp",
    iosUrl: "https://apps.apple.com/in/app/ordernest/id6755948557",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.brilworks.orderNest",
  },
  {
    id: "vectortrace-mobile",
    title: "Vector Trace",
    subtitle: "Business Management & Order Tracking",
    description:
      "An all-in-one management solution for manufacturers, service providers, vendors, and customers — streamline orders, inventory, technicians, and delivery with real-time tracking.",
    category: "mobile",
    tags: ["iOS", "Android", "Operations"],
    url: "https://play.google.com/store/apps/details?id=com.brilworks.vectortrace",
    imageUrl: "/images/vectortrace.webp",
    iosUrl: "https://apps.apple.com/in/app/vectortrace/id6756480875",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.brilworks.vectortrace",
  },
  {
    id: "servicesquad",
    title: "Service Squad",
    subtitle: "Book Trusted Home Service Professionals",
    description:
      "Connects customers, providers, and admins in one platform for seamless home service bookings — book trusted professionals, manage your work, or oversee the marketplace.",
    category: "mobile",
    tags: ["iOS", "Android", "Marketplace"],
    url: "https://play.google.com/store/apps/details?id=com.brilworks.servicesquad",
    imageUrl: "/images/servicesquad.webp",
    iosUrl:
      "https://apps.apple.com/in/app/service-squad-home-services/id6755956890",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.brilworks.servicesquad",
  },
  {
    id: "pinksignal",
    title: "Pink Signal",
    subtitle: "Women Safety & Family Alert App",
    description:
      "A women's safety and family tracking app that keeps you connected with trusted contacts at all times — whether commuting or walking alone, help is always one tap away.",
    category: "mobile",
    tags: ["iOS", "Android", "Safety"],
    url: "https://play.google.com/store/apps/details?id=com.brilworksdigital.pinksignal",
    imageUrl: "/images/pinksignal.webp",
    iosUrl:
      "https://apps.apple.com/in/app/pinksignal-women-safety-app/id6754561696",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.brilworksdigital.pinksignal",
  },
  {
    id: "fitorbit",
    title: "Fit Orbit",
    subtitle: "Fitness Tracker & Workout Planner",
    description:
      "Your ultimate fitness companion to plan, track, and achieve goals — build workout routines for weights, bodyweight training, or beginner workouts and monitor every rep of your progress.",
    category: "mobile",
    tags: ["Android", "Health & Wellness"],
    url: "https://play.google.com/store/apps/details?id=com.brilworks.fitorbit",
    imageUrl: "/images/fitorbit.webp",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.brilworks.fitorbit",
  },
  {
    id: "circleup",
    title: "Circle Up",
    subtitle: "Personal Relationship Management",
    description:
      "Create and manage meaningful relationships with your contacts — track notes and interactions to stay genuinely close to the people who matter most in your life.",
    category: "mobile",
    tags: ["iOS", "Android", "Productivity"],
    url: "https://play.google.com/store/apps/details?id=com.brilworks.circleUp",
    imageUrl: "/images/circleup.webp",
    iosUrl: "https://apps.apple.com/in/app/circle-up/id6753784281",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.brilworks.circleUp",
  },
  {
    id: "heartmesh",
    title: "Heart Mesh",
    subtitle: "AI Dating — Practice, Then Connect",
    description:
      "The world's first dating platform combining human connections with AI companionship — practice conversations with AI companions, then confidently connect with real matches via video calls.",
    category: "mobile",
    tags: ["Android", "Social", "AI / ML"],
    url: "https://play.google.com/store/apps/details?id=com.brilworks.mindsync",
    imageUrl: "/images/heartmesh.webp",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.brilworks.mindsync",
  },
  {
    id: "exora",
    title: "Exora",
    subtitle: "Physical Therapy & Patient Recovery",
    description:
      "Transforms physical therapy by connecting patients, nurses, and clinics — personalized treatment plans, real-time progress tracking, and seamless communication for better recovery outcomes.",
    category: "mobile",
    tags: ["Android", "Health Tech"],
    url: "https://play.google.com/store/apps/details?id=com.brilworksdigital.exora",
    imageUrl: "/images/exora.webp",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.brilworksdigital.exora",
  },
  {
    id: "enclaveconnect",
    title: "Enclave Connect",
    subtitle: "Smart Gated Community Management",
    description:
      "All-in-one community management for gated societies — whether you're a resident, security guard, or management committee member, everything stays connected and efficient.",
    category: "mobile",
    tags: ["iOS", "Android", "PropTech"],
    url: "https://play.google.com/store/apps/details?id=com.brilworksdigital.enclaveconnect",
    imageUrl: "/images/enclaveconnect.webp",
    iosUrl: "https://apps.apple.com/us/app/enclave-connect/id6753797049",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.brilworksdigital.enclaveconnect",
  },
  {
    id: "expenseflow",
    title: "Expense Flow",
    subtitle: "Smart Expense Tracker & Budget Manager",
    description:
      "An all-in-one expense tracker with intuitive categorization, visual spending insights, and smart money management tools to help you master your finances effortlessly.",
    category: "mobile",
    tags: ["Android", "FinTech"],
    url: "https://play.google.com/store/apps/details?id=com.brilworks.expenifyapp",
    imageUrl: "/images/expenseflow.webp",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.brilworks.expenifyapp",
  },
  {
    id: "habitrise",
    title: "Habit Rise",
    subtitle: "Build Habits with Reminders & Insights",
    description:
      "Your ultimate habit-building companion — create and maintain positive habits with smart reminders, a habit calendar, and progress insights that make building consistency enjoyable.",
    category: "mobile",
    tags: ["Android", "Lifestyle"],
    url: "https://play.google.com/store/apps/details?id=com.brilworks.habittracker",
    imageUrl: "/images/habitrise.webp",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.brilworks.habittracker",
  },
  {
    id: "healthvault",
    title: "Health Vault",
    subtitle: "Secure Family Medical Records Storage",
    description:
      "The ultimate solution for organizing your family's health documents securely — upload records from camera or gallery and keep a centralized health record for every family member.",
    category: "mobile",
    tags: ["Android", "Health Tech"],
    url: "https://play.google.com/store/apps/details?id=com.brilworks.healthvault",
    imageUrl: "/images/healthvault.webp",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.brilworks.healthvault",
  },
  {
    id: "scaneat",
    title: "Scan Eat",
    subtitle: "Food Barcode Scanner & Health Analyzer",
    description:
      "Scan a barcode to get an instant Nutri-Score, ingredient breakdown, allergen warnings, and personalized health recommendations. Cross-platform — Next.js web app and React Native mobile app powered by OpenFoodFacts.",
    category: "mobile",
    tags: ["iOS", "Android", "Health", "React Native"],
    url: "https://scaneat.brilworks.com",
    imageUrl: "/images/scaneat.webp",
    iosUrl: "https://apps.apple.com/in/app/scan-eat-scan-product/id6757597631",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.brilworks.scaneat",
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
