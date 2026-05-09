import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import useProducts from "../hooks/useProducts";
import useFilters from "../hooks/useFilters";

import ProductGrid from "../components/product/ProductGrid";
import FiltersSidebar from "../components/product/FiltersSidebar";
import SortBar from "../components/product/SortBar";
import Pagination from "../components/common/Pagination";
import Loader from "../components/common/Loader";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Estado local para búsqueda con debounce
  const [searchInput, setSearchInput] = useState(
    searchParams.get("search") || ""
  );

  // Sync si cambia la URL manualmente
  useEffect(() => {
    setSearchInput(searchParams.get("search") || "");
  }, [searchParams]);

  // Debounce búsqueda
  useEffect(() => {
    const timeout = setTimeout(() => {
      const next = new URLSearchParams(searchParams);

      if (searchInput.trim() === "") {
        next.delete("search");
      } else {
        next.set("search", searchInput.trim());
      }

      next.set("page", 1);
      setSearchParams(next);
    }, 1000); // 1 segundo

    return () => clearTimeout(timeout);
  }, [searchInput]);

  const params = {
    page: searchParams.get("page") || 1,
    search: searchParams.get("search") || "",
    category: searchParams.get("category") || "",
    min_price: searchParams.get("min_price") || "",
    max_price: searchParams.get("max_price") || "",
    sort: searchParams.get("sort") || "latest",
  };

  const { products, meta, isLoading } = useProducts(params);
  const { filters } = useFilters();

  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams);

    if (value === "") next.delete(key);
    else next.set(key, value);

    next.set("page", 1);

    setSearchParams(next);
  };

  const clearFilters = () => {
    setSearchParams({});
    setSearchInput("");
  };

  const changePage = (page) => {
    const next = new URLSearchParams(searchParams);
    next.set("page", page);
    setSearchParams(next);
  };

  if (!filters) return <Loader />;

  return (
    <div className="grid md:grid-cols-4 gap-8">
      {/* Sidebar */}
      <div>
        <FiltersSidebar
          filters={filters}
          params={params}
          updateParam={updateParam}
          clearFilters={clearFilters}
        />
      </div>

      {/* Productos */}
      <div className="md:col-span-3">
        <SortBar
          params={params}
          updateParam={updateParam}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />

        {isLoading ? (
          <Loader />
        ) : (
          <>
            <ProductGrid products={products} />

            <Pagination
              meta={meta}
              onPageChange={changePage}
            />
          </>
        )}
      </div>
    </div>
  );
}