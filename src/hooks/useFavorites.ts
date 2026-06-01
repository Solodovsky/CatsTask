import { useFavoritesStore } from "../store/favoritesStore";

export const useFavorites = () => {
  const favorites = useFavoritesStore((state) => state.favorites);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  return {
    favorites,
    toggleFavorite,
    isFavorite: (id: string) => favorites.some((cat) => cat.id === id),
  };
};
