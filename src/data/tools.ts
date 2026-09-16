export const professionSlugs = ["hvac", "electricians", "plumbers", "handyman", "cleaning"] as const;

export type ProfessionSlug = (typeof professionSlugs)[number];
export type ToolCategory = "calculator" | "generator";

export type Tool = {
  id: string;
  name: string;
  category: ToolCategory;
  description: string;
  cta: string;
  url: string;
  professions: readonly ProfessionSlug[];
  question?: string;
  value?: string;
  features: readonly string[];
  professionSpecific?: ProfessionSlug;
};

export type Profession = {
  slug: ProfessionSlug;
  name: string;
  cardDescription: string;
  description: string;
  metaDescription: string;
};

const fieldTrades = ["hvac", "electricians", "plumbers", "handyman"] as const;
const allProfessions = professionSlugs;

export const tools: readonly Tool[] = [
  { id: "labor-rate-calculator", name: "Labor Rate Calculator", category: "calculator", question: "What should I charge?", description: "Find the hourly rate you need to charge to cover labor, overhead, non-billable time, and your target margin.", features: ["Loaded labor cost", "Billable utilization", "Overhead per billable hour", "Break-even & target-margin rates", "Current-rate comparison", "Browser-local draft recovery"], cta: "Calculate Labor Rate", url: "https://labor-rate.jakegenerates.com/", professions: allProfessions },
  { id: "parts-labor-markup-calculator", name: "Parts & Labor Markup Calculator", category: "calculator", question: "How should I price parts and labor?", description: "Turn cost into a selling price and compare markup, margin, and target-margin pricing before you quote the job.", features: ["Parts & labor pricing", "Markup vs. margin", "Three pricing modes", "Combined scenario & local drafts"], cta: "Calculate Markup & Margin", url: "https://markup.jakegenerates.com/", professions: fieldTrades },
  { id: "job-cost-estimator", name: "Job Cost Estimator", category: "calculator", question: "What will this job cost and what should I charge?", description: "Estimate your true job cost, recommended selling price, gross profit, and margin before you quote the work.", features: ["Labor cost & sell rate", "Multiple parts & materials", "Other job costs & overhead", "Margin or markup pricing", "Quote comparison & local draft recovery"], cta: "Estimate Job Cost", url: "https://job-cost.jakegenerates.com/", professions: allProfessions },
  { id: "break-even-calculator", name: "Break-Even Calculator", category: "calculator", question: "What do I need to break even?", description: "See how many jobs, how much revenue, or how many billable hours you need to cover costs and hit a profit target.", features: ["Per-job break-even", "Billable-hours break-even", "Contribution margin", "Target-profit jobs, hours & revenue", "Local draft recovery"], cta: "Calculate Break-Even", url: "https://break-even.jakegenerates.com/", professions: allProfessions },
  { id: "job-profit-calculator", name: "Job Profit Calculator", category: "calculator", question: "What did the job actually make?", description: "See what a job actually made after labor, parts, subcontractors, travel, processing fees, and overhead.", features: ["Full job cost", "Profit & margin", "Break-even revenue", "Target pricing"], cta: "Calculate Job Profit", url: "https://job-profit.jakegenerates.com/", professions: allProfessions },
  { id: "hvac-service-call-price-calculator", name: "HVAC Service Call Price Calculator", category: "calculator", question: "What should this service call cost?", description: "Price an HVAC service call with labor, travel, minimum charges, after-hours premiums, materials, parts, and tax.", features: ["Labor & travel", "Minimum charges", "After-hours premiums", "Materials, parts & tax"], cta: "Price an HVAC Service Call", url: "https://hvac-service-call.jakegenerates.com/", professions: ["hvac"], professionSpecific: "hvac" },
  { id: "service-quote-generator", name: "Service Quote Generator", category: "generator", value: "Price the work and send a polished quote.", description: "Build itemized service quotes with your branding, clear totals, and a professional PDF ready to share.", features: ["Parts & labor", "Pricing & tax", "Branded PDF"], cta: "Create a Quote", url: "https://service-quotes.jakegenerates.com/", professions: allProfessions },
  { id: "service-agreement-generator", name: "Service Agreement Generator", category: "generator", value: "Set recurring service expectations clearly.", description: "Create a clear, professional recurring-service agreement for maintenance and support work.", features: ["Coverage & exclusions", "Flexible service pricing", "Renewal & termination terms", "Branded PDF"], cta: "Create a Service Agreement", url: "https://service-agreements.jakegenerates.com/", professions: allProfessions },
  { id: "change-order-generator", name: "Change Order Generator", category: "generator", value: "Keep scope and price changes clear.", description: "Document additions or deductions, show the revised job total, and capture an approval in one clean PDF.", features: ["Add & deduct", "Revised total", "Approval section"], cta: "Create a Change Order", url: "https://change-orders.jakegenerates.com/", professions: allProfessions },
  { id: "service-report-generator", name: "Service Report Generator", category: "generator", value: "Turn field notes into a client-ready report.", description: "Organize the work performed, findings, and recommendations into a consistent professional record.", features: ["Work performed", "Findings", "Professional PDF"], cta: "Create a Service Report", url: process.env.NEXT_PUBLIC_SERVICE_REPORT_URL || "https://service-reports.jakegenerates.com", professions: allProfessions },
  { id: "service-invoice-generator", name: "Service Invoice Generator", category: "generator", value: "Turn completed work into a clear invoice.", description: "Create an itemized service invoice with payment details, balance due, your branding, and a shareable PDF.", features: ["Parts & labor", "Payment tracking", "Branded PDF"], cta: "Create an Invoice", url: "https://service-invoices.jakegenerates.com/", professions: allProfessions },
];

