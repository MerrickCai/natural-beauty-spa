export interface GalleryImage {
  src: string;
  alt: string;
  category: "exterior" | "lounge" | "treatment-rooms";
}

export const galleryImages: GalleryImage[] = [
  // Exterior
  {
    src: "/gallery/exterior/1.jpg",
    alt: "Natural Beauty Spa exterior view",
    category: "exterior",
  },
  {
    src: "/gallery/exterior/2.jpg",
    alt: "Spa entrance and signage",
    category: "exterior",
  },
  {
    src: "/gallery/exterior/3.jpg",
    alt: "Building facade",
    category: "exterior",
  },
  // Lounge
  {
    src: "/gallery/lounge/1.jpg",
    alt: "Relaxation lounge",
    category: "lounge",
  },
  {
    src: "/gallery/lounge/2.jpg",
    alt: "Comfortable seating area",
    category: "lounge",
  },
  {
    src: "/gallery/lounge/3.jpg",
    alt: "Waiting area ambiance",
    category: "lounge",
  },
  {
    src: "/gallery/lounge/4.jpg",
    alt: "Lounge interior design",
    category: "lounge",
  },
  // Treatment Rooms
  {
    src: "/gallery/treatment-rooms/1.jpg",
    alt: "Professional treatment room",
    category: "treatment-rooms",
  },
  {
    src: "/gallery/treatment-rooms/2.jpg",
    alt: "Facial treatment setup",
    category: "treatment-rooms",
  },
  {
    src: "/gallery/treatment-rooms/3.jpg",
    alt: "Spa bed and equipment",
    category: "treatment-rooms",
  },
  {
    src: "/gallery/treatment-rooms/4.jpg",
    alt: "Treatment room lighting",
    category: "treatment-rooms",
  },
  {
    src: "/gallery/treatment-rooms/5.jpg",
    alt: "Clean, modern treatment space",
    category: "treatment-rooms",
  },
  {
    src: "/gallery/treatment-rooms/6.jpg",
    alt: "Relaxing treatment environment",
    category: "treatment-rooms",
  },
  {
    src: "/gallery/treatment-rooms/7.jpg",
    alt: "Full treatment room view",
    category: "treatment-rooms",
  },
];

export const categoryLabels: Record<GalleryImage["category"], string> = {
  exterior: "Exterior",
  lounge: "Lounge",
  "treatment-rooms": "Treatment Rooms",
};
