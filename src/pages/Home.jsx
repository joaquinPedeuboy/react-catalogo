import ProductGrid from "../components/product/ProductGrid";
import useHome from "../hooks/useHome";
import Loader from "../components/common/Loader";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchBar from "../components/common/SearchBar";
import SectionHeader from "../components/common/SectionHeader";

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
            <section
                className="
                    relative
                    overflow-hidden
                    rounded-3xl
                    px-6 py-14
                    md:px-12 md:py-20
                    mb-10
                    bg-linear-to-br
                    from-secondary
                    to-white
                    border
                    border-gray-300
                    shadow-sm
                "
            >
                {/* DECORATION */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>

                <div className="relative z-10 text-center max-w-3xl mx-auto">

                    {/* MINI LABEL */}
                    <span
                        className="
                            inline-block
                            mb-4
                            px-4 py-1.5
                            rounded-full
                            bg-white
                            border
                            text-xs
                            uppercase
                            tracking-[0.25em]
                            text-gray-600
                            shadow-sm
                        "
                    >
                        Decoración & Aromas
                    </span>

                    {/* TITLE */}
                    <h1
                        className="
                            text-4xl
                            sm:text-5xl
                            md:text-6xl
                            font-bold
                            leading-tight
                            text-gray-900
                            mb-5
                        "
                    >
                        Transformá tus espacios
                    </h1>

                    {/* DESCRIPTION */}
                    <p
                        className="
                            text-base
                            md:text-lg
                            text-gray-600
                            max-w-2xl
                            mx-auto
                            leading-relaxed
                            mb-8
                        "
                    >
                        Velas, lámparas y objetos decorativos seleccionados para
                        crear ambientes cálidos y únicos.
                    </p>

                    {/* SEARCH */}
                    <form
                        onSubmit={submitSearch}
                        className="max-w-2xl mx-auto"
                    >
                        <SearchBar
                            value={search}
                            onChange={setSearch}
                            placeholder="Buscar velas, lámparas, espejos..."
                        />
                    </form>
                </div>
            </section>

            {/* BANNERS */}
            {home?.banners?.length > 0 && (
                <section className="mb-20">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {home.banners.map((banner, index) => (
                            <div
                                key={index}
                                className="
                                    relative
                                    overflow-hidden
                                    rounded-3xl
                                    border
                                    border-gray-300
                                    bg-gradient-to-br
                                    from-secondary
                                    to-white
                                    p-8 md:p-10
                                    min-h-[280px]
                                    flex flex-col justify-between
                                    shadow-sm
                                "
                            >
                                {/* DECORATION */}
                                <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl"></div>

                                <div className="relative z-10">

                                    <span
                                        className="
                                            text-xs
                                            uppercase
                                            tracking-[0.25em]
                                            text-gray-500
                                        "
                                    >
                                        Colección
                                    </span>

                                    <h2
                                        className="
                                            text-3xl
                                            md:text-4xl
                                            font-serif
                                            font-bold
                                            leading-tight
                                            mt-4
                                            text-gray-900
                                        "
                                    >
                                        {banner.title}
                                    </h2>

                                    <p
                                        className="
                                            text-gray-600
                                            mt-4
                                            max-w-md
                                            leading-relaxed
                                        "
                                    >
                                        {banner.subtitle}
                                    </p>
                                </div>

                                {banner.link && (
                                    <Link
                                        to={banner.link}
                                        className="
                                            relative z-10
                                            inline-flex
                                            items-center gap-2
                                            mt-8
                                            w-fit
                                            px-5 py-3
                                            rounded-full
                                            bg-primary/90
                                            text-white
                                            text-sm
                                            hover:scale-105
                                            transition
                                        "
                                    >
                                        Ver colección →
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* DESTACADOS */}
            <section className="mb-14">

                {/* HEADER */}
                <SectionHeader
                    label="Colección"
                    title="Destacados"
                    link="/products"
                />

                {/* PRODUCTS */}
                <ProductGrid products={home.featured_products || []} />

                {/* MOBILE BUTTON */}
                <div className="mt-6 flex justify-center sm:hidden">
                    <Link
                        to="/products"
                        className="
                            px-5 py-3
                            rounded-full
                            border
                            text-sm
                            text-gray-700
                            font-sans
                            hover:bg-black
                            hover:text-white
                            transition
                            shadow-sm
                            border-gray-300
                            shadow-gray-200
                        "
                    >
                        Ver todos los productos
                    </Link>
                </div>

            </section>

            {/* NUEVOS */}
            <section className="mb-10">
                <SectionHeader
                    label="Colección"
                    title="Nuevos ingresos"
                    link="/products?sort=latest"
                />
                <ProductGrid products={home.latest_products || []} />
            </section>

            {/* NOSOTROS */}
            <section className="py-20 bg-[#fdfbf8] border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

                    {/* INFO */}
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-3">
                            Sobre la marca
                        </p>

                        <h2 className="text-4xl font-serif mb-6 text-gray-900">
                            Objetos pensados para transformar tu hogar
                        </h2>

                        <p className="text-gray-600 leading-8 mb-6">
                            Encontrá decoración, textiles y objetos pensados para
                            transformar cada rincón de tu hogar.
                        </p>

                        <div className="space-y-4 text-gray-700">
                            <div className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin text-red-600"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0" /></svg>
                                calle 25 entre 22 y 24, Galería Metro local 15,
                                Mercedes, Buenos Aires
                            </div>
                            <div className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-amber-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                Lunes a Sábados de 9 a 12hs y de 16 a 20hs
                            </div>
                            <div className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp text-green-600"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
                                WhatsApp: +54 9 2324 586726
                            </div>
                        </div>
                    </div>

                    {/* MAPA */}
                    <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-4">
                            Visitá nuestro showroom
                        </p>

                        <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 p-1 bg-white">
                            <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d820.5319140614808!2d-59.43107773033502!3d-34.65147889508105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDM5JzA1LjMiUyA1OcKwMjUnNDkuNiJX!5e0!3m2!1ses-419!2sar!4v1778641035929!5m2!1ses-419!2sar"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                        <a
                        href="https://www.google.com/maps?q=-34.651469,-59.430430"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2
                        px-5 py-3
                        rounded-full
                        bg-primary/90
                        text-white
                        text-sm
                        font-sans
                        shadow-md
                        hover:bg-primary
                        hover:scale-[1.02]
                        transition"
                        >
                        Ver en Google Maps →
                        </a>
                    </div>

                </div>
                
            </section>
        </>
    )
}
