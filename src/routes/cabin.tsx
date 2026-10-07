import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/components/veldr/language';
import { HotspotStudy } from '@/components/veldr/hotspots';
import { Reveal } from '@/components/veldr/motion';
import { pageMeta } from '@/components/veldr/page-meta';
import { copy, cabinPoints, views } from '@/lib/veldr-content';
export const Route = createFileRoute('/cabin')({ head: () => pageMeta('Cabin Design — VELDR O/01', 'Look inside the VELDR O/01 concept cabin: direct physical controls, a calm horizontal dashboard and warm upholstery.'), component: Cabin });
function Cabin() {
  const { t } = useLanguage();
  return <div className="detail-page"><div className="wrap detail-heading"><Link to="/" className="back-link"><ArrowLeft/>{t(copy('Back to O/01', '返回 O/01'))}</Link><div className="detail-heading-row"><div><p className="eyebrow">O/01 / {t(copy('CABIN DESIGN', '座舱设计'))}</p><h1>{t(copy('Keep it simple.', '座舱不必复杂。'))}</h1></div><p>{t(copy('Quiet surfaces. A little warmth. Everyday controls with a clear place of their own.', '安静的表面，一点温度。常用操作，各有清楚的位置。'))}</p></div></div>
    <HotspotStudy kind="interior" image={views[2].image} alt={t(views[2].alt)} points={cabinPoints}/>
    <section className="wrap editorial-grid section-pad"><div className="section-index"><span>02</span>{t(copy('MATERIAL & CONTROL', '材质与操作'))}</div><Reveal><p className="eyebrow">{t(copy('INSIDE O/01', 'O/01 的座舱'))}</p><h2 className="display-heading">{t(copy('The landscape', '把风景，'))}<br/><span>{t(copy('comes first.', '留在眼前。'))}</span></h2><p className="body-copy">{t(copy('A dark upper dashboard and a strong horizontal line frame the view through the windscreen. Warm brown seats and stitched surfaces soften the space without making the layout busy.', '深色仪表台上部与清晰的横向线条，框出前风挡外的视野。暖棕座椅与缝线表面，让空间温和下来，而不让布局变得繁杂。'))}</p><div className="design-notes"><article><h3>{t(copy('A direct adjustment', '直接的调节'))}</h3><p>{t(copy('The repeated knobs are visually distinct from the display. The design intent is to keep frequent adjustments tangible and easy to locate.', '重复排列的旋钮与屏幕形成清楚的区分。设计意图是让常用调节可触、可见，位置容易找到。'))}</p></article><article><h3>{t(copy('A restrained material palette', '克制的材质搭配'))}</h3><p>{t(copy('Dark surfaces, warm upholstery and small metallic accents give the cabin its character. No material grade or production finish is specified.', '深色表面、暖棕软饰与小面积金属点缀，共同构成座舱的气质。这里不指定材质等级或量产工艺。'))}</p></article></div></Reveal></section>
    <nav className="next-section wrap" aria-label={t(copy('Continue exploring', '继续探索'))}><Link to="/explore"><span className="eyebrow">03 / {t(copy('THE SHOWROOM', '展厅'))}</span><span>{t(copy('See the whole idea.', '看见完整的想法。'))}<ArrowUpRight/></span></Link><Link to="/design" className="arrow-link">{t(copy('Return to the exterior', '回看车身设计'))}<ArrowUpRight/></Link></nav>
  </div>;
}
