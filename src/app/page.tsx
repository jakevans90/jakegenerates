import Image from "next/image";

import { SiteFooter, SiteHeader } from "@/components/site-shell";
import heroLogo from "../../public/brand/jg-circle.png";

const serviceReportUrl = process.env.NEXT_PUBLIC_SERVICE_REPORT_URL || "https://service-reports.jakegenerates.com";
const serviceQuoteUrl = "https://service-quotes.jakegenerates.com/";
const changeOrderUrl = "https://change-orders.jakegenerates.com/";
const serviceInvoiceUrl = "https://service-invoices.jakegenerates.com/";

export default function Home() {
  return <><SiteHeader /><main>
    <section className="hero shell">
      <div className="eyebrow"><span aria-hidden="true" /> Practical software, made by Jake</div>
      <h1>Less busywork.<br /><em>More done.</em></h1>
      <p className="hero-copy">JakeGenerates is a growing collection of focused tools that make repetitive work faster, simpler, and a little less tedious.</p>
      <a className="text-link" href="#tools">See the tools <span aria-hidden="true">↓</span></a>
      <div className="hero-mark" aria-hidden="true"><Image src={heroLogo} alt="" priority sizes="(max-width: 850px) 130px, 215px" /></div>
    </section>
    <section className="tools-section" id="tools"><div className="shell">
      <div className="section-heading"><div><p className="kicker">Available now</p><h2>Practical tools for service work.</h2></div><p>Quote the work, document changes and completed service, and invoice the customer—each tool stays focused on doing its part well.</p></div>
      <div className="workflow" aria-label="Service workflow"><span>Quote</span><span aria-hidden="true">→</span><span>Change Order</span><span aria-hidden="true">→</span><span>Perform</span><span aria-hidden="true">→</span><span>Document</span><span aria-hidden="true">→</span><span>Invoice</span></div>
      <div className="tool-list">
        <article className="tool-card" id="service-quote-generator">
          <div className="tool-number">01</div>
          <div className="tool-content"><div className="status"><span aria-hidden="true" /> Ready to use</div><h3>Service Quote Generator</h3><p className="tool-value">Build a clean professional service quote in minutes.</p><p>Create detailed quotes with parts and service line items, discounts, fees, markup, tax, branding, templates, quote numbering, and PDF export.</p><div className="tool-tags" aria-label="Service Quote Generator features"><span>Parts &amp; service</span><span>SKU / part numbers</span><span>Flexible discounts</span><span>Fees, markup &amp; tax</span><span>Quote numbering</span><span>Reusable templates</span><span>Company branding</span><span>PDF export</span><span>Draft recovery</span></div></div>
          <a className="primary-button" href={serviceQuoteUrl} target="_blank" rel="noreferrer">Create a Service Quote <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
        </article>
        <article className="tool-card" id="change-order-generator">
          <div className="tool-number">02</div>
          <div className="tool-content"><div className="status"><span aria-hidden="true" /> Ready to use</div><h3>Change Order Generator</h3><p className="tool-value">Document scope and price changes clearly before or during service work.</p><p>Document added or removed scope, parts, labor, discounts, fees, tax, approvals, and revised job totals in a professional change order.</p><div className="tool-tags" aria-label="Change Order Generator features"><span>Add &amp; deduct items</span><span>Parts &amp; service</span><span>SKU / part numbers</span><span>Percentage or fixed discounts</span><span>Service, travel &amp; misc. fees</span><span>Tax calculations</span><span>Original approved amount</span><span>Change amount &amp; revised total</span><span>Approval section</span><span>Reusable templates</span><span>Company branding</span><span>PDF export</span><span>Draft recovery</span></div></div>
          <a className="primary-button" href={changeOrderUrl} target="_blank" rel="noreferrer">Create a Change Order <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
        </article>
        <article className="tool-card" id="service-report-generator">
          <div className="tool-number">03</div>
          <div className="tool-content"><div className="status"><span aria-hidden="true" /> Ready to use</div><h3>Service Report Generator</h3><p>Turn service notes into a clean, professional report without rebuilding the same document from scratch.</p><div className="tool-tags" aria-label="Service Report Generator features"><span>Fast</span><span>Consistent</span><span>Field-ready</span></div></div>
          <a className="primary-button" href={serviceReportUrl} target="_blank" rel="noreferrer">Open Tool <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
        </article>
        <article className="tool-card" id="service-invoice-generator">
          <div className="tool-number">04</div>
          <div className="tool-content"><div className="status"><span aria-hidden="true" /> Ready to use</div><h3>Service Invoice Generator</h3><p className="tool-value">Turn completed work into a clean professional invoice in minutes.</p><p>Create professional service invoices with detailed parts and labor, discounts, fees, tax, payment tracking, branding, reusable templates, invoice numbering, and PDF export.</p><div className="tool-tags" aria-label="Service Invoice Generator features"><span>Parts &amp; service</span><span>SKU / part numbers</span><span>Flexible discounts</span><span>Service, travel &amp; misc. fees</span><span>Tax calculations</span><span>Invoice numbering</span><span>Paid &amp; balance due</span><span>Reusable templates</span><span>Company branding</span><span>PDF export</span><span>Draft recovery</span></div></div>
          <a className="primary-button" href={serviceInvoiceUrl} target="_blank" rel="noreferrer">Create a Service Invoice <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
        </article>
      </div>
    </div></section>
    <section className="coming-soon shell"><p className="kicker">On the workbench</p><div className="coming-grid"><h2>More tools coming,<br /><em>carefully chosen.</em></h2><p>New generators, calculators, and workflow helpers are in the works. Each one starts with the same question: can this save someone time every week?</p></div></section>
  </main><SiteFooter /></>;
}
