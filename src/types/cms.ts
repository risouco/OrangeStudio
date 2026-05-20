export type Plan = {
  id: string;
  name: string;
  price: number | null;
  priceUnit: string | null;
  description: string;
  target: string;
  order: number;
};

export type News = {
  id: string;
  title: string;
  date: string | null;
  body: string;
};

export type Work = {
  id: string;
  title: string;
  videoUrl: string;
  type: string | null;
  genres: string[];
  effects: string[];
  order: number;
  featured: boolean;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
  category: string | null;
  order: number;
};
