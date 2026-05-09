import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function ProductCard({ product }) {
    const images =
        product.images?.length > 0
            ? product.images
            : [{ id: "fallback", url: "/images/no-image.webp" }];

    const price = new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        maximumFractionDigits: 0,
    }).format(product.price);

    return (
        <Link
            to={`/product/${product.slug}`}
            draggable={false}
            className="group block h-full bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 p-2 md:p-4"
        >
            <div className="h-full flex flex-col">

                {/* Slider */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 group-hover:brightness-95 transition duration-300">

                    <Swiper
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        loop={images.length > 1}
                        className="h-full"
                    >
                        {images.map((img) => (
                            <SwiperSlide key={img.id} className="h-full">
                                <img
                                    src={img.url}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <p className="absolute top-3 left-3 z-10">
                        {product.stock_total > 0 ? (
                            <span className="bg-green-200 text-green-700 font-bold text-sm px-3 py-1 rounded-full">
                                Disponible
                            </span>
                        ) : (
                            <span className="bg-red-200 text-red-700 font-bold text-sm px-3 py-1 rounded-full">
                                Sin stock
                            </span>
                        )}
                    </p>
                </div>

                {/* Contenido */}
                <div className="p-4 flex flex-col flex-1">

                    {/* Categoría */}
                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-2 h-4">
                        {product.category?.name || ""}
                    </p>

                    {/* Nombre */}
                    <h3 className="font-semibold text-gray-900 line-clamp-2 min-h-12 font-serif">
                        {product.name}
                    </h3>

                    {/* Precio */}
                    <p className="text-2xl font-bold text-gray-900 mt-3 border-b border-gray-300 pb-2">
                        {price}
                    </p>

                    {/* Botón */}
                    <div className="mt-auto pt-4">
                        <span className="inline-flex justify-center w-full rounded-xl bg-black text-white py-2.5 text-sm font-medium group-hover:bg-gray-800 transition">
                            Ver producto
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}