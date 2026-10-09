import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { SITE_NAME, SITE_URL, SOCIAL_IMAGE } from "@/lib/site-metadata";

const pageUrl = `${SITE_URL}/guides/how-to-price-an-hvac-maintenance-agreement`;
const publishedDate = "2026-10-09";
const pageTitle = "How to Price an HVAC Maintenance Agreement";
const pageDescription =
  "Learn how to price profitable HVAC maintenance agreements using visit frequency, loaded labor, travel, materials, overhead, margin, and multi-system costs.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/guides/how-to-price-an-hvac-maintenance-agreement" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: pageTitle,
    description:
      "A practical pricing framework for HVAC service agreements, including visits, loaded labor, travel, filters, parts allowances, overhead, margin, and monthly billing.",
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
    question: "How much should an HVAC maintenance agreement cost?",
    answer:
      "There is no universal price. Start with the annual cost of every promised visit: loaded technician labor, travel and truck expense, routine materials, administration, overhead, and any included filters or repair-parts allowance. Divide that cost by one minus the target gross margin, then test the result against completed-agreement data and the value of the benefits you provide.",
  },
  {
    question: "Should an HVAC maintenance agreement be billed annually or monthly?",
    answer:
      "Either can work. Annual prepayment improves cash flow and reduces collection work. Monthly billing lowers the customer’s entry cost and supports recurring revenue, but it adds processing fees, failed-payment follow-up, and cancellation risk. Price the billing method so the annual revenue still covers those costs and the full promised scope.",
  },
  {
    question: "How many visits should an HVAC service agreement include?",
    answer:
      "Two visits per year—typically a cooling-season visit and a heating-season visit—are common for residential split systems, but the right frequency depends on equipment type, climate, operating hours, manufacturer guidance, and the scope you sell. Price the actual number and duration of visits promised rather than assuming every plan needs the same schedule.",
  },
  {
    question: "How should an HVAC contractor price a second system?",
    answer:
      "Build an incremental cost for each additional system. Some travel and account-administration cost is shared, but inspection time, maintenance labor, filters, materials, and parts exposure usually increase. A second-system discount is reasonable only when it comes from those shared costs, not from ignoring the extra work.",
  },
  {
    question: "Should filters and repair parts be included in a maintenance agreement?",
    answer:
      "Include them only when the agreement defines the type, quantity, size, allowance, and exclusions. Routine one-inch filters may be predictable enough to bundle. Specialty media, UV lamps, humidifier pads, refrigerant, motors, and major repair parts are usually better handled with a stated allowance, member discount, or separate authorization.",
  },
  {
    question: "What gross margin should an HVAC maintenance agreement target?",
    answer:
      "The right target depends on your labor efficiency, route density, renewal rate, included benefits, and whether the plan is expected to make money on its own or support later service and replacement work. Choose the target from your company’s financial plan, then verify it using actual agreement revenue and cost instead of relying on an industry rule of thumb.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Price an HVAC Maintenance Agreement",
  description:
    "A practical pricing framework for HVAC contractors covering visit frequency, loaded labor, travel, materials, administration, overhead, gross margin, monthly billing, and multi-system pricing.",
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
    { "@type": "ListItem", position: 3, name: "How to Price an HVAC Maintenance Agreement", item: pageUrl },
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

export default function HvacMaintenanceAgreementPricingGuide() {
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
                  <li aria-current="page">Maintenance-agreement pricing</li>
                </ol>
              </nav>
              <p className="kicker">HVAC pricing guide</p>
              <h1>How to Price an HVAC Maintenance Agreement</h1>
              <p className="guide-deck">
                Turn the work you promise each year into a recurring price that covers every visit and protects your margin.
              </p>
              <div className="guide-answer" aria-labelledby="direct-answer-title">
                <p className="guide-answer-label" id="direct-answer-title">The short answer</p>
                <p>
                  Price an HVAC maintenance agreement from the <strong>annual cost of delivering the complete promised scope</strong>. Estimate each visit’s loaded labor, travel, truck cost, materials, filters, and administration; add any annual parts allowance and a consistent share of overhead; then divide the total cost by one minus your target gross margin. Adjust for additional systems and the real cost of monthly billing. Do not set the plan price from a competitor’s flyer or hope future repairs will make an underpriced agreement profitable.
                </p>
              </div>
              <a className="guide-primary-cta" href="https://hvac-maintenance.jakegenerates.com/">
                Price your plan with the free HVAC Maintenance Agreement Pricing Calculator <span aria-hidden="true">↗</span>
              </a>
              <p className="guide-meta">Published October 9, 2026 · For HVAC contractors and service managers</p>
            </div>
          </header>

          <div className="guide-layout guide-shell">
            <aside className="guide-toc" aria-label="On this page">
              <p>On this page</p>
              <ol>
                <li><a href="#scope">Scope and visit frequency</a></li>
                <li><a href="#labor">Loaded technician labor</a></li>
                <li><a href="#visit-costs">Travel, materials, and admin</a></li>
                <li><a href="#overhead">Overhead allocation</a></li>
                <li><a href="#margin">Margin versus markup</a></li>
                <li><a href="#billing">Annual versus monthly</a></li>
                <li><a href="#multi-system">Multi-system homes</a></li>
                <li><a href="#included-items">Filters and repair parts</a></li>
                <li><a href="#formula">Formula and example</a></li>
                <li><a href="#mistakes">Common mistakes</a></li>
                <li><a href="#faqs">FAQs</a></li>
              </ol>
            </aside>

            <div className="guide-content">
              <section id="scope">
                <p className="guide-section-number">01</p>
                <h2>Define the scope before you choose a price</h2>
                <p>
                  A maintenance agreement is a promise about future work. Price that promise only after the plan states what the customer receives. Start with the number of scheduled visits, the equipment covered, the checklist for each visit, and the time your technician is expected to spend on site.
                </p>
                <ul className="guide-checklist">
                  <li>Cooling, heating, or combined seasonal visits</li>
                  <li>One system or a defined number of systems and accessories</li>
                  <li>Inspection, cleaning, testing, documentation, and customer review</li>
                  <li>Included filters, routine materials, or parts allowances</li>
                  <li>Priority scheduling, repair discounts, or waived service-call fees</li>
                  <li>Exclusions, renewal terms, cancellation rules, and unused-visit policy</li>
                </ul>
                <p>
                  Two visits per year are common for residential heating and cooling equipment, but they are not automatically correct for every plan. Climate, equipment type, operating hours, manufacturer guidance, and customer segment can justify a different frequency. More visits create more value only when they serve a clear maintenance purpose and the price recovers the additional work.
                </p>
              </section>

              <section id="labor">
                <p className="guide-section-number">02</p>
                <h2>Build each visit from loaded technician labor</h2>
                <p>
                  Do not multiply visit time by the technician’s base wage. The company also pays payroll taxes, benefits, paid time off, workers’ compensation, training, uniforms, and other direct labor costs. Together, those costs create the loaded labor rate.
                </p>
                <div className="guide-formula">
                  <span>Annual maintenance labor cost</span>
                  <strong>= visits × labor hours per visit × loaded labor cost per hour</strong>
                </div>
                <p>
                  Include setup, inspection, maintenance, documentation, and the customer conversation in the visit time. If travel and post-visit administration are tracked as labor, include those hours too. The <a href="https://labor-rate.jakegenerates.com/">Labor Rate Calculator</a> can help you convert wages, burden, overhead, and realistic billable utilization into a sustainable hourly rate.
                </p>
              </section>

              <section id="visit-costs">
                <p className="guide-section-number">03</p>
                <h2>Add travel, materials, and administration</h2>
                <p>
                  A tune-up consumes capacity before and after the technician is at the equipment. Include average drive time or a per-visit truck cost, fuel and vehicle wear, scheduling, appointment reminders, plan setup, payment processing, visit documentation, and renewal communication.
                </p>
                <p>
                  Add the routine materials that the checklist consumes: coil cleaner, drain treatment, electrical consumables, cleaning supplies, tags, and other predictable items. Use historical averages when possible. A two-visit plan should normally carry two visit-level allowances rather than one annual guess that quietly assumes the second trip is free.
                </p>
                <div className="guide-note">
                  <strong>Route-density check:</strong> Dense maintenance routes can reduce drive time per visit. If your model assumes that efficiency, verify that dispatch can actually group the calls. Do not price today’s scattered route as if it were tomorrow’s perfect route.
                </div>
              </section>

              <section id="overhead">
                <p className="guide-section-number">04</p>
                <h2>Allocate overhead once, using a consistent method</h2>
                <p>
                  Office payroll, rent, insurance, software, phones, marketing, licensing, and management support every agreement even though they do not appear on a maintenance checklist. The plan has to carry an appropriate share of those costs.
                </p>
                <p>
                  You can allocate overhead through a fully burdened hourly rate, a fixed amount per agreement, or a percentage of direct cost. Each method can work if it is grounded in your company numbers and used consistently. The important control is to avoid both omissions and double counting. If overhead is already included in the labor rate, do not add the same allocation again at the agreement level.
                </p>
              </section>

              <section id="margin">
                <p className="guide-section-number">05</p>
                <h2>Use gross margin, not a look-alike markup</h2>
                <p>
                  Markup measures profit against cost. Gross margin measures gross profit against selling price. They are not interchangeable. If an agreement costs $300 to deliver and you add a 30% markup, the price is $390 and the gross margin is only 23.1%.
                </p>
                <div className="guide-formula guide-formula-large">
                  <span>Target-margin price</span>
                  <strong>= total annual agreement cost ÷ (1 − target gross margin)</strong>
                  <small>At a 35% target margin, divide annual cost by 0.65.</small>
                </div>
                <p>
                  Choose the target from your financial plan and the role the agreement plays in the business. Some contractors require the plan to meet a stand-alone margin target. Others accept a lower plan margin because members retain longer or buy more repair and replacement work. Either approach should be intentional and measured—not used to excuse a price that does not recover known costs.
                </p>
              </section>

              <section id="billing">
                <p className="guide-section-number">06</p>
                <h2>Price annual and monthly billing from the same economics</h2>
                <p>
                  Annual prepayment supplies cash before the work is performed, reduces failed-payment follow-up, and simplifies collection. Monthly billing lowers the customer’s upfront commitment and can make the plan feel easier to keep, but twelve transactions can add processing cost, account maintenance, delinquency work, and cancellation risk.
                </p>
                <p>
                  First calculate the annual price required for the scope. Then set the payment options. Dividing the annual price by twelve is reasonable only when the monthly program does not create material extra cost. Otherwise, add a modest monthly-billing premium or preserve an annual-pay discount. State the minimum term, cancellation process, renewal method, and treatment of services already received in the <a href="https://service-agreements.jakegenerates.com/">Service Agreement Generator</a> so the payment schedule matches the contract.
                </p>
              </section>

              <section id="multi-system">
                <p className="guide-section-number">07</p>
                <h2>Price multi-system homes by incremental cost</h2>
                <p>
                  The second system should not automatically cost the same as the first, but it should not be nearly free either. The visit shares travel, scheduling, and some customer communication. It still requires equipment-specific inspection time, maintenance labor, filters, materials, documentation, and greater parts exposure.
                </p>
                <p>
                  Build a base price for the first system and an add-on price for each additional system. The add-on can exclude costs that are truly shared while retaining every cost that increases with the work. Separate add-ons may be appropriate for mini-split heads, boilers, humidifiers, air cleaners, or other accessories whose service time differs from a standard split system.
                </p>
              </section>

              <section id="included-items">
                <p className="guide-section-number">08</p>
                <h2>Define included filters and repair parts precisely</h2>
                <p>
                  Filters can be a useful plan benefit when the specification is controlled. State the number, size range, efficiency level, and replacement frequency included. A plan that says only &ldquo;filters included&rdquo; can turn a predictable one-inch filter allowance into an expensive specialty-media obligation.
                </p>
                <p>
                  Apply the same discipline to repair parts. You might include a small annual allowance, a specific list of minor items, or a member discount on separately approved repairs. Avoid broad &ldquo;parts included&rdquo; language unless the price and exclusions are designed for that exposure. Refrigerant, UV lamps, humidifier pads, motors, capacitors, drain repairs, and specialty filters should have clear treatment.
                </p>
                <p>
                  If a visit uncovers repair work, keep the agreement scope separate from the repair authorization. Use the <a href="https://hvac-service-call.jakegenerates.com/">HVAC Service Call Price Calculator</a> to review your diagnostic policy and the <a href="https://hvac-replacement.jakegenerates.com/">HVAC Replacement Estimate Calculator</a> when the equipment is ready for replacement.
                </p>
              </section>

              <section id="formula">
                <p className="guide-section-number">09</p>
                <h2>Use a pricing formula you can audit</h2>
                <div className="guide-formula guide-formula-large">
                  <span>Required annual agreement price</span>
                  <strong>= (annual visit costs + annual plan costs + allocated overhead) ÷ (1 − target gross margin)</strong>
                  <small>Annual visit costs include loaded labor, travel, truck expense, and routine materials for every visit.</small>
                </div>
                <h3>Worked example: two-visit, one-system plan</h3>
                <p>
                  Assume a residential plan includes two seasonal visits, standard one-inch filters, a small repair-parts allowance, and a 35% target gross margin. The company estimates the following annual costs:
                </p>
                <div className="guide-example" role="region" aria-label="HVAC maintenance agreement pricing example" tabIndex={0}>
                  <table>
                    <thead><tr><th scope="col">Cost component</th><th scope="col">Calculation</th><th scope="col">Annual cost</th></tr></thead>
                    <tbody>
                      <tr><th scope="row">Loaded labor</th><td>3.0 onsite + 1.5 travel/admin hours × $38</td><td>$171.00</td></tr>
                      <tr><th scope="row">Travel and truck</th><td>2 visits × $18</td><td>$36.00</td></tr>
                      <tr><th scope="row">Routine materials and filters</th><td>2 visits × $24</td><td>$48.00</td></tr>
                      <tr><th scope="row">Repair-parts allowance</th><td>Annual allowance</td><td>$30.00</td></tr>
                      <tr><th scope="row">Plan administration</th><td>Setup, billing, and renewal</td><td>$24.00</td></tr>
                      <tr><th scope="row">Allocated overhead</th><td>Annual allocation</td><td>$72.00</td></tr>
                      <tr className="guide-example-total"><th scope="row">Total annual cost</th><td>$171 + $36 + $48 + $30 + $24 + $72</td><td>$381.00</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  At a 35% target gross margin, the required annual price is <strong>$381 ÷ 0.65 = $586.15</strong>. The contractor could round to <strong>$589 per year</strong>. A simple monthly option would be <strong>$49 per month</strong>, or $588 per year; if monthly collection adds meaningful fees or risk, the contractor should charge enough to recover that difference rather than absorbing it silently.
                </p>
                <p>
                  Run your own visits, labor, materials, overhead, margin, and billing assumptions through the <a href="https://hvac-maintenance.jakegenerates.com/">HVAC Maintenance Agreement Pricing Calculator</a>. After the plan has operating history, compare estimated and actual results with the <a href="https://job-profit.jakegenerates.com/">Job Profit Calculator</a> or an agreement-level profitability report.
                </p>
              </section>

              <section id="mistakes">
                <p className="guide-section-number">10</p>
                <h2>Avoid these common maintenance-agreement pricing mistakes</h2>
                <div className="guide-mistakes">
                  <article><h3>Copying a competitor’s price</h3><p>Their visit scope, labor burden, route density, overhead, filters, discounts, and margin target may be completely different.</p></article>
                  <article><h3>Pricing the wage instead of labor cost</h3><p>Base pay leaves out payroll burden, benefits, non-billable time, and the rest of the cost of employing the technician.</p></article>
                  <article><h3>Treating the second visit as free</h3><p>Every promised visit needs labor, travel, truck capacity, materials, and administrative support in the annual model.</p></article>
                  <article><h3>Discounting extra systems too deeply</h3><p>Shared travel creates savings, but each additional system still adds inspection, maintenance, material, and documentation cost.</p></article>
                  <article><h3>Promising vague included parts</h3><p>Define filters, allowances, discounts, and exclusions so a predictable benefit does not become unlimited repair exposure.</p></article>
                  <article><h3>Counting on future repairs</h3><p>Repair and replacement opportunities can add lifetime value, but they should not conceal a plan that loses money before any repair is sold.</p></article>
                  <article><h3>Ignoring monthly collection cost</h3><p>Processing fees, failed cards, cancellations, and staff follow-up can make twelve payments cost more than one annual payment.</p></article>
                  <article><h3>Never comparing plan to actual</h3><p>Track visit time, materials, parts, renewal, cancellations, callbacks, and gross margin, then update the model at least annually.</p></article>
                </div>
              </section>

              <aside className="guide-cta" aria-labelledby="guide-cta-title">
                <p className="kicker">Put the framework to work</p>
                <h2 id="guide-cta-title">Price the agreement from your actual scope and costs.</h2>
                <p>Enter visits, labor, travel, materials, parts allowances, overhead, and target margin. Compare annual and monthly pricing without sending your inputs anywhere.</p>
                <a className="guide-primary-cta" href="https://hvac-maintenance.jakegenerates.com/">Open the HVAC Maintenance Agreement Pricing Calculator <span aria-hidden="true">↗</span></a>
              </aside>

              <section id="next-step">
                <p className="guide-section-number">11</p>
                <h2>Turn the price into a repeatable agreement</h2>
                <p>
                  Document the visit schedule, covered equipment, included work, filters, parts treatment, discounts, payment timing, renewals, and exclusions with the <a href="https://service-agreements.jakegenerates.com/">Service Agreement Generator</a>. Train dispatchers and technicians to describe the same scope. Then review agreement results by plan type, system count, and route so the next price change comes from evidence.
                </p>
                <p>
                  For the rest of the service-business workflow, visit the <Link href="/professions/hvac">HVAC tools hub</Link>. It brings together labor-rate, service-call, repair, maintenance, replacement, profit, quote, agreement, report, and invoice tools for small HVAC contractors.
                </p>
              </section>

              <section id="faqs" className="guide-faqs">
                <p className="guide-section-number">12</p>
                <h2>HVAC maintenance-agreement pricing FAQs</h2>
                {faqs.map(({ question, answer }) => (
                  <details key={question}>
                    <summary>{question}</summary>
                    <p>{answer}</p>
                  </details>
                ))}
              </section>

              <p className="guide-disclaimer">
                This guide is general business information, not legal, tax, or accounting advice. Review agreement terms and local requirements with qualified professionals.
              </p>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
