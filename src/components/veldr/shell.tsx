import { Link, useRouterState } from '@tanstack/react-router';
import { ArrowUpRight, Menu, X, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { copy } from '@/lib/veldr-content';
import { useLanguage } from './language';
const links = [{ to: '/design', label: copy('Design', '设计') }, { to: '/cabin', label: copy('Cabin', '座舱') }, { to: '/explore', label: copy('Showroom', '展厅') }] as const;
export function Header() {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => { setOpen(false); }, [pathname]);
  return <><a className="skip-link" href="#main">{t(copy('Skip to content', '跳至内容'))}</a><header className={`site-header ${pathname === '/' ? 'over-hero' : ''}`}>
    <Link to="/" className="brand" aria-label={t(copy('VELDR home', 'VELDR 首页'))}><span className="brand-mark" aria-hidden="true"><i/><i/></span>VELDR</Link>
    <nav className="primary-nav" aria-label={t(copy('Main navigation', '主导航'))}>{links.map((link) => <Link key={link.to} to={link.to} activeProps={{ className: 'active' }}>{t(link.label)}</Link>)}</nav>
    <div className="header-tools"><div className="language-switch" aria-label={t(copy('Language', '语言'))}><Button variant="quiet" size="sm" aria-pressed={locale === 'en'} onClick={() => setLocale('en')}>EN</Button><span aria-hidden="true">/</span><Button variant="quiet" size="sm" aria-pressed={locale === 'zh'} onClick={() => setLocale('zh')}>中文</Button></div><Link className="header-link" to="/explore">{t(copy('Explore O/01', '探索 O/01'))}<ArrowUpRight size={17}/></Link><Button className="mobile-menu" variant="quiet" size="icon" aria-label={t(open ? copy('Close navigation', '关闭导航') : copy('Open navigation', '打开导航'))} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</Button></div>
    {open && <nav id="mobile-navigation" className="mobile-navigation" aria-label={t(copy('Mobile navigation', '移动导航'))}>{links.map((link) => <Link key={link.to} to={link.to}>{t(link.label)}<ArrowUpRight/></Link>)}</nav>}
  </header></>;
}
export function Footer() {
  const { t } = useLanguage();
  return <footer className="site-footer"><div className="wrap footer-main"><Link to="/" className="brand">VELDR</Link><p>{t(copy('O/01 — A fictional 4×4 design concept.', 'O/01 — 一款虚构的四驱设计概念车。'))}</p><nav aria-label={t(copy('Footer navigation', '页脚导航'))}>{links.map((link) => <Link key={link.to} to={link.to}>{t(link.label)}</Link>)}</nav></div><div className="wrap footer-bottom"><span>THE LONG WAY.</span><Button variant="quiet" onClick={() => window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}>{t(copy('Back to top', '返回顶部'))}<ArrowUp size={14}/></Button><span>VELDR / O/01</span></div></footer>;
}
