// Replace the src files in public/images/ (or point to your own photos).
export type GalleryItem = { src: string; alt: string; category: string };
export const categories = ["All", "Clinic", "Doctor", "Treatment", "Before & After"];
const cats = ["Treatment", "Before & After", "Before & After", "Before & After", "Before & After", "Before & After"];
export const gallery: GalleryItem[] = cats.map((category, i) => ({
  src: `/images/gallery-${i + 1}.jpeg`, alt: `${category} photo ${i + 1}`, category,
}));
