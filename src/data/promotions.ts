export interface Promotion {
  id: string;
  image: string;
  alt: string;
}

export const promotions: Promotion[] = [
  {
    id: "grand-opening",
    image: "/promotions/1.png",
    alt: "Grand Opening Special - 60-Minute Head Treatment Only $78",
  },
];
