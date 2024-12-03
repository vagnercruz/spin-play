export interface Console {
  id: number;
  name: string;
  year: number;
  games: Game[];
}

export interface Game {
  id: number;
  title: string;
  releaseYear: number;
  genre: string;
  imageUrl: string;
}