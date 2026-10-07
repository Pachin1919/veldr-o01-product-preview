import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/components/veldr/language';
import { HotspotStudy } from '@/components/veldr/hotspots';
import { Reveal } from '@/components/veldr/motion';
import { pageMeta } from '@/components/veldr/page-meta';
import { copy, exteriorPoints, views } from '@/lib/veldr-content';
export const Route = createFileRoute('/design')({ head: () => pageMeta('Exterior Design — VELDR O/01', 'Study the VELDR O/01 exterior: a continuous roofline, upright windows, pronounced wheel arches and a square rear.'), component: Design });
function Design() {
  const { t } = useLanguage();
  return <div className="detail-page"><div className="wrap detail-heading"><Link to="/" className="back-link"><ArrowLeft/>{t(copy('Back to O/01', '返回 O/01'))}</Link><div className="detail-heading-row"><div><p className="eyebrow">O/01 / {t(copy('EXTERIOR DESIGN', '车身设计'))}</p><h1>{t(copy('A clear silhouette.', '清晰的轮廓。'))}</h1></div><p>{t(copy('A straight roof, upright glazing and deliberate wheel arches. Less decoration. More definition.', '平直的车顶、直立的车窗、清楚的轮拱。少一点装饰，多一点轮廓。'))}</p></div></div>
    <HotspotStudy kind="exterior" image={views[1].image} alt={t(views[1].alt)} points={exteriorPoints}/>
    <section className="wrap editorial-grid section-pad"><div className="section-index"><span>01</span>{t(copy('PROPORTION & PURPOSE', '比例与意图'))}</div><Reveal><p className="eyebrow">{t(copy('FORM FOLLOWS THE JOURNEY', '为旅途构想的轮廓'))}</p><h2 className="display-heading">{t(copy('No line without', '每一条线，'))}<br/><span>{t(copy('a reason.', '都有来由。'))}</span></h2><p className="body-copy">{t(copy('The body is built around a few clear gestures: a long horizontal roof, upright glass and a substantial lower edge. The simple outline is carried through the front and rear, rather than broken up by ornamental surfaces.', '车身围绕几笔清楚的线条展开：横向延伸的车顶、直立的车窗、厚实的下部边缘。简洁轮廓贯穿车头与车尾，不被多余的装饰表面打断。'))}</p><div className="design-notes"><article><h3>{t(copy('A grounded lower body', '扎实的下部轮廓'))}</h3><p>{t(copy('Dark sill trim links the wheel arches. It creates a visual base beneath the lighter body and keeps the side profile legible.', '深色侧裙连接前后轮拱，在较浅的车身下形成视觉基座，让侧面轮廓更清楚。'))}</p></article><article><h3>{t(copy('An honest form study', '直接的造型研究'))}</h3><p>{t(copy('These images explore a design direction. Proportions are presented visually, without claiming measured dimensions or tested capability.', '这些图像用于探索设计方向。比例通过视觉呈现，不涉及标定尺寸或经测试的性能。'))}</p></article></div></Reveal></section>
    <nav className="next-section wrap" aria-label={t(copy('Continue exploring', '继续探索'))}><Link to="/cabin"><span className="eyebrow">02 / {t(copy('THE CABIN', '座舱'))}</span><span>{t(copy('The view from within.', '从座舱看出去。'))}<ArrowUpRight/></span></Link><Link to="/explore" className="arrow-link">{t(copy('All three views', '查看三个视角'))}<ArrowUpRight/></Link></nav>
  </div>;
}
