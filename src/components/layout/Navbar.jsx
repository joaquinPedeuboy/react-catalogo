import { Link } from "react-router-dom";
import { useState } from "react";
import useCategories from "../../hooks/useCategories";

export default function Navbar() {
    const { categories } = useCategories();
    const [open, setOpen] = useState(false);

    const closeMenu = () => setOpen(false);

    return (
        <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">

            {/* TOP BAR */}
            <div className="h-16 flex items-center justify-between">

            {/* LOGO */}
            <Link
                to="/"
                className="text-xl md:text-2xl font-bold tracking-tight"
                onClick={closeMenu}
            >
                Mi Tienda
            </Link>

            {/* DESKTOP MENU */}
            <nav className="hidden md:flex items-center gap-8">
                <Link
                to="/"
                className="text-sm font-medium text-gray-700 hover:text-black transition"
                >
                Inicio
                </Link>

                <Link
                to="/products"
                className="text-sm font-medium text-gray-700 hover:text-black transition"
                >
                Productos
                </Link>
            </nav>

            {/* MOBILE BUTTON */}
            <button
                onClick={() => setOpen(!open)}
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border"
                aria-label="Abrir menú"
            >
                <div className="space-y-1.5">
                <span className="block w-5 h-0.5 bg-black"></span>
                <span className="block w-5 h-0.5 bg-black"></span>
                <span className="block w-5 h-0.5 bg-black"></span>
                </div>
            </button>
            </div>

            {/* MOBILE MENU */}
            {open && (
            <div className="md:hidden pb-4 border-t pt-4 space-y-3">

                <Link
                to="/"
                onClick={closeMenu}
                className="block px-3 py-2 rounded-xl hover:bg-gray-100"
                >
                Inicio
                </Link>

                <Link
                to="/products"
                onClick={closeMenu}
                className="block px-3 py-2 rounded-xl hover:bg-gray-100"
                >
                Productos
                </Link>

                {categories.length > 0 && (
                <div className="pt-2 border-t">
                    <p className="text-xs uppercase tracking-wide text-gray-500 px-3 mb-2">
                    Categorías
                    </p>

                    <div className="grid grid-cols-2 gap-2">
                    {categories.map((cat) => (
                        <Link
                        key={cat.id}
                        to={`/products?category=${cat.slug}`}
                        onClick={closeMenu}
                        className="text-sm px-3 py-2 rounded-xl bg-gray-50 border hover:bg-gray-100"
                        >
                        {cat.name}
                        </Link>
                    ))}
                    </div>
                </div>
                )}
            </div>
            )}
        </div>

        {/* DESKTOP CATEGORIES */}
        {categories.length > 0 && (
            <div className="hidden md:block border-t bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-3">

                <div className="flex items-center gap-3 overflow-x-auto scrollbar-none">

                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 mr-2 shrink-0">
                    Categorías
                </span>

                {categories.map((cat) => (
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
                        text-gray-700
                        hover:bg-black
                        hover:text-white
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
        </header>
    );
}