import type { Tool } from "@/data/tools";

export function ProfessionToolCard({ tool, featured = false, featuredLabel = "Built for this trade" }: { tool: Tool; featured?: boolean; featuredLabel?: string }) {
  return <article className={`profession-tool-card${featured ? " profession-tool-card-featured" : ""}`}>
    {featured && <p className="profession-tool-label">{featuredLabel}</p>}
    <h3>{tool.name}</h3>
    <p>{tool.description}</p>
    {featured && <ul className="profession-tool-features" aria-label={`${tool.name} highlights`}>
      {tool.features.map((feature) => <li key={feature}>{feature}</li>)}
    </ul>}
    <a href={tool.url} target="_blank" rel="noreferrer">{tool.cta} <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
  </article>;
}
