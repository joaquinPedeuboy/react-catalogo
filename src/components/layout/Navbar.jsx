import { Link } from "react-router-dom";
import { useState } from "react";
import useCategories from "../../hooks/useCategories";
import Logo from "../../assets/emiliaNav.webp";

export default function Navbar() {
    const { categories } = useCategories();

    const [open, setOpen] = useState(false);
    const [openCategories, setOpenCategories] = useState(false);

    const closeMenu = () => {
        setOpen(false);
        setOpenCategories(false);
    };

    const featuredCategories = categories.slice(0, 5);

    return (
        <header className="sticky top-0 z-50 bg-background/60 backdrop-blur shadow-sm">

            {/* MAIN NAVBAR */}
            <div className="max-w-7xl mx-auto px-4">

                <div className="relative flex items-center justify-between h-20">

                    {/* LOGO */}
                    <Link
                        to="/"
                        onClick={closeMenu}
                        className="flex items-center shrink-0 z-10"
                    >
                        <img
                            src={Logo}
                            alt="Logo de la tienda"
                            className="h-28 w-auto object-contain"
                        />
                    </Link>

                    {/* DESKTOP NAV */}
                    <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10">

                        <Link
                            to="/"
                            className="text-sm font-sans tracking-wide text-gray-700 rounded-xl hover:bg-background hover:text-white/95 md:p-2 transition"
                        >
                            Inicio
                        </Link>

                        <Link
                            to="/products"
                            className="text-sm font-sans tracking-wide text-gray-700 rounded-xl hover:bg-background hover:text-white/95 md:p-2 transition"
                        >
                            Productos
                        </Link>

                        {/* DESKTOP DROPDOWN */}
                        <div className="relative group z-50">

                            <button
                                className="text-sm font-sans tracking-wide text-gray-700 rounded-xl hover:bg-background hover:text-white/95 md:p-2 transition"
                            >
                                Categorías
                            </button>

                            <div className="
                                absolute top-full left-1/2 -translate-x-1/2
                                mt-4
                                w-64
                                bg-white
                                border
                                rounded-2xl
                                shadow-xl
                                opacity-0
                                invisible
                                group-hover:opacity-100
                                group-hover:visible
                                transition-all
                                duration-200
                                p-3
                                z-50
                            ">
                                <div className="grid gap-2">
                                    {categories.map((cat) => (
                                        <Link
                                            key={cat.id}
                                            to={`/products?category=${cat.slug}`}
                                            className="
                                                px-4 py-2
                                                rounded-xl
                                                text-sm
                                                text-gray-700
                                                hover:bg-gray-100
                                                transition
                                            "
                                        >
                                            {cat.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </nav>

                    {/* MOBILE BUTTON */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="
                            md:hidden
                            w-11 h-11
                            flex items-center justify-center
                            rounded-xl
                            border
                            border-gray-100
                            bg-background/20
                            shadow-sm
                        "
                        aria-label="Abrir menú"
                    >
                        <div className="space-y-1.5">
                            <span className="block w-5 h-0.5 bg-black"></span>
                            <span className="block w-5 h-0.5 bg-black"></span>
                            <span className="block w-5 h-0.5 bg-black"></span>
                        </div>
                    </button>

                </div>
            </div>

            {/* FEATURED CATEGORIES */}
            {featuredCategories.length > 0 && (
                <div className="hidden md:block mt-2 bg-gray-100">
                    <div className="max-w-7xl mx-auto px-4 py-3">

                        <div className="flex justify-center items-center gap-3 overflow-x-auto scrollbar-none">

                            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 shrink-0">
                                Categorías
                            </span>

                            {featuredCategories.map((cat) => (
                                <Link
                                    key={cat.id}
                                    to={`/products?category=${cat.slug}`}
                                    className="
                                        shrink-0
                                        text-sm
                                        px-4 py-2
                                        rounded-full
                                        bg-white
                                        border
                                        border-gray-300
                                        text-gray-700
                                        hover:bg-primary/20
                                        transition
                                    "
                                >
                                    {cat.name}
                                </Link>
                            ))}
                        </div>

                    </div>
                </div>
            )}

            {/* MOBILE MENU */}
            {open && (
                <div className="md:hidden border-t mt-2 border-gray-100 bg-primary/5">

                    <div className="px-4 py-4 space-y-2">

                        <Link
                            to="/"
                            onClick={closeMenu}
                            className="block px-4 py-3 rounded-xl font-sans hover:bg-gray-100"
                        >
                            Inicio
                        </Link>

                        <Link
                            to="/products"
                            onClick={closeMenu}
                            className="block px-4 py-3 rounded-xl font-sans hover:bg-gray-100"
                        >
                            Productos
                        </Link>

                        {/* MOBILE CATEGORIES */}
                        {categories.length > 0 && (
                            <div className="border-t border-gray-100 pt-3">

                                <button
                                    onClick={() =>
                                        setOpenCategories(!openCategories)
                                    }
                                    className="
                                        w-full
                                        flex items-center justify-between
                                        px-4 py-3
                                        rounded-xl
                                        font-sans
                                        hover:bg-gray-100
                                    "
                                >
                                    <span>Categorías</span>

                                    <span
                                        className={`transition-transform ${
                                            openCategories ? "rotate-180" : ""
                                        }`}
                                    >
                                        ▼
                                    </span>
                                </button>

                                {openCategories && (
                                    <div className="mt-2 grid grid-cols-2 gap-2">

                                        {categories.map((cat) => (
                                            <Link
                                                key={cat.id}
                                                to={`/products?category=${cat.slug}`}
                                                onClick={closeMenu}
                                                className="
                                                    text-sm
                                                    px-3 py-2
                                                    rounded-xl
                                                    font-sans
                                                    bg-primary/30
                                                    border
                                                    border-gray-300
                                                    hover:bg-gray-100
                                                "
                                            >
                                                {cat.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
}