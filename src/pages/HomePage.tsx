import { useCallback, useState } from "react";
import { CatsList } from "../components/catsList/catsList";
import { LoadingIcon } from "../components/icons/loadingIcon";
import { Pagination } from "../components/pagination/Pagination";
import { useCatsPage } from "../hooks/useCatsPage";
import { useFavorites } from "../hooks/useFavorites";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
  const [page, setPage] = useState(0);
  const { data, isLoading, isError } = useCatsPage(page);
  const { isFavorite, toggleFavorite } = useFavorites();

  const handlePageChange = useCallback((nextPage: number) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (isLoading) {
    return (
      <div className={styles.loader} role="status" aria-label="Загрузка котиков">
        <LoadingIcon />
      </div>
    );
  }

  if (isError || !data?.cats.length) {
    return <p className={styles.status}>Котики не найдены</p>;
  }

  return (
    <div className={styles.homePage}>
      <CatsList
        cats={data.cats}
        isFavorite={isFavorite}
        onToggleFavorite={toggleFavorite}
      />
      <Pagination
        page={page}
        hasNext={data.hasNext}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
