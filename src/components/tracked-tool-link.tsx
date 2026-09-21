"use client";

import type { ReactNode } from "react";

type Props = {
  href: string;
  className?: string;
  toolName: string;
  toolCategory: "calculator" | "generator";
  children: ReactNode;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function TrackedToolLink({ href, className, toolName, toolCategory, children }: Props) {
  function trackClick() {
    window.gtag?.("event", "tool_click", {
      tool_name: toolName,
      tool_category: toolCategory,
      destination: href,
      source_page: "homepage",
    });
  }

  return (
    <a className={className} href={href} target="_blank" rel="noreferrer" onClick={trackClick}>
      {children}
    </a>
  );
}
