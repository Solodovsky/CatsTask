import React from "react";
import classNames from "classnames";
import styles from "./Pagination.module.scss";

const PAGE_COUNT = 5;

type PaginationProps = {
  page: number;
  hasNext: boolean;
  onPageChange: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({
  page,
  hasNext,
  onPageChange,
}) => {
  const pages = Array.from({ length: PAGE_COUNT }, (_, index) => index);

  return (
    <nav className={styles.pagination} aria-label="Пагинация">
      {pages.map((pageIndex) => {
        const isActive = pageIndex === page;
        const isDisabled = pageIndex > page && !hasNext;

        return (
          <button
            key={pageIndex}
            type="button"
            className={classNames(styles.pageButton, {
              [styles.pageButtonActive]: isActive,
              [styles.pageButtonDisabled]: isDisabled,
            })}
            disabled={isDisabled}
            aria-label={`Страница ${pageIndex + 1}`}
            aria-current={isActive ? "page" : undefined}
            onClick={() => onPageChange(pageIndex)}
          >
            {pageIndex + 1}
          </button>
        );
      })}
    </nav>
  );
};
