import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProfessionToolCard } from "@/components/profession-tool-card";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { getProfession, getToolsForProfession, professions } from "@/data/tools";

type ProfessionPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return professions.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProfessionPageProps): Promise<Metadata> {
  const profession = getProfession((await params).slug);
  if (!profession) return {};
  return {
    title: `Tools for ${profession.name}`,
    description: profession.metaDescription,
    alternates: { canonical: `/professions/${profession.slug}` },
  };
}

export default async function ProfessionPage({ params }: ProfessionPageProps) {
  const profession = getProfession((await params).slug);
  if (!profession) notFound();

  const professionTools = getToolsForProfession(profession.slug);
  const specificTools = professionTools.filter((tool) => tool.professionSpecific === profession.slug);
  const calculators = professionTools.filter((tool) => tool.category === "calculator" && !tool.professionSpecific);
  const generators = professionTools.filter((tool) => tool.category === "generator");

  return <><SiteHeader /><main>
    <section className="profession-hero"><div className="shell">
      <Link className="profession-back" href="/#professions"><span aria-hidden="true">←</span> All professions</Link>
      <p className="kicker">Tools by profession</p>
      <h1>Tools for<br /><em>{profession.name}.</em></h1>
      <p className="profession-intro">{profession.description}</p>
      <p className="profession-journey">{specificTools.length > 0 ? "Start with trade-specific pricing, check the wider business math with the general calculators, then turn final numbers into customer-ready documents." : "Start with the pricing calculators, then turn final numbers into customer-ready documents for the job."}</p>
      <p className="profession-count">{professionTools.length} free tools available now</p>
    </div></section>

    {specificTools.length > 0 && <section className="profession-group profession-specific"><div className="shell">
      <div className="profession-group-heading"><p className="kicker">Made for {profession.name}</p><h2>{profession.specificToolsTitle ?? "Trade-specific tools"}</h2></div>
      <div className="profession-tool-grid profession-tool-grid-featured">{specificTools.map((tool) => <ProfessionToolCard tool={tool} featured featuredLabel={`${profession.name}-specific`} key={tool.id} />)}</div>
    </div></section>}

    <section className="profession-group"><div className="shell">
      <div className="profession-group-heading"><p className="kicker">Pricing &amp; profit</p><h2>Calculators</h2><p>Use these to set rates, price the job, and check the result.</p></div>
      <div className="profession-tool-grid">{calculators.map((tool) => <ProfessionToolCard tool={tool} key={tool.id} />)}</div>
    </div></section>

    <section className="profession-group profession-generators"><div className="shell">
      <div className="profession-group-heading"><p className="kicker">Customer-ready paperwork</p><h2>Document generators</h2><p>Once the numbers are settled, create the document the customer needs.</p></div>
      <div className="profession-tool-grid">{generators.map((tool) => <ProfessionToolCard tool={tool} key={tool.id} />)}</div>
      {!specificTools.length && <p className="profession-coming">More profession-specific tools are coming. The tools above are ready to use today.</p>}
    </div></section>
  </main><SiteFooter /></>;
}
