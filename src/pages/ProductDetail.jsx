import { useNavigate, useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import Loader from "../components/common/Loader";
import { useEffect } from "react";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Zoom } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/zoom";

export default function ProductDetail() {

  const { slug } = useParams();
  const { product, isLoading, error } = useProduct(slug);
  const navigate = useNavigate();

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    if (product?.name) {
      document.title = `${product.name} | Emilia Deco Home`;
    }
  }, [product]);

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

  const hasStock = product.stock_total > 0;

  const requiresColor = colors.length > 0;
  const requiresSize = sizes.length > 0;
  const isColorValid = !requiresColor || selectedColor;
  const isSizeValid = !requiresSize || selectedSize;

  const isDisabled = !(isColorValid && isSizeValid);
  const productUrl = window.location.href;

  const whatsappMessage = encodeURIComponent(
    hasStock
    ? `¡Hola! 😊

        Me interesa este producto de Emilia Deco Home:

        🏷️ *Producto:* ${product.name}
        ${selectedColor ? `🎨 *Color:* ${selectedColor.name}` : ""}
        ${selectedSize ? `📏 *Tamaño:* ${selectedSize.name}` : ""}
        💰 *Precio:* $${Number(product.price).toLocaleString("es-AR")}

        🔗 *Ver producto:*
        ${productUrl}

        ¿Podrían brindarme más información?

        ¡Muchas gracias! ✨`
            : `¡Hola! 😊

        Vi este producto en Emilia Deco Home y quería consultar si volverá a ingresar stock:

        🏷️ *Producto:* ${product.name}

        🔗 *Ver producto:*
        ${productUrl}

        ¡Muchas gracias! ✨`
  );

  const whatsappLink = `https://wa.me/5492324586726?text=${whatsappMessage}`;

  return (
    <div>
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="
          inline-flex items-center gap-2
          mb-6
          px-4 py-2
          rounded-xl
          bg-white
          text-gray-700
          bg-transparent
          hover:bg-gray-100
          border-none
          shadow-none
          font-sans
          transition
          text-sm
          cursor-pointer
        "
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
        </svg>
        Volver
      </button>
      <div className="grid md:grid-cols-2 gap-10">

        {/* GALERÍA */}
        <div className="rounded-3xl overflow-hidden border border-gray-100 bg-gradient-to-b from-white to-gray-50 shadow-xl shadow-gray-200/40 p-2 md:p-8">

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
        <div
        
        >

          <h1 className="text-4xl font-bold mb-4 font-serif">
            {product.name}
          </h1>

          {product.category && (
            <p className="text-sm text-gray-500 mb-3 font-serif">
              {product.category.name}
            </p>
          )}

          <p className="text-4xl font-light mb-6 text-gray-900 border-b border-gray-300 pb-2">
            ${Number(product.price).toLocaleString("es-AR")}
          </p>

          {!hasStock && (
            <div className="mt-4 p-4 rounded-2xl border border-red-200 bg-red-50 text-red-700 text-sm">
              Este producto actualmente no tiene stock disponible.
            </div>
          )}

          <div className="grid grid-cols-1 gap-6 mb-10 md:flex md:flex-col md:gap-4 md:w-1/2">
              {colors.length > 0 && (
                <div className="border-gray-100 rounded-3xl shadow-sm h-fit p-6 md:p-8 col-span-2 bg-white">
                  
                  <span className="text-gray-500 block mb-3">
                    Colores disponibles
                  </span>

                  <div className="flex items-center gap-3 flex-wrap">
                    
                    {colors.map((color) => (
                      <button
                        type="button"
                        key={color.id}
                        onClick={() => setSelectedColor(color)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-xl border transition-all duration-200 cursor-pointer hover:-translate-y-0.5 ${
                          selectedColor?.id === color.id
                            ? "border-blue-600 bg-blue-50 shadow-sm shadow-blue-200 scale-[1.02]"
                            : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
                        }`}
                      >
                        <div
                          className="w-7 h-7 rounded-full border border-gray-300 shadow-sm"
                          style={{ backgroundColor: color.hex_code }}
                          title={color.name}
                        />

                        <span className="text-sm text-gray-700">
                          {color.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {sizes.length > 0 && (
                <div className="border border-gray-100 rounded-3xl shadow-sm h-fit p-6 md:p-8 col-span-2 bg-white">
                  <span className="text-gray-500 block mb-3">
                    Tamaños disponibles
                  </span>
                  <div className="flex items-center gap-3 flex-wrap">
                    {sizes.map((size) => (
                      <button
                        type="button"
                        key={size.id}
                        onClick={() => setSelectedSize(size)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-xl border transition-all duration-200 cursor-pointer hover:-translate-y-0.5 ${
                          selectedSize?.id === size.id
                            ? "border-blue-600 bg-blue-50 shadow-sm shadow-blue-200 scale-[1.02]"
                            : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
                        }`}
                      >
                        <span className="text-md text-gray-700">
                          {size.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              inline-flex items-center justify-center gap-3
                mt-1
                px-6 py-3
                rounded-2xl
                transition-all duration-300
                font-medium
                shadow-lg
                ${
                  isDisabled
                    ? "bg-green-300 cursor-not-allowed pointer-events-none text-white"
                    : "bg-green-500 hover:bg-green-600 hover:scale-[1.02] text-white"
                }
            `}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon iconTabler iconsTablerOutline iconTablerBrandWhatsapp"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>

            <span>Consultar por WhatsApp</span>
          </a>
          {isDisabled && (
            <p 
              className="mt-3
              text-xs
              text-gray-500
              italic"
            >
              Seleccioná
              {requiresColor && !selectedColor && " un color"}
              {requiresColor && !selectedColor && requiresSize && !selectedSize && " y"}
              {requiresSize && !selectedSize && " un tamaño"}
              {" "}para continuar.
            </p>
          )}

        </div>
        
        <div className="md:col-span-2">
          <h3 className="text-xl font-bold mb-4 font-serif">Descripción del Producto</h3>
          <p className="text-gray-600 leading-8 mb-6 font-light tracking-wide">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}