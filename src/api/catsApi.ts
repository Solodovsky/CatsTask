import type { Cat, CatsPageResponse } from "../types";

export const CATS_PER_PAGE = 10;

const CATS_API_BASE =
  "https://api.thecatapi.com/v1/images/search?order=ASC";

export const fetchCatsPage = async (page: number): Promise<CatsPageResponse> => {
  const response = await fetch(
    `${CATS_API_BASE}&page=${page}&limit=${CATS_PER_PAGE}`,
  );

  if (!response.ok) {
    throw new Error("Не удалось загрузить котиков");
  }

  const cats: Cat[] = await response.json();
  const totalCount = response.headers.get("Pagination-Count");
  const totalPages = totalCount
    ? Math.ceil(Number(totalCount) / CATS_PER_PAGE)
    : null;

  return {
    cats,
    totalPages,
    hasNext:
      totalPages !== null
        ? page < totalPages - 1
        : cats.length === CATS_PER_PAGE,
  };
};