export const professions: readonly Profession[] = [
  { slug: "hvac", name: "HVAC", cardDescription: "Price service calls and manage the paperwork around every HVAC job.", description: "Pricing calculators and service-document tools for HVAC contractors, from labor rates and service-call pricing through quotes, agreements, reports, and invoices.", metaDescription: "Free pricing calculators and service-document tools for HVAC contractors, including service-call pricing, quotes, reports, and invoices." },
  { slug: "electricians", name: "Electricians", cardDescription: "Price electrical work and create clear customer-ready documents.", description: "Pricing and paperwork tools for electrical service businesses, including labor rates, job costing, quotes, change orders, service reports, and invoices.", metaDescription: "Free pricing, job-costing, quote, change-order, report, and invoice tools for electricians and electrical service businesses." },
  { slug: "plumbers", name: "Plumbers", cardDescription: "Work out profitable pricing and keep plumbing paperwork organized.", description: "Practical calculators and document tools for plumbing service businesses, covering pricing, job costing, agreements, service work, and invoicing.", metaDescription: "Free pricing calculators and professional document generators for plumbers and plumbing service businesses." },
  { slug: "handyman", name: "Handyman", cardDescription: "Handle pricing and paperwork for repairs, projects, and service calls.", description: "Simple pricing and paperwork tools for handyman businesses handling repairs, small projects, service calls, and customer documentation.", metaDescription: "Free pricing, estimating, quote, service-document, and invoice tools for handyman businesses." },
  { slug: "cleaning", name: "Cleaning Businesses", cardDescription: "Price cleaning work and create agreements, reports, and invoices.", description: "Tools for cleaning businesses to price work, estimate job costs, manage recurring-service agreements, document service, and invoice customers.", metaDescription: "Free pricing calculators and document generators for residential and commercial cleaning businesses." },
];

export function getProfession(slug: string) {
  return professions.find((profession) => profession.slug === slug);
}

export function getToolsForProfession(slug: ProfessionSlug) {
  return tools.filter((tool) => tool.professions.includes(slug));
}

export const calculators = tools.filter((tool) => tool.category === "calculator" && !tool.professionSpecific);
export const generators = tools.filter((tool) => tool.category === "generator");
