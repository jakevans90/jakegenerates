import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { SITE_NAME, SITE_URL, SOCIAL_IMAGE } from "@/lib/site-metadata";

const pageUrl = `${SITE_URL}/guides/how-to-price-an-hvac-service-call`;
const publishedDate = "2026-10-09";
const pageTitle = "How to Price an HVAC Service Call";
const pageDescription =
  "Learn how to set a profitable HVAC service-call fee using loaded labor, dispatch, overhead, minimum charges, after-hours premiums, parts, and tax.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/guides/how-to-price-an-hvac-service-call" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: pageTitle,
    description:
      "A practical pricing framework for HVAC diagnostic fees, trip charges, minimums, after-hours work, loaded labor, and overhead.",
    siteName: SITE_NAME,
    publishedTime: publishedDate,
    modifiedTime: publishedDate,
    images: [SOCIAL_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [SOCIAL_IMAGE],
  },
};

const faqs = [
  {
    question: "What should an HVAC service-call fee include?",
    answer:
      "At minimum, it should recover the technician's loaded time for travel, setup, diagnosis, and closeout; the truck and dispatch cost; an appropriate share of company overhead; and the profit needed to keep the call worthwhile. Materials, repair labor, parts, tax, and after-hours premiums may be separate depending on your pricing model.",
  },
  {
    question: "Is a diagnostic fee the same as a repair price?",
    answer:
      "No. A diagnostic fee pays for getting a qualified technician to the property and identifying the problem. The repair price pays for the approved corrective work, including additional labor, parts, materials, and the margin built into that repair.",
  },
  {
    question: "Should an HVAC company waive the diagnostic fee when the customer approves the repair?",
    answer:
      "Only when the repair price can absorb the fee without giving away the diagnostic work or damaging the job's target margin. A full credit, partial credit, or no credit can all work if the policy is consistent, disclosed before dispatch, and tested against actual job economics.",
  },
  {
    question: "How should after-hours HVAC service be priced?",
    answer:
      "Build the premium from the extra cost and disruption of providing the service, such as overtime pay, on-call compensation, lower dispatch density, and increased operating risk. Apply either a clearly stated fixed surcharge or a multiplier to the eligible labor and service-call components.",
  },
  {
    question: "Should sales tax be added to an HVAC service call?",
    answer:
      "That depends on state and local rules and on whether labor, trip charges, diagnostic fees, parts, and materials are taxable in your jurisdiction. Configure your invoice and calculator from current guidance from your tax authority or tax professional rather than assuming every line is taxed the same way.",
  },
  {
    question: "How often should an HVAC contractor review the service-call price?",
    answer:
      "Review it at least annually and whenever wages, benefits, vehicle costs, insurance, software, rent, fuel, or billable utilization changes materially. Compare the model with completed-call data so the price reflects real travel and diagnostic time rather than estimates that have gone stale.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Price an HVAC Service Call",
  description:
    "A practical pricing framework for HVAC contractors covering diagnostic fees, trip charges, minimums, loaded labor, overhead, after-hours pricing, materials, and tax.",
  datePublished: publishedDate,
  dateModified: publishedDate,
  mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
  author: { "@type": "Organization", name: SITE_NAME, url: `${SITE_URL}/` },
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: { "@type": "ImageObject", url: SOCIAL_IMAGE.url },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "HVAC tools", item: `${SITE_URL}/professions/hvac` },
    { "@type": "ListItem", position: 3, name: "How to Price an HVAC Service Call", item: pageUrl },
  ],
};

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export default function HvacServiceCallPricingGuide() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <SiteHeader />
      <main>
        <article className="guide-page">
          <header className="guide-hero">
            <div className="guide-shell">
              <nav className="guide-breadcrumbs" aria-label="Breadcrumb">
                <ol>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/professions/hvac">HVAC tools</Link></li>
                  <li aria-current="page">Service-call pricing</li>
                </ol>
              </nav>
              <p className="kicker">HVAC pricing guide</p>
              <h1>How to Price an HVAC Service Call</h1>
              <p className="guide-deck">
                Set a service-call price that pays for the technician, truck, dispatch, and overhead before you quote the repair.
              </p>
              <div className="guide-answer" aria-labelledby="direct-answer-title">
                <p className="guide-answer-label" id="direct-answer-title">The short answer</p>
                <p>
                  Price an HVAC service call from the <strong>full cost of getting a qualified technician to the customer and completing a diagnosis</strong>—not from the technician&apos;s wage alone. Add loaded labor for travel and diagnostic time, dispatch and vehicle cost, overhead, and target profit. Then apply a minimum charge and any after-hours premium. Keep the diagnostic scope separate from the repair price so customers and technicians know exactly what the first charge covers.
                </p>
              </div>
              <a className="guide-primary-cta" href="https://hvac-service-call.jakegenerates.com/">
                Price your next call with the free HVAC Service Call Price Calculator <span aria-hidden="true">↗</span>
              </a>
              <p className="guide-meta">Published October 9, 2026 · For HVAC contractors and service managers</p>
            </div>
          </header>

          <div className="guide-layout guide-shell">
            <aside className="guide-toc" aria-label="On this page">
              <p>On this page</p>
              <ol>
                <li><a href="#components">Cost components</a></li>
                <li><a href="#labor">Loaded technician labor</a></li>
                <li><a href="#travel-overhead">Travel, dispatch, and overhead</a></li>
                <li><a href="#minimum-diagnostic">Minimum and diagnostic fees</a></li>
                <li><a href="#after-hours">After-hours pricing</a></li>
                <li><a href="#waive-fee">Waiving the fee</a></li>
                <li><a href="#tax-materials">Tax and materials</a></li>
                <li><a href="#formula">Formula and example</a></li>
                <li><a href="#mistakes">Common mistakes</a></li>
                <li><a href="#faqs">FAQs</a></li>
              </ol>
            </aside>

            <div className="guide-content">
              <section id="components">
                <p className="guide-section-number">01</p>
                <h2>Start with what the service call must pay for</h2>
                <p>
                  A service-call fee is the price of making the initial visit possible. It should recover the resources used before a repair begins and leave the gross profit your company needs. For most HVAC businesses, that means accounting for:
                </p>
                <ul className="guide-checklist">
                  <li>Technician travel, arrival, diagnosis, explanation, and closeout time</li>
                  <li>Payroll taxes, benefits, workers&apos; compensation, and other labor burden</li>
                  <li>Truck cost, fuel, maintenance, insurance, stocking, and dispatch</li>
                  <li>Office payroll, software, rent, marketing, licensing, and other overhead</li>
                  <li>Small diagnostic materials or consumables you routinely use</li>
                  <li>The profit margin required to reinvest, cover risk, and keep the call worthwhile</li>
                </ul>
                <p>
                  The fee does not have to show every component as a customer-facing line item. Your internal model can be detailed while the invoice uses a simple label such as <em>service and diagnostic fee</em>. What matters is that the selling price recovers the real cost.
                </p>
              </section>

              <section id="labor">
                <p className="guide-section-number">02</p>
                <h2>Use loaded technician labor—not hourly wage</h2>
                <p>
                  A $32-per-hour wage does not mean technician time costs the company $32 per hour. Employer payroll taxes, paid time off, health benefits, retirement contributions, workers&apos; compensation, uniforms, training, and other burden increase the cost. That total is the <strong>loaded labor cost</strong>.
                </p>
                <div className="guide-formula">
                  <span>Loaded labor cost per paid hour</span>
                  <strong>= wage + payroll burden + benefits + other direct labor costs</strong>
                </div>
                <p>
                  Next, adjust for billable utilization. A technician can be paid for eight hours while only five or six hours are recoverable across customer jobs. Meetings, restocking, callbacks, training, and gaps in the schedule still have to be funded. Use the <a href="https://labor-rate.jakegenerates.com/">Labor Rate Calculator</a> to turn payroll, burden, overhead, and realistic billable hours into a sustainable hourly rate.
                </p>
              </section>

              <section id="travel-overhead">
                <p className="guide-section-number">03</p>
                <h2>Recover travel, dispatch, and company overhead</h2>
                <p>
                  The call starts before the technician reaches the door. Include average drive time, dispatch coordination, customer communication, and the cost of operating the truck. Use an average route profile for standard calls, then create a clearly defined extended-service-area charge if unusually long trips would distort the base price.
                </p>
                <p>
                  Overhead also belongs in the model. Office salaries, rent, software, phones, insurance, marketing, licenses, and professional fees support every call even though they are not visible at the thermostat. Allocate overhead through your labor rate, as a per-call amount, or with another consistent method—but do not add it twice.
                </p>
                <div className="guide-note">
                  <strong>Practical check:</strong> Use completed-call data to find actual average travel and diagnostic time. A clean formula built on an unrealistic 20-minute visit will still produce the wrong price.
                </div>
              </section>

              <section id="minimum-diagnostic">
                <p className="guide-section-number">04</p>
                <h2>Set a minimum charge and define the diagnostic fee</h2>
                <p>
                  A minimum charge protects the company when the formula produces a price below the amount required to put a truck on the road. It is especially important for quick findings, no-fault calls, customer cancellations after arrival, and visits where no repair is approved.
                </p>
                <p>
                  Define the included diagnostic scope in plain language: for example, one system, standard business hours, and up to a stated amount of initial diagnostic time. Decide what happens when diagnosis becomes unusually involved—such as intermittent faults, multiple systems, concealed components, or manufacturer support—and communicate that policy before the included time is exceeded.
                </p>
                <h3>Diagnostic fee versus repair price</h3>
                <p>
                  The diagnostic fee covers the initial visit and the professional work required to identify the likely fault. The repair price covers the corrective work after authorization. That second price may include additional labor, parts, materials, refrigerant, equipment, permits, disposal, warranty reserve, overhead, and profit.
                </p>
                <p>
                  For repeatable repairs, move the approved work into a consistent price book with the <a href="https://hvac-flat-rate.jakegenerates.com/">HVAC Flat Rate Repair Pricing Calculator</a>. Keeping the service call separate prevents travel and diagnosis from being hidden inside every repair task.
                </p>
              </section>

              <section id="after-hours">
                <p className="guide-section-number">05</p>
                <h2>Build an after-hours premium from the extra cost</h2>
                <p>
                  Evening, weekend, and holiday calls disrupt the schedule and may trigger overtime, on-call pay, guaranteed minimum hours, inefficient routing, or extra management coverage. The premium should recover those costs and compensate the company for reserving emergency capacity.
                </p>
                <p>
                  Two common approaches are a fixed after-hours surcharge or a multiplier applied to the service-call and eligible labor components. Whichever you choose, define the covered hours, disclose the amount before dispatch, and state whether the premium also applies to repair labor. Avoid a vague &ldquo;emergency fee&rdquo; that the dispatcher cannot explain consistently.
                </p>
              </section>

              <section id="waive-fee">
                <p className="guide-section-number">06</p>
                <h2>Waive or credit the diagnostic fee deliberately</h2>
                <p>
                  &ldquo;Free with repair&rdquo; is a pricing decision, not a free visit. If you credit the diagnostic fee, the repair price must still recover the initial labor, travel, dispatch, overhead, and target profit. Otherwise, high-close-rate technicians can appear busy while the company under-recovers its costs.
                </p>
                <p>Choose a policy that fits your market and price structure:</p>
                <ul>
                  <li><strong>No credit:</strong> the customer pays for diagnosis and the repair separately.</li>
                  <li><strong>Partial credit:</strong> a fixed amount is applied to an approved repair above a stated threshold.</li>
                  <li><strong>Full credit:</strong> the fee is absorbed into qualifying repair pricing.</li>
                </ul>
                <p>
                  Put the rule in writing, train dispatchers and technicians to describe it the same way, and track the resulting margin. Do not improvise the waiver at the kitchen table.
                </p>
              </section>

              <section id="tax-materials">
                <p className="guide-section-number">07</p>
                <h2>Handle materials, parts, and tax separately where appropriate</h2>
                <p>
                  Small consumables can be included in the base fee if your historical average supports it. Larger diagnostic materials, refrigerant, specialty access equipment, and all repair parts should usually be priced explicitly so unusual calls do not erode the service-call margin.
                </p>
                <p>
                  Tax treatment varies by state, locality, and type of work. Labor, trip charges, diagnostic fees, parts, and materials may not all follow the same rule. Confirm the current treatment with your tax authority or tax professional, configure each invoice item correctly, and avoid applying one blanket tax assumption across every jurisdiction.
                </p>
              </section>

              <section id="formula">
                <p className="guide-section-number">08</p>
                <h2>Use a pricing formula you can audit</h2>
                <div className="guide-formula guide-formula-large">
                  <span>Required service-call price</span>
                  <strong>= call cost ÷ (1 − target gross margin)</strong>
                  <small>Call cost = loaded travel and diagnostic labor + vehicle/dispatch cost + allocated overhead + included materials</small>
                </div>
                <p>
                  This is a margin formula, not a markup formula. Dividing $100 of cost by 0.70 produces a $142.86 selling price at a 30% gross margin. Simply adding 30% markup would produce $130 and only a 23.1% gross margin.
                </p>
                <h3>Worked example</h3>
                <p>Assume a standard residential call uses the following internal estimates:</p>
                <div className="guide-example" role="region" aria-label="HVAC service-call pricing example" tabIndex={0}>
                  <table>
                    <thead><tr><th scope="col">Cost component</th><th scope="col">Calculation</th><th scope="col">Cost</th></tr></thead>
                    <tbody>
                      <tr><th scope="row">Travel and diagnostic labor</th><td>1.5 hours × $42 loaded cost</td><td>$63.00</td></tr>
                      <tr><th scope="row">Truck and dispatch</th><td>Average per call</td><td>$24.00</td></tr>
                      <tr><th scope="row">Allocated overhead</th><td>Average per call</td><td>$33.00</td></tr>
                      <tr><th scope="row">Included consumables</th><td>Average allowance</td><td>$5.00</td></tr>
                      <tr className="guide-example-total"><th scope="row">Total call cost</th><td>$63 + $24 + $33 + $5</td><td>$125.00</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  At a 30% target gross margin, the required price is <strong>$125 ÷ 0.70 = $178.57</strong>. The contractor might publish a standard diagnostic fee of <strong>$179</strong> or round to a market-tested price that remains above the company&apos;s minimum. An after-hours surcharge, repair parts and labor, and applicable tax would be added according to the written policy.
                </p>
                <p>
                  Run your own assumptions through the <a href="https://hvac-service-call.jakegenerates.com/">HVAC Service Call Price Calculator</a>, then review completed jobs with the <a href="https://job-profit.jakegenerates.com/">Job Profit Calculator</a>. The model sets the price; job history tells you whether the assumptions are holding up.
                </p>
              </section>

              <section id="mistakes">
                <p className="guide-section-number">09</p>
                <h2>Avoid these common service-call pricing mistakes</h2>
                <div className="guide-mistakes">
                  <article><h3>Copying a competitor&apos;s fee</h3><p>You do not know their labor burden, route density, overhead, scope, or whether their price is profitable.</p></article>
                  <article><h3>Charging for wrench time only</h3><p>Travel, dispatch, diagnosis, explanation, documentation, and payment all consume capacity.</p></article>
                  <article><h3>Confusing markup with margin</h3><p>A 30% markup on cost does not create a 30% gross margin. Use the formula that matches your target.</p></article>
                  <article><h3>Hiding the policy from dispatch</h3><p>Customers should hear the fee, scope, after-hours premium, and credit policy before the truck rolls.</p></article>
                  <article><h3>Double-counting overhead</h3><p>If overhead is already built into the labor rate, do not add the same cost again as a per-call allocation.</p></article>
                  <article><h3>Never checking actual calls</h3><p>Compare estimated time and cost with completed work, callbacks, conversion rate, and gross margin.</p></article>
                </div>
              </section>

              <aside className="guide-cta" aria-labelledby="guide-cta-title">
                <p className="kicker">Put the framework to work</p>
                <h2 id="guide-cta-title">Calculate a service-call price from your own numbers.</h2>
                <p>Enter labor, travel, minimums, after-hours premiums, materials, parts, and tax. Your inputs stay in your browser.</p>
                <a className="guide-primary-cta" href="https://hvac-service-call.jakegenerates.com/">Open the HVAC Service Call Price Calculator <span aria-hidden="true">↗</span></a>
              </aside>

              <section id="next-step">
                <p className="guide-section-number">10</p>
                <h2>Carry the approved price into the rest of the job</h2>
                <p>
                  Once the customer approves the work, use the <a href="https://service-quotes.jakegenerates.com/">Service Quote Generator</a> to document scope and price clearly. For equipment changeouts, build the full job economics with the <a href="https://hvac-replacement.jakegenerates.com/">HVAC Replacement Estimate Calculator</a>. You can find these and the rest of the trade-specific workflow on the <Link href="/professions/hvac">HVAC tools hub</Link>.
                </p>
              </section>

              <section id="faqs" className="guide-faqs">
                <p className="guide-section-number">11</p>
                <h2>HVAC service-call pricing FAQs</h2>
                {faqs.map(({ question, answer }) => (
                  <details key={question}>
                    <summary>{question}</summary>
                    <p>{answer}</p>
                  </details>
                ))}
              </section>

              <p className="guide-disclaimer">
                This guide is general business information, not tax, legal, or accounting advice. Verify requirements for your jurisdiction and company.
              </p>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
