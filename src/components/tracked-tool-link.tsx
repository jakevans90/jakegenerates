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
    dataLayer?: unknown[];
  }
}

export function TrackedToolLink({ href, className, toolName, toolCategory, children }: Props) {
  function trackClick() {
    const params = {
      tool_name: toolName,
      tool_category: toolCategory,
      destination: href,
      source_page: "homepage",
    };
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () {
      // GA consumes Arguments command objects; an Array is not a gtag command.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
    window.gtag("event", "tool_click", params);
  }

  return (
    <a className={className} href={href} target="_blank" rel="noreferrer" onClick={trackClick}>
      {children}
    </a>
  );
}
