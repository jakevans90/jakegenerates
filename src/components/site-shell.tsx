import Image from "next/image";
import Link from "next/link";

import brandLogo from "../../public/brand/jakegenerates-logo.png";

export function SiteHeader() {
  return <header className="site-header"><div className="shell nav-wrap"><Link className="brand" href="/" aria-label="JakeGenerates home"><Image className="brand-logo" src={brandLogo} alt="JakeGenerates" priority sizes="(max-width: 620px) 126px, 150px" /></Link><nav aria-label="Primary navigation"><Link href="/#tools">Tools</Link><Link href="/about">About</Link><Link className="nav-contact" href="/contact">Contact <span aria-hidden="true">↗</span></Link></nav></div></header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="shell footer-top"><div><Link className="brand footer-brand" href="/" aria-label="JakeGenerates home"><Image className="brand-logo footer-logo" src={brandLogo} alt="JakeGenerates" sizes="168px" /></Link><p>Small tools for the work you do every day.</p></div><nav aria-label="Footer navigation"><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></nav></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} JakeGenerates</span><span>Made to make work easier.</span></div></footer>;
}

export function InfoPage({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return <><SiteHeader /><main className="info-page shell"><p className="kicker">{eyebrow}</p><h1>{title}</h1><div className="info-copy">{children}</div></main><SiteFooter /></>;
}
