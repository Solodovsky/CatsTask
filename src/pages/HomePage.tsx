import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { CatsList } from "../components/catsList/catsList";
import { LoadingIcon } from "../components/icons/loadingIcon";
import { Pagination } from "../components/pagination/Pagination";
import { useCatsPage } from "../hooks/useCatsPage";
import { useFavorites } from "../hooks/useFavorites";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = useMemo(() => {
    const rawPage = Number(searchParams.get("page") ?? "1");
    if (!Number.isFinite(rawPage) || rawPage < 1) {
      return 0;
    }

    return Math.floor(rawPage) - 1;
  }, [searchParams]);
  const { data, isLoading, error } = useCatsPage(page);
  const { isFavorite, toggleFavorite } = useFavorites();

  const handlePageChange = useCallback(
    (nextPage: number) => {
      setSearchParams((prevParams) => {
        const nextParams = new URLSearchParams(prevParams);
        nextParams.set("page", String(nextPage + 1));

        return nextParams;
      });
    },
    [setSearchParams],
  );

  if (isLoading) {
    return (
      <div
        className={styles.loader}
        role="status"
        aria-label="Загрузка котиков"
      >
        <LoadingIcon />
      </div>
    );
  }

  if (error) {
    return (
      <p className={styles.status}>
        {error instanceof Error ? error.message : "Ошибка при загрузке котиков"}
      </p>
    );
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
