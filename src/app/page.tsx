import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { calculators, generators as tools, professions } from "@/data/tools";
import heroLogo from "../../public/brand/jg-circle.png";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return <><SiteHeader /><main>
    <section className="hero shell">
      <div className="hero-content">
        <div className="eyebrow"><span aria-hidden="true" /> Practical software, made by Jake</div>
        <h1>Service work.<br /><em>Done smarter.</em></h1>
        <p className="hero-copy">Make confident pricing and profit decisions, then turn service work into polished professional documents.</p>
        <div className="hero-actions">
          <a className="primary-button hero-button" href="#tools">Use a Calculator <span aria-hidden="true">↓</span></a>
          <a className="secondary-button hero-button" href="#generators">Create a Document <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <div className="hero-mark" aria-hidden="true"><Image src={heroLogo} alt="" priority sizes="(max-width: 850px) 130px, 215px" /></div>
    </section>

    <section className="calculators-section" id="tools" aria-labelledby="calculators-title"><div className="shell">
      <div className="calculator-heading">
        <div><p className="kicker">Free calculators</p><h2 id="calculators-title">Know the numbers<br /><em>behind the job.</em></h2></div>
        <p>Free calculators for service-business pricing and profit decisions. Use them as much as you need. Work from labor rate and markup through job costing, break-even, and final job profit.</p>
      </div>
      <div className="calculator-list">
        {calculators.map((calculator, index) => <article className="calculator-card" id={calculator.id} key={calculator.id}>
          <div className="calculator-meta"><span>{String(index + 1).padStart(2, "0")} · Free to use</span></div>
          <p className="calculator-question">{calculator.question}</p>
          <h3>{calculator.name}</h3>
          <p className="calculator-lead">{calculator.description}</p>
          <ul className="calculator-features" aria-label={`${calculator.name} highlights`}>
            {calculator.features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
          <a className="calculator-button" href={calculator.url} target="_blank" rel="noreferrer">{calculator.cta} <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
        </article>)}
      </div>
    </div></section>

    <section className="tools-section" id="generators" aria-labelledby="generators-title"><div className="shell">
      <div className="section-heading"><div><p className="kicker">Document generators</p><h2 id="generators-title">Turn each stage into professional paperwork.</h2></div><p>Build the document the job needs, from the first quote through the final invoice. Every generator works independently—tools do not share or transfer your data.</p></div>
      <div className="workflow-block" aria-labelledby="workflow-title">
        <p className="workflow-label" id="workflow-title">A clear service workflow</p>
        <ol className="workflow">
          <li><span>01</span>Quote</li><li><span>02</span>Service Agreement</li><li><span>03</span>Change Order</li><li className="workflow-action"><span>04</span>Perform</li><li><span>05</span>Service Report</li><li><span>06</span>Invoice</li>
        </ol>
      </div>
      <div className="tool-list">
        {tools.map((tool, index) => <article className="tool-card" id={tool.id} key={tool.id}>
          <div className="tool-card-top"><span className="tool-number">{String(index + 1).padStart(2, "0")}</span><span className="status"><span aria-hidden="true" /> Ready to use</span></div>
          <div className="tool-content"><h3>{tool.name}</h3><p className="tool-value">{tool.value}</p><p>{tool.description}</p><ul className="tool-tags" aria-label={`${tool.name} highlights`}>{tool.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div>
          <a className="primary-button" href={tool.url} target="_blank" rel="noreferrer">{tool.cta} <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
        </article>)}
      </div>
    </div></section>

    <section className="professions-section" id="professions" aria-labelledby="professions-title"><div className="shell">
      <div className="professions-heading"><div><p className="kicker">Tools by profession</p><h2 id="professions-title">Find what fits<br /><em>your work.</em></h2></div><p>Start with the calculators and documents that make sense for your trade. One useful tool can serve more than one kind of business.</p></div>
      <div className="profession-card-grid">
        {professions.map((profession) => <Link className="profession-card" href={`/professions/${profession.slug}`} key={profession.slug}>
          <span className="profession-card-name">{profession.name}</span><span>{profession.cardDescription}</span><strong>View tools <span aria-hidden="true">→</span></strong>
        </Link>)}
      </div>
      <p className="more-professions">More professions coming as the collection grows.</p>
    </div></section>

  </main><SiteFooter /></>;
}
