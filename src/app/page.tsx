import { projects } from "@/data/projects";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";

const webProjects = projects.filter((p) => p.category === "web");
const extensionProjects = projects.filter((p) => p.category === "extension");
const mobileProjects = projects.filter((p) => p.category === "mobile");

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6">
      <Hero totalCount={projects.length} />

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-4 mb-16 max-w-lg mx-auto text-center">
        {[
          { count: webProjects.length, label: "Web & Demos", href: "#web" },
          { count: extensionProjects.length, label: "Extensions", href: "#extension" },
          { count: mobileProjects.length, label: "Mobile Apps", href: "#mobile" },
        ].map(({ count, label, href }) => (
          <a
            key={label}
            href={href}
            className="bg-gray-50 rounded-xl py-4 border border-gray-100 hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer"
          >
            <div className="text-2xl font-bold text-gray-900">{count}</div>
            <div className="text-xs text-gray-500 mt-0.5">{label}</div>
          </a>
        ))}
      </div>

      <div className="flex flex-col gap-16">
        <CategorySection
          id="web"
          label="Web & Demos"
          description="Interactive web applications and live demos you can try right now"
          icon={
            <svg
              className="w-6 h-6 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"
              />
            </svg>
          }
          projects={webProjects}
        />

        <CategorySection
          id="extension"
          label="Browser Extensions"
          description="Productivity-boosting extensions available on the Chrome Web Store and Firefox Add-ons"
          icon={
            <svg
              className="w-6 h-6 text-purple-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
              />
            </svg>
          }
          projects={extensionProjects}
        />

        <CategorySection
          id="mobile"
          label="Mobile Apps"
          description="iOS and Android applications available on the App Store and Google Play"
          icon={
            <svg
              className="w-6 h-6 text-emerald-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          }
          projects={mobileProjects}
        />
      </div>
    </main>
  );
}
