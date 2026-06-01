import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchCatsPage } from "../api/catsApi";
import { catsQueryKeys } from "../lib/queryClient";

export const useCatsPage = (page: number) => {
  return useQuery({
    queryKey: catsQueryKeys.page(page),
    queryFn: () => fetchCatsPage(page),
    placeholderData: keepPreviousData,
  });
};
