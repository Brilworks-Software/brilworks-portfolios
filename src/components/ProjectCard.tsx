import Image from "next/image";
import { Project } from "@/data/projects";

const tagColors: Record<string, string> = {
  "Chrome Extension": "bg-purple-50 text-purple-700",
  "Developer Tool": "bg-blue-50 text-blue-700",
  "Health & Wellness": "bg-green-50 text-green-700",
  "Design Tool": "bg-pink-50 text-pink-700",
  Productivity: "bg-amber-50 text-amber-700",
  Accessibility: "bg-teal-50 text-teal-700",
  "AI / ML": "bg-violet-50 text-violet-700",
  FinTech: "bg-emerald-50 text-emerald-700",
  Finance: "bg-emerald-50 text-emerald-700",
  Compliance: "bg-red-50 text-red-700",
  EdTech: "bg-sky-50 text-sky-700",
  "E-Learning": "bg-sky-50 text-sky-700",
  Networking: "bg-indigo-50 text-indigo-700",
  "E-Commerce": "bg-orange-50 text-orange-700",
  Operations: "bg-slate-100 text-slate-700",
  "3D / AR": "bg-cyan-50 text-cyan-700",
  "Interior Design": "bg-rose-50 text-rose-700",
  "Voice AI": "bg-violet-50 text-violet-700",
  Manufacturing: "bg-zinc-100 text-zinc-700",
  ERP: "bg-zinc-100 text-zinc-700",
  Automotive: "bg-gray-100 text-gray-700",
  SaaS: "bg-blue-50 text-blue-700",
  "Image Processing": "bg-pink-50 text-pink-700",
  "HR Tech": "bg-indigo-50 text-indigo-700",
  "Real Estate": "bg-lime-50 text-lime-700",
  "F&B": "bg-orange-50 text-orange-700",
  Lifestyle: "bg-fuchsia-50 text-fuchsia-700",
  iOS: "bg-gray-100 text-gray-700",
  Android: "bg-green-50 text-green-700",
  Social: "bg-blue-50 text-blue-700",
  Health: "bg-green-50 text-green-700",
};

function tagClass(tag: string) {
  return tagColors[tag] ?? "bg-gray-100 text-gray-600";
}

export default function ProjectCard({ project }: { project: Project }) {
  const { title, subtitle, description, tags, url, imageUrl } = project;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden"
    >
      {/* Image */}
      <div className="w-full aspect-video bg-gray-100 flex items-center justify-center overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            width={600}
            height={338}
            className="w-full h-full object-cover"
          />
        ) : (
          <svg
            className="w-10 h-10 text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        )}
      </div>

      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs font-medium px-2.5 py-1 rounded-full ${tagClass(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title + subtitle */}
        <div>
          <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-400 mt-0.5">{subtitle}</p>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* CTA */}
        <div className="mt-auto pt-3 border-t border-gray-100">
          <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-800 transition-colors">
            View demo →
          </span>
        </div>
      </div>
    </a>
  );
}
