export interface Promotion {
  id: string;
  image: string;
  alt: string;
  displayMode?: "portrait" | "landscape";
}

export const promotions: Promotion[] = [
  {
    id: "grand-opening",
    image: "/promotions/1.jpg",
    alt: "Grand Opening Special - 60-Minute Head Treatment Only $78",
    displayMode: "portrait",
  },
];
