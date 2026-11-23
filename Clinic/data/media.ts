// Photos and videos from the clinic.
// Files live in public/media/.

// To add more, drop files into public/media/photos or public/media/videos
// and add a corresponding entry below.

export type MediaItem =
  | {
      type: "photo";
      src: string;
      alt: string;
      caption: string;
    }
  | {
      type: "video";
      src: string;
      poster: string;
      alt: string;
      caption: string;
      seconds: number;
    };

const p = (n: number, caption: string): MediaItem => ({
  type: "photo",
  src: `/media/photos/photo-${n}.jpeg`,
  alt: caption,
  caption,
});

const id = (n: number) => String(n).padStart(2, "0");

const v = (n: number, seconds: number): MediaItem => ({
  type: "video",
  src: `/media/videos/video-${id(n)}.mp4`,
  poster: `/media/posters/video-${id(n)}.jpg`,
  alt: `Clinic video ${n}`,
  caption: `Clinic video ${n}`,
  seconds,
});

export const clinicPhotoMedia: MediaItem[] = [
  p(1, "Treatment in progress"),
  p(2, "With our young patients"),
  p(3, "Our treatment floor"),
  p(4, "Reviewing a diagnostic X-ray"),
];

export const clinicVideoMedia: MediaItem[] = [
  v(1, 13),
  v(6, 52),
  v(12, 19),
  v(5, 3),
  v(3, 9),
  v(7, 2),
  v(8, 4),
  v(9, 3),
  v(10, 118),
  v(11, 14),
  
  v(13, 145),
  v(14, 11),
  v(15, 8),
  v(16, 9),
  v(17, 29),
  v(18, 30),
];

// Combine photos and videos into one gallery.
const media: MediaItem[] = [
  ...clinicPhotoMedia,
  ...clinicVideoMedia,
];

// Swap items using 1-based positions.
// Works for any combination of photos and videos.
function swapMedia(
  items: MediaItem[],
  positionA: number,
  positionB: number
): MediaItem[] {
  const result = [...items];

  const indexA = positionA - 1;
  const indexB = positionB - 1;

  if (
    indexA < 0 ||
    indexB < 0 ||
    indexA >= result.length ||
    indexB >= result.length
  ) {
    throw new RangeError("Media position is out of range.");
  }

  [result[indexA], result[indexB]] = [
    result[indexB],
    result[indexA],
  ];

  return result;
}

// Apply both swaps in sequence.
let reorderedMedia = swapMedia(media, 1, 5);
reorderedMedia = swapMedia(reorderedMedia, 2, 5);

export const allMedia: MediaItem[] = reorderedMedia;