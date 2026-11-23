import type { GalleryItem } from "./gallery";

// Before/after pairs are cropped from the clinic's own composite photos (public/images/cases/).
// EDIT title + note below with the real treatment for each case (e.g. "Dental Crowns").
export type Case = { id: string; title: string; note: string; before: string; after: string };
const note = "Before and after photos from a patient case at the clinic. Results vary from patient to patient.";
export const cases: Case[] = [
  { id: "case-1", title: "Smile Case 01", note, before: "/images/cases/case-1-before.jpeg", after: "/images/cases/case-1-after.jpeg" },
  { id: "case-2", title: "Smile Case 02", note, before: "/images/cases/case-2-before.jpeg", after: "/images/cases/case-2-after.jpeg" },
  { id: "case-3", title: "Smile Case 03", note, before: "/images/cases/case-3-before.jpeg", after: "/images/cases/case-3-after.jpeg" },
  { id: "case-4", title: "Smile Case 04", note, before: "/images/cases/case-4-before.jpeg", after: "/images/cases/case-4-after.jpeg" },
];

export type Extra = { src: string; title: string; note: string };
export const extras: Extra[] = [
  { src: "/images/gallery-4.jpeg", title: "Case Record", note: "Clinical photos from a restorative case." },
  { src: "/images/gallery-1.jpeg", title: "Prosthetic Models", note: "Dental arch models from a restorative case." },
  { src: "/images/tech.jpeg", title: "Diagnostic X-ray", note: "A digital X-ray used to plan treatment." },
];

export const clinicPhotos = [
  { src: "/images/Clinic-1.jpeg", alt: "Reception and waiting area", caption: "Reception & waiting area" },
  { src: "/images/Clinic-2.jpeg", alt: "Front desk and staircase", caption: "Front desk" },
  { src: "/images/Clinic-3.jpeg", alt: "Clinic interior with glass partition", caption: "Clinic interior" },
  { src: "/images/tech-2.jpeg", alt: "Treatment room counter and equipment", caption: "Equipment & storage" },
];

const treatmentPhoto = (n: number) => ({ src: `/images/gallery-${n}.jpeg`, alt: `Treatment in progress ${n - 6}` });
export const actionPhotos = [
  treatmentPhoto(7),
  treatmentPhoto(8),
  { src: "/images/treatments/kids-1.jpeg", alt: "Dentist with a young patient at the clinic" },
  { src: "/images/treatments/kids-2.jpeg", alt: "Dentist with a young patient in the treatment chair" },
  treatmentPhoto(9),
  treatmentPhoto(10),
];

// Everything that opens in the full-screen viewer, in one list.
export const viewerItems: GalleryItem[] = [
  ...cases.flatMap(c => [
    { src: c.before, alt: `${c.title} before`, category: "Before & After" },
    { src: c.after, alt: `${c.title} after`, category: "Before & After" },
  ]),
  ...extras.map(e => ({ src: e.src, alt: e.title, category: "Treatment" })),
];
export const viewerIndex = (src: string) => Math.max(0, viewerItems.findIndex(v => v.src === src));