import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { SITE_NAME, SITE_URL, SOCIAL_IMAGE } from "@/lib/site-metadata";

const pageUrl = `${SITE_URL}/guides/markup-vs-margin-for-contractors`;
const publishedDate = "2026-10-09";
const pageTitle = "Markup vs. Margin for Contractors: Formulas & Examples";
const pageDescription =
  "Learn the difference between markup and gross margin, convert between them, and price contractor parts and labor with practical formulas and examples.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/guides/markup-vs-margin-for-contractors" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: pageTitle,
    description:
      "A practical guide to contractor markup, gross margin, conversion formulas, parts and labor pricing, overhead, and profitable selling prices.",
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
    question: "What is the difference between markup and margin?",
    answer:
      "Markup is gross profit divided by cost, while gross margin is gross profit divided by selling price. A 50% markup on $100 of cost creates a $150 price and a 33.3% gross margin, so the percentages are not interchangeable.",
  },
  {
    question: "What markup gives a 40% gross margin?",
    answer:
      "A 40% gross margin requires a 66.7% markup. Divide the margin by one minus the margin: 0.40 divided by 0.60 equals 0.6667. A $100 cost would therefore need a $166.67 selling price.",
  },
  {
    question: "Is a 30% markup the same as a 30% margin?",
    answer:
      "No. Adding a 30% markup to $100 of cost produces a $130 selling price and $30 of gross profit. That $30 is only 23.1% of the $130 selling price, so the gross margin is 23.1%, not 30%.",
  },
  {
    question: "Should contractors mark up labor?",
    answer:
      "Contractors need a labor selling price above the direct wage or loaded labor cost, but a simple markup on wages can miss payroll burden, non-billable time, and overhead. First establish the true labor cost and billable capacity, then set the selling rate required to cover overhead and profit.",
  },
  {
    question: "Should parts and labor use the same markup?",
    answer:
      "Not necessarily. Parts can carry purchasing time, freight, handling, warranty, loss, and inventory risk, while labor has payroll burden and limited billable capacity. Separate pricing rules are often clearer, provided the completed job still reaches the company’s overall gross-margin target.",
  },
  {
    question: "Does gross margin include overhead?",
    answer:
      "Gross margin depends on which costs your company classifies as cost of goods sold. It usually must produce enough gross profit to pay operating overhead and leave net profit, but the margin calculation does not automatically prove that overhead has been covered. Use one consistent accounting definition and compare gross profit with the overhead the business must fund.",
  },
  {
    question: "Can I use one markup on every contractor job?",
    answer:
      "A single markup is simple, but it can misprice jobs with different mixes of labor, parts, subcontractors, travel, equipment, risk, and warranty exposure. Check the total selling price and expected gross margin for each meaningful job type, then adjust the rules when the mix changes.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Markup vs. Margin for Contractors",
  description:
    "A practical guide to markup, gross margin, conversion formulas, parts and labor pricing, overhead, and profitable contractor selling prices.",
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
    { "@type": "ListItem", position: 2, name: "Markup vs. Margin for Contractors", item: pageUrl },
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

export default function MarkupVsMarginGuide() {
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
                  <li aria-current="page">Markup vs. margin</li>
                </ol>
              </nav>
              <p className="kicker">Contractor pricing guide</p>
              <h1>Markup vs. Margin for Contractors</h1>
              <p className="guide-deck">
                Know which percentage you are using before a profitable-looking quote becomes a thin-margin job.
              </p>
              <div className="guide-answer" aria-labelledby="direct-answer-title">
                <p className="guide-answer-label" id="direct-answer-title">The short answer</p>
                <p>
                  <strong>Markup measures gross profit as a percentage of cost; gross margin measures gross profit as a percentage of the selling price.</strong> They use the same dollars but different bases. If a job costs $1,000 and you add a 50% markup, the price is $1,500 and the gross margin is 33.3%—not 50%. Contractors can use markup to build prices, but should check gross margin to confirm the completed job will produce enough gross profit to cover overhead and net profit.
                </p>
              </div>
              <a className="guide-primary-cta" href="https://markup.jakegenerates.com/">
                Convert markup and margin with the free Parts &amp; Labor Markup Calculator <span aria-hidden="true">↗</span>
              </a>
              <p className="guide-meta">Published October 9, 2026 · For contractors and small service businesses</p>
            </div>
          </header>

          <div className="guide-layout guide-shell">
            <aside className="guide-toc" aria-label="On this page">
              <p>On this page</p>
              <ol>
                <li><a href="#difference">Markup and margin defined</a></li>
                <li><a href="#confusion">Why they get confused</a></li>
                <li><a href="#formulas">Formulas</a></li>
                <li><a href="#conversion">Conversion examples</a></li>
                <li><a href="#parts-labor">Parts versus labor</a></li>
                <li><a href="#overhead">Overhead and burden</a></li>
                <li><a href="#when-to-use">When to use each</a></li>
                <li><a href="#worked-example">Worked job example</a></li>
                <li><a href="#mistakes">Common mistakes</a></li>
                <li><a href="#faqs">FAQs</a></li>
              </ol>
            </aside>

            <div className="guide-content">
              <section id="difference">
                <p className="guide-section-number">01</p>
                <h2>Markup and gross margin describe the same profit from different angles</h2>
                <p>
                  Start with three numbers: cost, selling price, and gross profit. If a plumbing repair costs $400 to deliver and sells for $600, its gross profit is $200. Markup compares that $200 with the $400 cost. Gross margin compares the same $200 with the $600 selling price.
                </p>
                <div className="guide-example" role="region" aria-label="Markup and gross margin comparison" tabIndex={0}>
                  <table>
                    <thead><tr><th scope="col">Measure</th><th scope="col">Question it answers</th><th scope="col">$400 cost / $600 price</th></tr></thead>
                    <tbody>
                      <tr><th scope="row">Markup</th><td>How much gross profit was added relative to cost?</td><td>50.0%</td></tr>
                      <tr><th scope="row">Gross margin</th><td>What share of revenue remains after direct job cost?</td><td>33.3%</td></tr>
                      <tr className="guide-example-total"><th scope="row">Gross profit</th><td>Selling price minus cost</td><td>$200</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  Neither measure changes the dollars earned. The danger is using a margin target as though it were a markup. A contractor who intends to earn a 40% margin but simply adds 40% to cost will earn only a 28.6% margin.
                </p>
              </section>

              <section id="confusion">
                <p className="guide-section-number">02</p>
                <h2>Why contractors confuse markup and margin</h2>
                <p>
                  Both are percentages associated with gross profit, and estimating software, suppliers, bookkeepers, and field teams do not always use the words consistently. “Add 30%” sounds like “make 30%,” even though one usually describes markup on cost and the other may mean margin on revenue.
                </p>
                <p>
                  The confusion grows when a quote mixes parts, labor, equipment, subcontractors, permits, and overhead. A parts line can carry a 100% markup while the entire job finishes at a much lower margin because labor was underpriced or an unplanned cost appeared. Write the calculation next to every target: <em>markup on cost</em> or <em>gross margin on price</em>. A percentage without its base is incomplete.
                </p>
                <div className="guide-note">
                  <strong>Useful language:</strong> “We apply a 50% markup to this cost” and “we target a 33.3% gross margin on this price” describe the same example without ambiguity.
                </div>
              </section>

              <section id="formulas">
                <p className="guide-section-number">03</p>
                <h2>Use the right formula for the decision</h2>
                <div className="guide-formula">
                  <span>Markup percentage</span>
                  <strong>= (selling price − cost) ÷ cost × 100</strong>
                </div>
                <div className="guide-formula">
                  <span>Gross margin percentage</span>
                  <strong>= (selling price − cost) ÷ selling price × 100</strong>
                </div>
                <div className="guide-formula guide-formula-large">
                  <span>Price required for a target gross margin</span>
                  <strong>= cost ÷ (1 − target margin)</strong>
                  <small>Enter the target as a decimal. For a 35% margin, divide cost by 0.65.</small>
                </div>
                <p>
                  To build a price from markup, multiply cost by one plus the markup rate. To build a price from a target margin, divide cost by one minus the margin rate. The second formula is essential because the desired profit is a percentage of the final selling price, which is not yet known.
                </p>
              </section>

              <section id="conversion">
                <p className="guide-section-number">04</p>
                <h2>Convert markup to margin—and margin to markup</h2>
                <div className="guide-formula">
                  <span>Convert markup to gross margin</span>
                  <strong>margin = markup ÷ (1 + markup)</strong>
                </div>
                <div className="guide-formula">
                  <span>Convert gross margin to markup</span>
                  <strong>markup = margin ÷ (1 − margin)</strong>
                </div>
                <div className="guide-example" role="region" aria-label="Common markup and margin conversions" tabIndex={0}>
                  <table>
                    <thead><tr><th scope="col">Markup on cost</th><th scope="col">Equivalent gross margin</th><th scope="col">Price on $100 cost</th></tr></thead>
                    <tbody>
                      <tr><th scope="row">20%</th><td>16.7%</td><td>$120.00</td></tr>
                      <tr><th scope="row">30%</th><td>23.1%</td><td>$130.00</td></tr>
                      <tr><th scope="row">50%</th><td>33.3%</td><td>$150.00</td></tr>
                      <tr><th scope="row">66.7%</th><td>40.0%</td><td>$166.67</td></tr>
                      <tr><th scope="row">100%</th><td>50.0%</td><td>$200.00</td></tr>
                      <tr><th scope="row">150%</th><td>60.0%</td><td>$250.00</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  The relationship is not linear. A 100% markup creates a 50% margin, but a 200% markup creates a 66.7% margin—not 100%. Use the <a href="https://markup.jakegenerates.com/">Parts &amp; Labor Markup Calculator</a> when you need to compare markup pricing, margin pricing, and the combined result without doing the conversions by hand.
                </p>
              </section>

              <section id="parts-labor">
                <p className="guide-section-number">05</p>
                <h2>Price parts and labor for the costs they actually carry</h2>
                <h3>Parts and materials</h3>
                <p>
                  The supplier invoice is only the starting cost. Parts pricing may need to recover sourcing time, freight, pickup, receiving, storage, financing, breakage, theft, returns, disposal, warranty administration, and the risk that the company must replace a failed item before receiving supplier credit. Low-cost parts often need a higher percentage markup because many handling costs are fixed in dollars.
                </p>
                <h3>Labor</h3>
                <p>
                  Do not mark up the technician’s wage and assume labor is covered. Build from loaded labor cost, including employer payroll taxes, benefits, workers’ compensation, paid time off, training, and other direct employment costs. Then account for billable utilization: the business must recover paid meetings, restocking, travel gaps, and other non-billable time through the hours it can sell. The <a href="https://labor-rate.jakegenerates.com/">Labor Rate Calculator</a> is designed for that calculation.
                </p>
                <p>
                  Parts and labor can use different markup rules. What matters is that the final job price recovers every included cost and reaches the required overall gross profit. Before sending a quote, use the <a href="https://job-cost.jakegenerates.com/">Job Cost Estimator</a> to assemble the full cost and selling-price picture.
                </p>
              </section>

              <section id="overhead">
                <p className="guide-section-number">06</p>
                <h2>Gross profit must pay overhead before it becomes net profit</h2>
                <p>
                  Gross margin is not the same as net profit margin. Gross profit is what remains after the costs your company assigns directly to the job or cost of goods sold. From that pool, the business still has to pay office payroll, rent, software, phones, general insurance, marketing, accounting, vehicles not assigned directly, and other operating overhead. Only what remains after overhead and other expenses becomes operating or net profit.
                </p>
                <p>
                  Companies classify costs differently, so consistency matters more than copying another contractor’s target. If vehicle expense and field supervision are in your overhead, your required gross margin must fund them. If they are assigned to jobs, include them in job cost and do not recover the same dollars twice. Use the <a href="https://break-even.jakegenerates.com/">Break-Even Calculator</a> to connect contribution per job, fixed costs, sales volume, and target profit.
                </p>
                <div className="guide-note">
                  <strong>Burden is not markup:</strong> Payroll burden makes labor cost more than the wage. Overhead is the cost of operating the company. Markup is a pricing method. Keeping the three separate prevents false profit.
                </div>
              </section>

              <section id="when-to-use">
                <p className="guide-section-number">07</p>
                <h2>Use markup to build consistently; use margin to manage profitability</h2>
                <p>
                  Markup is convenient at the line-item level. A contractor can apply defined rules to parts categories, equipment, subcontractors, and materials, making estimates faster and easier to audit. Margin is usually more useful for financial planning because it states how much of each revenue dollar remains as gross profit.
                </p>
                <ul className="guide-checklist">
                  <li><strong>Use markup</strong> when turning a known cost into a repeatable line-item selling price.</li>
                  <li><strong>Use target margin</strong> when setting the total price required to produce a planned share of gross profit.</li>
                  <li><strong>Check both</strong> when the job has several cost types or a price has been discounted, rounded, or overridden.</li>
                  <li><strong>Review actual margin</strong> after completion, when estimated labor, materials, callbacks, and other costs can be replaced with real results.</li>
                </ul>
                <p>
                  HVAC contractors building a price book can apply the same distinction in the <a href="https://hvac-flat-rate.jakegenerates.com/">HVAC Flat Rate Repair Pricing Calculator</a>. The tool separates task assumptions and shows the resulting markup and margin instead of treating the labels as synonyms.
                </p>
              </section>

              <section id="worked-example">
                <p className="guide-section-number">08</p>
                <h2>Worked example: pricing a mixed contractor job</h2>
                <p>
                  Assume a small electrical, plumbing, HVAC, or handyman job includes loaded field labor, parts, a permit, travel, and job-specific overhead. The contractor wants a 40% gross margin on the complete job.
                </p>
                <div className="guide-example" role="region" aria-label="Contractor job pricing example" tabIndex={0}>
                  <table>
                    <thead><tr><th scope="col">Cost component</th><th scope="col">Basis</th><th scope="col">Cost</th></tr></thead>
                    <tbody>
                      <tr><th scope="row">Loaded field labor</th><td>6 hours × $42</td><td>$252.00</td></tr>
                      <tr><th scope="row">Parts and materials</th><td>Supplier and consumable cost</td><td>$310.00</td></tr>
                      <tr><th scope="row">Permit</th><td>Direct job fee</td><td>$75.00</td></tr>
                      <tr><th scope="row">Travel and vehicle</th><td>Job allocation</td><td>$48.00</td></tr>
                      <tr><th scope="row">Job-specific overhead</th><td>Estimating and administration</td><td>$65.00</td></tr>
                      <tr className="guide-example-total"><th scope="row">Total job cost</th><td>$252 + $310 + $75 + $48 + $65</td><td>$750.00</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  The target-margin price is <strong>$750 ÷ (1 − 0.40) = $1,250</strong>. That produces $500 of expected gross profit, a 40% gross margin, and a 66.7% markup on total cost. If the contractor mistakenly adds a 40% markup, the price is only $1,050, gross profit is $300, and gross margin falls to 28.6%.
                </p>
                <p>
                  After the work is complete, replace the estimate with actual labor, parts, travel, fees, and overhead in the <a href="https://job-profit.jakegenerates.com/">Job Profit Calculator</a>. A strong estimating rule becomes valuable only when completed-job data confirms it.
                </p>
              </section>

              <section id="mistakes">
                <p className="guide-section-number">09</p>
                <h2>Avoid these common markup and margin mistakes</h2>
                <div className="guide-mistakes">
                  <article><h3>Using the terms interchangeably</h3><p>A 40% markup and a 40% margin produce different prices. Label every percentage by its base.</p></article>
                  <article><h3>Marking up the wage</h3><p>Base pay leaves out payroll burden, benefits, non-billable time, and other employment costs.</p></article>
                  <article><h3>Ignoring small-part handling</h3><p>A flat percentage can fail to recover the fixed work of finding, buying, storing, and warranting a low-cost item.</p></article>
                  <article><h3>Applying one rate to every cost</h3><p>Parts, labor, equipment, and subcontractors can carry different risk and cost-to-serve profiles.</p></article>
                  <article><h3>Calling gross profit net profit</h3><p>Gross profit still has to fund overhead, financing, taxes, and the company’s required bottom line.</p></article>
                  <article><h3>Double-counting overhead</h3><p>If overhead is already built into a labor rate or job cost, adding the same allocation again overstates the required price.</p></article>
                  <article><h3>Checking only line-item markup</h3><p>Discounts and the final cost mix can pull the complete job below the intended gross margin.</p></article>
                  <article><h3>Never comparing actual results</h3><p>Estimated pricing should be corrected with completed-job labor, material, callback, and gross-profit data.</p></article>
                </div>
              </section>

              <aside className="guide-cta" aria-labelledby="guide-cta-title">
                <p className="kicker">Put the formulas to work</p>
                <h2 id="guide-cta-title">Turn parts and labor costs into a price you can explain.</h2>
                <p>Compare markup, gross margin, target-margin pricing, and the combined job result using your own numbers. Your entries stay in your browser.</p>
                <a className="guide-primary-cta" href="https://markup.jakegenerates.com/">Open the Parts &amp; Labor Markup Calculator <span aria-hidden="true">↗</span></a>
              </aside>

              <section id="trades">
                <p className="guide-section-number">10</p>
                <h2>Apply the same math to your trade’s real cost structure</h2>
                <p>
                  The formulas do not change by profession, but the cost mix does. An HVAC repair may carry stocked parts and callback risk; an electrical job may include permits and specialty material; plumbing can combine travel, diagnosis, and emergency capacity; handyman work often mixes small purchases with labor; and cleaning businesses may carry supplies, travel, supervision, and recurring-service administration.
                </p>
                <p>
                  Use the profession hubs for tools matched to <Link href="/professions/hvac">HVAC contractors</Link>, <Link href="/professions/electricians">electricians</Link>, <Link href="/professions/plumbers">plumbers</Link>, <Link href="/professions/handyman">handyman businesses</Link>, and <Link href="/professions/cleaning">cleaning businesses</Link>. Build your own rules from the costs, capacity, risk, and profit target of the work you actually perform.
                </p>
              </section>

              <section id="faqs" className="guide-faqs">
                <p className="guide-section-number">11</p>
                <h2>Markup and margin FAQs</h2>
                {faqs.map(({ question, answer }) => (
                  <details key={question}>
                    <summary>{question}</summary>
                    <p>{answer}</p>
                  </details>
                ))}
              </section>

              <p className="guide-disclaimer">
                This guide is general business information, not accounting, tax, or financial advice. Use consistent cost classifications and review important pricing decisions with qualified professionals.
              </p>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
