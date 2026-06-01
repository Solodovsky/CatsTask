export type Cat = {
  id: string;
  url: string;
  width: number;
  height: number;
};

export type FavoritesStore = {
  favorites: Cat[];
  toggleFavorite: (cat: Cat) => void;
};

export type CatsPageResponse = {
  cats: Cat[];
  totalPages: number | null;
  hasNext: boolean;
};
