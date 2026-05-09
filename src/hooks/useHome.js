import useSWR from "swr";
import { fetcher } from "../api/fetcher";

export default function useHome() {
    const { data, error, isLoading, mutate } = useSWR("/home", fetcher);

    return {
        home: data ?? null,
        isLoading,
        error,
        mutate,
    };
}