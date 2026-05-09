import useSWR from "swr";
import { fetcher } from "../api/fetcher";

export default function useProduct(slug) {
    const key = slug ? `/products/${slug}` : null;
    const { data, error, isLoading, mutate } = useSWR(key, fetcher);

    return {
        product: data?.data ?? data ?? null,
        isLoading,
        error,
        mutate,
    };
}