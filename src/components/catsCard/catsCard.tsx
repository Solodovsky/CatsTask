import React from "react";
import classNames from "classnames";
import type { Cat } from "../../types";
import styles from "./catsCard.module.scss";
import { HeartIcon } from "../icons/heartIcon";

type CatsCardProps = {
  cat: Cat;
  isFavorite: boolean;
  onToggleFavorite: (cat: Cat) => void;
};

export const CatsCard: React.FC<CatsCardProps> = ({
  cat,
  isFavorite,
  onToggleFavorite,
}) => {
  const handleToggleFavorite = () => {
    onToggleFavorite(cat);
  };

  return (
    <div className={styles.catsCard}>
      <img className={styles.catsCardImage} src={cat.url} alt={cat.id} />
      <button
        type="button"
        className={classNames(styles.heartIcon, {
          [styles.heartIconFavorite]: isFavorite,
        })}
        aria-label={isFavorite ? "Убрать из избранного" : "Добавить в избранное"}
        aria-pressed={isFavorite}
        onClick={handleToggleFavorite}
      >
        <HeartIcon width={40} height={37} className={styles.heartOutline} />
        <HeartIcon
          width={40}
          height={37}
          filled
          className={styles.heartFilled}
        />
      </button>
    </div>
  );
};
