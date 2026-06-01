import { CatsList } from "../components/catsList/catsList";
import { useFavorites } from "../hooks/useFavorites";

export const FavoritesPage = () => {
  const { favorites, isFavorite, toggleFavorite } = useFavorites();

  return (
    <CatsList
      cats={favorites}
      isFavorite={isFavorite}
      onToggleFavorite={toggleFavorite}
    />
  );
};
