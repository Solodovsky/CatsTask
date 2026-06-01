import React from "react";
import type { Cat } from "../../types";
import { CatsCard } from "../catsCard/catsCard";
import styles from "./catsList.module.scss";

type CatsListProps = {
  cats: Cat[];
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (cat: Cat) => void;
};

export const CatsList: React.FC<CatsListProps> = ({
  cats,
  isFavorite,
  onToggleFavorite,
}) => {
  return (
    <div className={styles.catsList}>
      {cats.map((cat) => (
        <CatsCard
          key={cat.id}
          cat={cat}
          isFavorite={isFavorite(cat.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};
