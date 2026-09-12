import Image from "next/image";

import { SiteFooter, SiteHeader } from "@/components/site-shell";
import heroLogo from "../../public/brand/jg-circle.png";

const tools = [
  { number: "01", id: "service-quote-generator", name: "Service Quote Generator", value: "Price the work and send a polished quote.", description: "Build itemized service quotes with your branding, clear totals, and a professional PDF ready to share.", features: ["Parts & labor", "Pricing & tax", "Branded PDF"], cta: "Create a Quote", url: "https://service-quotes.jakegenerates.com/" },
  { number: "02", id: "change-order-generator", name: "Change Order Generator", value: "Keep scope and price changes clear.", description: "Document additions or deductions, show the revised job total, and capture an approval in one clean PDF.", features: ["Add & deduct", "Revised total", "Approval section"], cta: "Create a Change Order", url: "https://change-orders.jakegenerates.com/" },
  { number: "03", id: "service-report-generator", name: "Service Report Generator", value: "Turn field notes into a client-ready report.", description: "Organize the work performed, findings, and recommendations into a consistent professional record.", features: ["Work performed", "Findings", "Professional PDF"], cta: "Create a Service Report", url: process.env.NEXT_PUBLIC_SERVICE_REPORT_URL || "https://service-reports.jakegenerates.com" },
  { number: "04", id: "service-invoice-generator", name: "Service Invoice Generator", value: "Turn completed work into a clear invoice.", description: "Create an itemized service invoice with payment details, balance due, your branding, and a shareable PDF.", features: ["Parts & labor", "Payment tracking", "Branded PDF"], cta: "Create an Invoice", url: "https://service-invoices.jakegenerates.com/" },
];

export default function Home() {
  return <><SiteHeader /><main>
    <section className="hero shell">
      <div className="hero-content">
        <div className="eyebrow"><span aria-hidden="true" /> Practical software, made by Jake</div>
        <h1>Service paperwork.<br /><em>Done faster.</em></h1>
        <p className="hero-copy">Create polished quotes, change orders, service reports, and invoices with focused tools built for real service work.</p>
        <a className="primary-button hero-button" href="#tools">Choose a Tool <span aria-hidden="true">↓</span></a>
      </div>
      <div className="hero-mark" aria-hidden="true"><Image src={heroLogo} alt="" priority sizes="(max-width: 850px) 130px, 215px" /></div>
    </section>

    <section className="tools-section" id="tools"><div className="shell">
      <div className="section-heading"><div><p className="kicker">Available now</p><h2>One job. Four focused tools.</h2></div><p>Use the tool that matches the document in front of you. Each works independently—no account or connected workflow required.</p></div>
      <div className="workflow-block" aria-labelledby="workflow-title">
        <p className="workflow-label" id="workflow-title">A clear service workflow</p>
        <ol className="workflow">
          <li><span>01</span>Quote</li><li><span>02</span>Change Order</li><li className="workflow-action"><span>03</span>Perform</li><li><span>04</span>Document</li><li><span>05</span>Invoice</li>
        </ol>
      </div>
      <div className="tool-list">
        {tools.map((tool) => <article className="tool-card" id={tool.id} key={tool.id}>
          <div className="tool-card-top"><span className="tool-number">{tool.number}</span><span className="status"><span aria-hidden="true" /> Ready to use</span></div>
          <div className="tool-content"><h3>{tool.name}</h3><p className="tool-value">{tool.value}</p><p>{tool.description}</p><ul className="tool-tags" aria-label={`${tool.name} highlights`}>{tool.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div>
          <a className="primary-button" href={tool.url} target="_blank" rel="noreferrer">{tool.cta} <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
        </article>)}
      </div>
    </div></section>

    <section className="coming-soon shell"><p className="kicker">On the workbench</p><div className="coming-grid"><h2>More useful tools,<br /><em>when they&apos;re ready.</em></h2><p>We&apos;re building a small, thoughtful collection—not a crowded toolbox. New tools will earn their place by saving time on real work.</p></div></section>
  </main><SiteFooter /></>;
}
