export interface Promotion {
  id: string;
  image: string;
  alt: string;
  displayMode?: "portrait" | "landscape";
}

export const promotions: Promotion[] = [];
