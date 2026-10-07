import { asset } from "@/lib/asset";
import { useLanguage } from './language';
import { copy } from '@/lib/veldr-content';

export const artStudies = {
  road: { path: asset("assets/highland-road.jpg"), width: 1920, height: 768, alt: copy('A winding gravel road through rocky, misty highlands under a muted sunrise.', '薄雾中的岩石高地，一条碎石路蜿蜒延伸，天边透出柔和晨光。') },
  material: { path: asset("assets/upholstery-study.jpg"), width: 1200, height: 1000, alt: copy('A warm brown stitched upholstery sample beside olive woven textile on a dark surface.', '深色台面上，暖棕色缝线软饰样片与橄榄色织物并置。') },
  equipment: { path: asset("assets/journey-equipment.jpg"), width: 960, height: 1280, alt: copy('An unbranded olive camera case, folded blank map, metal flask and cord on a stone ledge.', '石台上放着无品牌橄榄色相机包、折叠的空白地图纸、金属水壶与绳索。') },
  controls: { path: asset("assets/controls-detail.jpg"), width: 380, height: 270, alt: copy('A close crop of the three physical knobs beneath the display in the original cabin artwork.', '原始座舱图像的局部：屏幕下方排列的三枚实体旋钮。') },
};
export function StudyImage({ study, className = '' }: { study: keyof typeof artStudies; className?: string }) {
  const { t } = useLanguage(); const image = artStudies[study];
  return <img className={className} src={image.path} width={image.width} height={image.height} alt={t(image.alt)} loading="lazy" decoding="async"/>;
}
export function RoadInterlude() {
  const { t } = useLanguage();
  return <section className="road-interlude"><StudyImage study="road"/><div className="road-line wrap"><p>{t(copy('The road changes. The reason to go doesn’t.', '路况会变，出发的念头不变。'))}</p><span>{t(copy('HIGHLAND / LANDSCAPE STUDY', '高地 / 风景研究'))}</span></div></section>;
}
export function MaterialStudy() {
  const { t } = useLanguage();
  return <section className="material-spread wrap"><figure><StudyImage study="material"/><figcaption>{t(copy('COLOUR & MATERIAL STUDY — NOT A PRODUCTION SPECIFICATION', '色彩与材质研究 — 非量产配置'))}</figcaption></figure><div><p className="eyebrow">{t(copy('A LITTLE WARMTH', '留下一点温度'))}</p><h2>{t(copy('Quiet surfaces.', '安静的表面。'))}<br/>{t(copy('A tangible contrast.', '可触的对照。'))}</h2><p>{t(copy('Warm brown upholstery and stitched trim contrast with the dark dashboard. This is a colour and material study, not a production trim specification.', '暖棕色座椅与缝线软饰，对照深色仪表台。这是一份色彩与材质研究，而非量产配置清单。'))}</p></div></section>;
}