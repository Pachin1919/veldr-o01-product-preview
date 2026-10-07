import { asset } from "@/lib/asset";
export type Locale = 'en' | 'zh';
export type Copy = { en: string; zh: string };
export const copy = (en: string, zh: string): Copy => ({ en, zh });
export const views = [
  { id: 'plateau', image: asset("/assets/hero-plateau.png"), title: copy('The plateau', '高地之上'), label: copy('FRONT THREE-QUARTER', '前侧视角'), alt: copy('An unbadged grey O/01 concept SUV on a rocky plateau at sunrise.', '日出时，一辆无品牌标识的灰色 O/01 概念车停在岩石高地上。'), note: copy('An upright front, a broad grille and squared-off shoulders. The first view establishes the O/01 silhouette against an open landscape.', '直立的车头、宽阔的格栅与方正的肩线。开阔的高地背景，衬出 O/01 清晰的轮廓。') },
  { id: 'profile', image: asset("/assets/side-profile.png"), title: copy('A clear silhouette', '清晰的轮廓'), label: copy('SIDE PROFILE', '完整侧面'), alt: copy('The complete side profile of the grey O/01 beside a mountain road.', '灰色 O/01 在山地公路旁的完整侧面轮廓。'), note: copy('A straight roofline connects the upright glazing to a square rear. The wheel arches give the otherwise simple body a deliberate rhythm.', '平直车顶连接直立车窗与方正车尾。向外展开的轮拱，让简洁车身有了清楚的节奏。') },
  { id: 'cabin', image: asset("/assets/interior.png"), title: copy('Inside O/01', '走进 O/01'), label: copy('CABIN STUDY', '座舱研究'), alt: copy('The O/01 cabin with a dark dashboard, physical knobs and warm brown seats.', 'O/01 的深色仪表台、实体旋钮与暖棕色座椅。'), note: copy('A horizontal dashboard keeps the composition calm. Physical knobs sit below the screen, with warm upholstery set against dark surfaces.', '横向仪表台让布局保持安静。屏幕下方排列实体旋钮，暖棕软饰与深色表面形成对照。') },
] as const;
export const exteriorPoints = [
  { id: 'roof', position: 'roof', title: copy('A continuous roofline', '平直的车顶'), text: copy('The roof runs almost level from the windscreen to the rear. Slim rails follow this line without interrupting the squared silhouette.', '车顶从前风挡到车尾保持平直。细长的行李架顺着这条线延伸，不打断方正的轮廓。') },
  { id: 'glass', position: 'glass', title: copy('Upright glazing', '直立的车窗'), text: copy('Large, upright side windows are a defining part of the concept. Dark pillars connect the glazed areas into one clear band.', '开阔、直立的侧窗是这份概念的鲜明特征。深色立柱将车窗连成一道清晰的横向区域。') },
  { id: 'arch', position: 'arch', title: copy('Pronounced wheel arches', '向外展开的轮拱'), text: copy('Dark, angular arch surrounds frame each wheel. They visually separate the lower body from the restrained metal surfaces above.', '深色、带折角的轮拱包围车轮，将车身下部与上方克制的金属表面区分开来。') },
  { id: 'rear', position: 'rear', title: copy('A square rear volume', '方正的车尾'), text: copy('The upright rear continues the simple body geometry. It expresses the idea of space for luggage and equipment, rather than a measured cargo capacity.', '直立车尾延续简洁的车身几何，表达为行李与装备留出空间的设想，而非标定的装载容积。') },
];
export const cabinPoints = [
  { id: 'controls', position: 'controls', title: copy('Controls with a place', '伸手就能用'), text: copy('Three physical knobs sit in a row beneath the screen. In this cabin study, frequent adjustments have a direct, visible place of their own.', '三枚实体旋钮排列在屏幕下方。在这份座舱设想里，常用调节有直接、清楚的位置。') },
  { id: 'dash', position: 'dash', title: copy('A quiet horizontal line', '安静的横向线条'), text: copy('The dark dashboard stretches across the cabin, with the display held within its horizontal shape. The design keeps visual layers simple.', '深色仪表台横贯座舱，屏幕融入其中。设计尽量减少视觉层次，让视线安静下来。') },
  { id: 'trim', position: 'trim', title: copy('A little warmth', '留下一点温度'), text: copy('Warm brown upholstery and stitched trim contrast with the dark dashboard. This is a colour and material study, not a production trim specification.', '暖棕色座椅与缝线软饰，对照深色仪表台。这是一份色彩与材质研究，而非量产配置清单。') },
];
export type HotspotPoint = (typeof exteriorPoints)[number];
