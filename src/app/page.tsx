import Image from "next/image";

import { SiteFooter, SiteHeader } from "@/components/site-shell";
import heroLogo from "../../public/brand/jg-circle.png";

const tools = [
  { number: "01", id: "service-quote-generator", name: "Service Quote Generator", value: "Price the work and send a polished quote.", description: "Build itemized service quotes with your branding, clear totals, and a professional PDF ready to share.", features: ["Parts & labor", "Pricing & tax", "Branded PDF"], cta: "Create a Quote", url: "https://service-quotes.jakegenerates.com/" },
  { number: "02", id: "service-agreement-generator", name: "Service Agreement Generator", value: "Set recurring service expectations clearly.", description: "Create a clear, professional recurring-service agreement for maintenance and support work.", features: ["Coverage & exclusions", "Flexible service pricing", "Renewal & termination terms", "Branded PDF"], cta: "Create a Service Agreement", url: "https://service-agreements.jakegenerates.com/" },
  { number: "03", id: "change-order-generator", name: "Change Order Generator", value: "Keep scope and price changes clear.", description: "Document additions or deductions, show the revised job total, and capture an approval in one clean PDF.", features: ["Add & deduct", "Revised total", "Approval section"], cta: "Create a Change Order", url: "https://change-orders.jakegenerates.com/" },
  { number: "04", id: "service-report-generator", name: "Service Report Generator", value: "Turn field notes into a client-ready report.", description: "Organize the work performed, findings, and recommendations into a consistent professional record.", features: ["Work performed", "Findings", "Professional PDF"], cta: "Create a Service Report", url: process.env.NEXT_PUBLIC_SERVICE_REPORT_URL || "https://service-reports.jakegenerates.com" },
  { number: "05", id: "service-invoice-generator", name: "Service Invoice Generator", value: "Turn completed work into a clear invoice.", description: "Create an itemized service invoice with payment details, balance due, your branding, and a shareable PDF.", features: ["Parts & labor", "Payment tracking", "Branded PDF"], cta: "Create an Invoice", url: "https://service-invoices.jakegenerates.com/" },
];

const calculators = [
  {
    number: "01",
    question: "What should I charge?",
    id: "labor-rate-calculator",
    name: "Labor Rate Calculator",
    description: "Find the hourly rate you need to charge to cover labor, overhead, non-billable time, and your target margin.",
    features: ["Loaded labor cost", "Billable utilization", "Overhead per billable hour", "Break-even & target-margin rates", "Current-rate comparison", "Browser-local draft recovery"],
    cta: "Calculate Labor Rate",
    url: "https://labor-rate.jakegenerates.com/",
  },
  {
    number: "02",
    question: "How should I price parts and labor?",
    id: "parts-labor-markup-calculator",
    name: "Parts & Labor Markup Calculator",
    description: "Turn cost into a selling price and compare markup, margin, and target-margin pricing before you quote the job.",
    features: ["Parts & labor pricing", "Markup vs. margin", "Three pricing modes", "Combined scenario & local drafts"],
    cta: "Calculate Markup & Margin",
    url: "https://markup.jakegenerates.com/",
  },
  {
    number: "03",
    question: "What will this job cost and what should I charge?",
    id: "job-cost-estimator",
    name: "Job Cost Estimator",
    description: "Estimate your true job cost, recommended selling price, gross profit, and margin before you quote the work.",
    features: ["Labor cost & sell rate", "Multiple parts & materials", "Travel, subs, equipment & fees", "Fixed or percentage overhead", "Target-margin or markup pricing", "Proposed-quote comparison", "Browser-local draft recovery"],
    cta: "Estimate Job Cost",
    url: "https://job-cost.jakegenerates.com/",
  },
  {
    number: "04",
    question: "What do I need to break even?",
    id: "break-even-calculator",
    name: "Break-Even Calculator",
    description: "See how many jobs, how much revenue, or how many billable hours you need to cover costs and hit a profit target.",
    features: ["Per-job break-even", "Billable-hours break-even", "Contribution margin", "Target-profit jobs, hours & revenue", "Local draft recovery"],
    cta: "Calculate Break-Even",
    url: "https://break-even.jakegenerates.com/",
  },
  {
    number: "05",
    question: "What did the job actually make?",
    id: "job-profit-calculator",
    name: "Job Profit Calculator",
    description: "See what a job actually made after labor, parts, subcontractors, travel, processing fees, and overhead.",
    features: ["Full job cost", "Profit & margin", "Break-even revenue", "Target pricing"],
    cta: "Calculate Job Profit",
    url: "https://job-profit.jakegenerates.com/",
  },
];

export default function Home() {
  return <><SiteHeader /><main>
    <section className="hero shell">
      <div className="hero-content">
        <div className="eyebrow"><span aria-hidden="true" /> Practical software, made by Jake</div>
        <h1>Service work.<br /><em>Done smarter.</em></h1>
        <p className="hero-copy">Make confident service-business decisions, then turn the work into polished professional documents with focused tools built for the job.</p>
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
        {calculators.map((calculator) => <article className="calculator-card" id={calculator.id} key={calculator.id}>
          <div className="calculator-meta"><span>{calculator.number} · Free to use</span><span className="calculator-status"><span aria-hidden="true" /> Ready to use</span></div>
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
