import useSWR from "swr";
import { fetcher } from "../api/fetcher";

export default function useFilters() {
    const { data, error, isLoading, mutate } = useSWR("/filters", fetcher);

    return {
        filters: data ?? null,
        isLoading,
        error,
        mutate,
    };
}