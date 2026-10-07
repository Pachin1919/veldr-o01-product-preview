import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowLeft, ArrowRight, ArrowUpRight, RotateCcw } from 'lucide-react';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/veldr/language';
import { pageMeta } from '@/components/veldr/page-meta';
import { copy, views } from '@/lib/veldr-content';
export const Route = createFileRoute('/explore')({ head: () => pageMeta('Three-view Showroom — VELDR O/01', 'Explore the original VELDR O/01 concept artwork in three complete views: the plateau, exterior profile and cabin.'), component: Explore });
function Explore() {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});
  const [failed, setFailed] = useState<Record<string, boolean>>({});
  const [retry, setRetry] = useState(0);
  const start = useRef<{ x: number; y: number } | null>(null);
  const view = views[index] ?? views[0];
  const move = (direction: number) => setIndex((value) => (value + direction + views.length) % views.length);
  return <div className="gallery-page"><div className="wrap gallery-heading"><Link to="/" className="back-link"><ArrowLeft/>{t(copy('Back to O/01', '返回 O/01'))}</Link><div><p className="eyebrow">VELDR O/01 / {t(copy('SHOWROOM', '展厅'))}</p><h1>{t(copy('Three views. One idea.', '三个视角，同一个想法。'))}</h1></div><span className="gallery-count">0{index + 1}<span> / 03</span></span></div>
    <div className="gallery-stage wrap" role="region" aria-roledescription={t(copy('carousel', '轮播图'))} aria-label={t(copy('O/01 image showroom', 'O/01 图像展厅'))} tabIndex={0} onKeyDown={(event) => { if (event.key === 'ArrowRight') { event.preventDefault(); move(1); } if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); } if (event.key === 'Home') { event.preventDefault(); setIndex(0); } if (event.key === 'End') { event.preventDefault(); setIndex(2); } }} onTouchStart={(event) => { const touch = event.touches[0]; if (touch) start.current = { x: touch.clientX, y: touch.clientY }; }} onTouchEnd={(event) => { const touch = event.changedTouches[0]; if (touch && start.current) { const dx = touch.clientX - start.current.x; const dy = touch.clientY - start.current.y; if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.4) move(dx < 0 ? 1 : -1); } start.current = null; }}>
      <img key={`${view.id}-${retry}`} ref={(image) => { if (image?.complete && image.naturalWidth > 0 && !loaded[view.id]) setLoaded((state) => ({ ...state, [view.id]: true })); }} src={view.image} alt={t(view.alt)} onLoad={() => { setLoaded((state) => ({ ...state, [view.id]: true })); setFailed((state) => ({ ...state, [view.id]: false })); }} onError={() => setFailed((state) => ({ ...state, [view.id]: true }))}/>
      {!loaded[view.id] && !failed[view.id] && <div className="image-status" role="status">{t(copy('Loading view…', '正在载入图像…'))}</div>}
      {failed[view.id] && <div className="image-status" role="alert"><p>{t(copy('This view couldn’t load.', '这张图像暂时无法载入。'))}</p><Button variant="showroom" onClick={() => { setFailed((state) => ({ ...state, [view.id]: false })); setRetry((value) => value + 1); }}><RotateCcw/>{t(copy('Try again', '重试'))}</Button></div>}
      <span className="gallery-image-label">{t(view.label)} / 0{index + 1}</span>
    </div>
    <div className="wrap gallery-controls"><div className="gallery-tabs" aria-label={t(copy('Choose a view', '选择视角'))}>{views.map((item, i) => <Button key={item.id} variant="quiet" aria-pressed={index === i} onClick={() => setIndex(i)}><span>0{i + 1}</span>{t(item.title)}</Button>)}</div><div className="gallery-arrows"><Button variant="quiet" size="icon" aria-label={t(copy('Previous view', '上一视角'))} onClick={() => move(-1)}><ArrowLeft/></Button><Button variant="quiet" size="icon" aria-label={t(copy('Next view', '下一视角'))} onClick={() => move(1)}><ArrowRight/></Button></div></div>
    <div className="wrap gallery-caption" aria-live="polite"><h2>{t(view.title)}</h2><p>{t(view.note)}</p><Link to={view.id === 'cabin' ? '/cabin' : '/design'} className="arrow-link">{t(view.id === 'cabin' ? copy('Explore the cabin', '探索座舱') : copy('Explore the design', '探索设计'))}<ArrowUpRight/></Link></div>
  </div>;
}
