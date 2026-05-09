import useSWR from "swr";
import { fetcher } from "../api/fetcher";

export default function useProducts(params) {
    const query = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
        if (value !== "" && value !== null && value !== undefined) {
        query.append(key, value);
        }
    });

    const queryString = query.toString();
    const url = queryString ? `/products?${queryString}` : "/products";

    const { data, error, isLoading } = useSWR(url, fetcher, {
        keepPreviousData: true,
    });

    return {
        products: data?.data || [],
        meta: data?.meta || null,
        error,
        isLoading,
    };
}