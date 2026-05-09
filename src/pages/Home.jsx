import ProductGrid from "../components/product/ProductGrid";
import useHome from "../hooks/useHome";
import Loader from "../components/common/Loader";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchBar from "../components/common/SearchBar";

export default function Home() {

    const { home, isLoading, error } = useHome();
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const submitSearch = (e) => {
        e.preventDefault();

        if (!search.trim()) return;

        navigate(`/products?search=${encodeURIComponent(search)}`);
    };

    if (isLoading) return <Loader />;
    if (error) return <p className="py-10 text-center text-red-500">Error al cargar el home</p>;

    return (
        <>
            <section className="bg-gray-100 rounded-2xl md:rounded-3xl px-5 py-8 md:px-10 md:py-14 text-center mb-8 md:mb-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 leading-tight">
                Bienvenido a la tienda
                </h1>
                <p className="text-sm sm:text-base text-gray-600 mb-5 md:mb-6 max-w-xl mx-auto">
                Productos seleccionados para vos
                </p>
                <form onSubmit={submitSearch} className="max-w-xl mx-auto">
                    <SearchBar
                        value={search}
                        onChange={setSearch}
                        placeholder="Buscar velas, lámparas, espejos..."
                    />
                </form>
            </section>

            {/* BANNERS */}
            {home?.banners?.length > 0 && (
                <section className="mb-8 md:mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {home.banners.map((banner, index) => (
                    <div
                        key={index}
                        className="rounded-2xl md:rounded-3xl bg-gray-50 p-5 md:p-8 border"
                    >
                        <h2 className="text-xl md:text-2xl font-bold leading-tight">
                        {banner.title}
                        </h2>

                        <p className="text-sm md:text-base text-gray-600 mt-2">
                        {banner.subtitle}
                        </p>

                        {banner.link && (
                        <Link
                            to={banner.link}
                            className="inline-block mt-4 md:mt-5 bg-black text-white px-5 py-2.5 rounded-xl text-sm md:text-base"
                        >
                            Ver más
                        </Link>
                        )}
                    </div>
                    ))}
                </div>
                </section>
            )}

            {/* DESTACADOS */}
            <section className="mb-10">
                <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl md:text-4xl font-bold border-b border-gray-300 pb-1 font-serif">
                    Destacados
                </h2>

                <Link
                    to="/products"
                    className="text-sm text-gray-600 hover:text-black rounded-full border opacity-25 blur-md border-gray-300 px-3 py-1 transition-colors"
                >
                    Ver todos
                </Link>
                </div>

                <ProductGrid products={home.featured_products || []} />
            </section>

            {/* NUEVOS */}
            <section className="mb-10">
                <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl md:text-4xl font-bold border-b border-gray-300 pb-1 font-serif">
                    Nuevos ingresos
                </h2>

                <Link
                    to="/products?sort=latest"
                    className="text-sm text-gray-600 hover:text-black rounded-full border border-gray-300 px-3 py-1 transition-colors"
                >
                    Ver todos
                </Link>
                </div>

                <ProductGrid products={home.latest_products || []} />
            </section>
        </>
    )
}
