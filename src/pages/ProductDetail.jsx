import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import Loader from "../components/common/Loader";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Zoom } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/zoom";

export default function ProductDetail() {

  const { slug } = useParams();
  const { product, isLoading, error } = useProduct(slug);

  if (isLoading) return <Loader />;
  if (error) return <p className="py-10 text-center text-red-500">Error al cargar el producto</p>;
  if (!product) return <p className="py-10 text-center">Producto no encontrado</p>;

  const images =
    product.images?.length > 0
      ? product.images
      : [
          {
            id: "fallback",
            url: product.main_image || "/images/no-image.webp"
          }
        ];

  const colors =
    product.colors || [];
  
  const sizes =
    product.sizes || [];
  return (
    <div className="grid md:grid-cols-2 gap-10">

      {/* GALERÍA */}
      <div className="rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-sm p-2 md:p-8">

        <Swiper
          modules={[Pagination, Zoom]}
          pagination={{ clickable: true }}
          zoom={true}
          loop={images.length > 1}
          className="aspect-[4/3]"
        >
          {images.map((img) => (
            <SwiperSlide key={img.id} className="h-full">
              <div className="swiper-zoom-container">
                <img
                  src={img.url}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 cursor-zoom-in"
                />
              </div>
              
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      {/* INFO */}
      <div>

        <h1 className="text-4xl font-bold mb-4 font-serif">
          {product.name}
        </h1>

        {product.category && (
          <p className="text-sm text-gray-500 mb-3 font-serif">
            {product.category.name}
          </p>
        )}

        <p className="text-3xl font-bold mb-6 text-green-600 border-b border-gray-300 pb-2">
          ${Number(product.price).toLocaleString("es-AR")}
        </p>

        <div className="grid grid-cols-1 gap-6 mb-10 md:flex md:flex-col md:gap-4 md:w-1/2">
            {colors.length > 0 && (
              <div className="border border-gray-300 rounded-2xl p-4 col-span-2">
                
                <span className="text-gray-500 block mb-3">
                  Colores disponibles
                </span>

                <div className="flex items-center gap-3 flex-wrap">
                  
                  {colors.map((color) => (
                    <div
                      key={color.id}
                      className="flex items-center gap-2"
                    >
                      <div
                        className="w-7 h-7 rounded-full border border-gray-300 shadow-sm"
                        style={{ backgroundColor: color.hex_code }}
                        title={color.name}
                      />

                      <span className="text-sm text-gray-700">
                        {color.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {sizes.length > 0 && (
              <div className="border border-gray-300 rounded-2xl p-4 col-span-2">
                <span className="text-gray-500 block mb-3">
                  Tamaños disponibles
                </span>
                <div className="flex items-center gap-3 flex-wrap">
                  {sizes.map((size) => (
                    <div
                      key={size.id}
                      className="flex items-center gap-2"
                    >
                      <span className="text-md text-gray-700 font-semibold px-3 py-1 border rounded-lg border-gray-300 shadow-sm hover:border-gray-500 transition-colors">
                        {size.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
        </div>
      </div>
      
      <div className="md:col-span-2">
        <h3 className="text-xl font-bold mb-4 font-serif">Descripción del Producto</h3>
        <p className="text-gray-700 leading-7 mb-6 font-mono">
          {product.description}
        </p>
      </div>
    </div>
  );
}