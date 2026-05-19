"use client";

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

function isStoreLink(url: string) {
  return (
    url.startsWith("https://play.google.com") ||
    url.startsWith("https://apps.apple.com")
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const {
    title,
    subtitle,
    description,
    tags,
    url,
    imageUrl,
    iosUrl,
    androidUrl,
  } = project;

  const hasMobileLinks = iosUrl || androidUrl;
  const hasWebDemo = !isStoreLink(url);

  const body = (
    <>
      {/* Image */}
      <div className="w-full aspect-video bg-white flex items-center justify-center overflow-hidden my-4">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            width={240}
            height={240}
            className="w-fit h-fit object-fill"
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
        <div className="mt-auto pt-3 border-t border-gray-100 flex flex-wrap gap-3 items-center">
          {hasMobileLinks ? (
            <>
              {hasWebDemo && (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View Demo →
                </a>
              )}
              {iosUrl && (
                <a
                  href={iosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  iOS Demo
                </a>
              )}
              {androidUrl && (
                <a
                  href={androidUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-700 hover:text-green-900 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
                  </svg>
                  Android Demo
                </a>
              )}
            </>
          ) : (
            <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-800 transition-colors">
              View demo →
            </span>
          )}
        </div>
      </div>
    </>
  );

  if (hasMobileLinks) {
    return (
      <a
        href={androidUrl ?? iosUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden"
      >
        {body}
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden"
    >
      {body}
    </a>
  );
}
