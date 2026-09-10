import { SiteFooter, SiteHeader } from "@/components/site-shell";

const serviceReportUrl = process.env.NEXT_PUBLIC_SERVICE_REPORT_URL || "https://service-reports.jakegenerates.com";

export default function Home() {
  return <><SiteHeader /><main>
    <section className="hero shell">
      <div className="eyebrow"><span aria-hidden="true" /> Practical software, made by Jake</div>
      <h1>Less busywork.<br /><em>More done.</em></h1>
      <p className="hero-copy">JakeGenerates is a growing collection of focused tools that make repetitive work faster, simpler, and a little less tedious.</p>
      <a className="text-link" href="#tools">See the tools <span aria-hidden="true">↓</span></a>
      <div className="hero-mark" aria-hidden="true"><span>JG</span><div className="hero-chip">Built for real work</div></div>
    </section>
    <section className="tools-section" id="tools"><div className="shell">
      <div className="section-heading"><div><p className="kicker">Available now</p><h2>One useful tool at a time.</h2></div><p>No bloated platforms. Just practical software that solves a specific problem well.</p></div>
      <article className="tool-card" id="service-report-generator">
        <div className="tool-number">01</div>
        <div className="tool-content"><div className="status"><span aria-hidden="true" /> Ready to use</div><h3>Service Report Generator</h3><p>Turn service notes into a clean, professional report without rebuilding the same document from scratch.</p><div className="tool-tags" aria-label="Tool features"><span>Fast</span><span>Consistent</span><span>Field-ready</span></div></div>
        <a className="primary-button" href={serviceReportUrl}>Open Tool <span aria-hidden="true">↗</span></a>
      </article>
    </div></section>
    <section className="coming-soon shell"><p className="kicker">On the workbench</p><div className="coming-grid"><h2>More tools<br /><em>coming soon.</em></h2><p>New generators, calculators, and workflow helpers are in the works. Each one starts with the same question: can this save someone time every week?</p></div></section>
  </main><SiteFooter /></>;
}
