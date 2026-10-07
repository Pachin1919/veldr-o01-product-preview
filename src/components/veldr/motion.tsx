import { useEffect, useRef, type ReactNode } from 'react';
// Counters expose actual lifecycle evidence for QA without creating any work loops.
export const motionAudit = { heroes: 0, listeners: 0, observers: 0, pendingFrames: 0, updates: 0 };
export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) { el.classList.add('is-visible'); observer.unobserve(el); }
    }, { threshold: 0.12 });
    el.classList.add('reveal-ready'); observer.observe(el); motionAudit.observers++;
    return () => { observer.disconnect(); motionAudit.observers--; };
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}
export function useHeroMotion() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    let frame: number | undefined;
    let visible = true;
    const cancel = () => { if (frame !== undefined) { cancelAnimationFrame(frame); frame = undefined; motionAudit.pendingFrames--; } };
    const update = () => {
      frame = undefined; motionAudit.pendingFrames--;
      if (document.hidden || !visible || reduced.matches || innerWidth < 650) return;
      const distance = Math.max(0, Math.min(-el.getBoundingClientRect().top, innerHeight));
      el.style.setProperty('--hero-shift', `${Math.round(distance * 0.15)}px`); motionAudit.updates++;
    };
    const schedule = () => { if (!document.hidden && visible && !reduced.matches && innerWidth >= 650 && frame === undefined) { frame = requestAnimationFrame(update); motionAudit.pendingFrames++; } };
    const reset = () => { cancel(); el.style.setProperty('--hero-shift', '0px'); schedule(); };
    const visibility = () => { if (document.hidden) cancel(); else schedule(); };
    const observer = new IntersectionObserver(([entry]) => { visible = entry?.isIntersecting ?? false; if (visible) schedule(); else cancel(); });
    observer.observe(el); motionAudit.observers++; motionAudit.heroes++;
    window.addEventListener('scroll', schedule, { passive: true }); window.addEventListener('resize', reset);
    document.addEventListener('visibilitychange', visibility); reduced.addEventListener('change', reset); motionAudit.listeners += 4;
    schedule();
    return () => { cancel(); observer.disconnect(); window.removeEventListener('scroll', schedule); window.removeEventListener('resize', reset); document.removeEventListener('visibilitychange', visibility); reduced.removeEventListener('change', reset); motionAudit.listeners -= 4; motionAudit.observers--; motionAudit.heroes--; };
  }, []);
  return ref;
}
