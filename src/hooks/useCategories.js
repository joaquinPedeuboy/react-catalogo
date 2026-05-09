import useSWR from "swr";
import { fetcher } from "../api/fetcher";

export default function useCategories() {
    const { data, error, isLoading, mutate } = useSWR("/categories", fetcher);

    return {
        categories: data ?? [],
        isLoading,
        error,
        mutate,
    };
}