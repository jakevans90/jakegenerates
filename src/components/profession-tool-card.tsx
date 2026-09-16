import type { Tool } from "@/data/tools";

export function ProfessionToolCard({ tool, featured = false }: { tool: Tool; featured?: boolean }) {
  return <article className={`profession-tool-card${featured ? " profession-tool-card-featured" : ""}`}>
    {featured && <p className="profession-tool-label">Built for this trade</p>}
    <h3>{tool.name}</h3>
    <p>{tool.description}</p>
    <a href={tool.url} target="_blank" rel="noreferrer">{tool.cta} <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
  </article>;
}
