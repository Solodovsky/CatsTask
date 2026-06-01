import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { FavoritesStore } from "../types";

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set) => ({
      favorites: [],
      toggleFavorite: (cat) =>
        set((state) => ({
          favorites: state.favorites.some((item) => item.id === cat.id)
            ? state.favorites.filter((item) => item.id !== cat.id)
            : [...state.favorites, cat],
        })),
    }),
    {
      name: "cats-favorites",
    },
  ),
);
