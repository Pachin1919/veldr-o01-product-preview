import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { copy, type HotspotPoint } from '@/lib/veldr-content';
import { useLanguage } from './language';
export function HotspotStudy({ image, alt, points, kind }: { image: string; alt: string; points: HotspotPoint[]; kind: 'exterior' | 'interior' }) {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<string | null>(null);
  const point = points.find((item) => item.id === selected);
  const select = (id: string) => setSelected((value) => value === id ? null : id);
  return <div className={`hotspot-study ${kind}`} onKeyDown={(event) => { if (event.key === 'Escape') setSelected(null); }}>
    <div className="annotated-image"><img src={image} alt={alt}/>{points.map((item, index) => <Button key={item.id} variant="hotspot" size="icon" className={`hotspot point-${item.position}`} aria-label={`${String(index + 1).padStart(2, '0')} — ${t(item.title)}`} aria-expanded={selected === item.id} aria-controls={`${kind}-annotation`} onClick={() => select(item.id)} title={t(item.title)}>{selected === item.id ? <Minus/> : <Plus/>}</Button>)}</div>
    <div className="annotation-bar"><span className="eyebrow">{t(copy('DESIGN OBSERVATIONS', '设计观察'))}</span><div className="annotation-selectors">{points.map((item, index) => <Button key={item.id} variant="quiet" aria-expanded={selected === item.id} aria-controls={`${kind}-annotation`} onClick={() => select(item.id)}><span>{String(index + 1).padStart(2, '0')}</span>{t(item.title)}</Button>)}</div></div>
    <div id={`${kind}-annotation`} className={`annotation-detail ${point ? 'is-open' : ''}`} aria-live="polite">{point && <><h3>{t(point.title)}</h3><p>{t(point.text)}</p><Button variant="quiet" onClick={() => setSelected(null)} aria-label={t(copy('Close annotation', '关闭说明'))}><Minus/></Button></>}</div>
  </div>;
}
