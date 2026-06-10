// export default function Footer() {
//     const whatsappMessage = encodeURIComponent(
//         "Hola! Quisiera hacer una consulta sobre los productos 😊"
//     );

import { Link } from "react-router-dom";

//     const whatsappLink = `https://wa.me/5491123456789?text=${whatsappMessage}`;
//     return (
//         <footer className="mt-16 border-t border-gray-200 bg-primary/5">

//             <div className="max-w-7xl mx-auto px-4 py-10">

//                 <div className="grid md:grid-cols-3 gap-8 text-sm text-gray-600">

//                     {/* Marca */}
//                     <div>
//                         <h3 className="font-serif text-lg text-gray-800 mb-2">
//                             Emilia Deco Home
//                         </h3>
//                         <p className="leading-6">
//                             Decoración para el hogar con estilo simple, cálido y moderno.
//                         </p>
//                         {/* Redes */}
//                         <div className="flex items-center gap-4 mt-4">

//                             {/* Instagram */}
//                             <a
//                                 href="https://instagram.com/tuusuario"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 aria-label="Instagram"
//                                 className="hover:text-pink-500 transition"
//                             >
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     className="w-5 h-5"
//                                     viewBox="0 0 24 24"
//                                     fill="currentColor"
//                                 >
//                                     <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm9 2h-9A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4z" />
//                                     <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
//                                     <circle cx="17.5" cy="6.5" r="1.2" />
//                                 </svg>
//                             </a>

//                             {/* WhatsApp */}
//                             <a
//                                 href={whatsappLink}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 aria-label="WhatsApp"
//                                 className="hover:text-green-500 transition"
//                             >
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     className="w-5 h-5"
//                                     viewBox="0 0 24 24"
//                                     fill="currentColor"
//                                 >
//                                     <path d="M20.5 3.5A11.8 11.8 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.6 4.1 1.7 5.9L0 24l6.4-1.7a12 12 0 0 0 5.6 1.4c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.4-8.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.8 1 1-3.7-.3-.4a9.8 9.8 0 0 1-1.5-5.2C2 6.4 6.5 2 12 2s10 4.4 10 9.9-4.5 9.9-10 9.9zm5.5-7.2c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-.9 1.2-.3.2-.6.1a8.3 8.3 0 0 1-2.5-1.5 9.4 9.4 0 0 1-1.7-2.2c-.2-.3 0-.5.1-.7l.5-.6c.2-.2.3-.4.4-.6.1-.2 0-.4 0-.6s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.3 3.2 1.5 3.4c.2.3 2.3 3.5 5.6 4.8.8.3 1.4.5 1.9.6.8.3 1.5.2 2.1.1.6-.1 1.8-.7 2-1.3.3-.6.3-1.2.2-1.3 0-.1-.3-.2-.6-.4z"/>
//                                 </svg>
//                             </a>

//                         </div>
//                     </div>

//                     {/* Links */}
//                     <div className="space-y-2">
//                         <h4 className="font-semibold text-gray-700 mb-2">
//                            Navegación                       
//                         </h4>

//                         <a href="/" className="block hover:text-gray-900">Inicio</a>
//                         <a href="/products" className="block hover:text-gray-900">Productos</a>
//                         <a href="/products" className="block hover:text-gray-900">Categorías</a>
//                     </div>

                    // {/* Info */}
                    // <div className="space-y-2">
                    //     <h4 className="font-semibold text-gray-700 mb-2">
                    //         Información
                    //     </h4>

                    //     <p>Envíos a todo el país</p>
                    //     <p>Atención personalizada</p>
                    //     <p>Contacto: hola@emiliadeco.com</p>
                    // </div>

//                 </div>

//                 {/* Bottom */}
//                 <div className="mt-10 pt-6 border-t border-gray-200 text-center text-xs text-gray-500 space-y-2">
//                     <p>
//                         © {new Date().getFullYear()} Emilia Deco Home — Todos los derechos reservados
//                     </p>

//                     <p>
//                         Sitio web desarrollado por <span className="font-medium text-gray-700">[Tu Nombre o Estudio]</span>
//                     </p>
//                 </div>

//             </div>

//         </footer>
//     );
// }

// export default function Footer() {
//     return (
//         <footer className="mt-16 border-t border-gray-200 bg-primary/5">

//             <div className="max-w-7xl mx-auto px-4 py-10">

//                 <div className="grid md:grid-cols-3 gap-8 text-sm text-gray-600">

//                     {/* Marca */}
//                     <div>
//                         <h3 className="font-serif text-lg text-gray-800 mb-2">
//                             Emilia Deco Home
//                         </h3>
//                         <p className="leading-6">
//                             Decoración para el hogar con estilo simple, cálido y moderno.
//                         </p>

//                         {/* Redes */}
//                         <div className="flex items-center gap-4 mt-4">

//                             {/* Instagram */}
//                             <a
//                                 href="#"
//                                 className="hover:text-pink-500 transition"
//                                 aria-label="Instagram"
//                             >
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     className="w-5 h-5"
//                                     viewBox="0 0 24 24"
//                                     fill="currentColor"
//                                 >
//                                     <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm9 2h-9A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4z" />
//                                     <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
//                                     <circle cx="17.5" cy="6.5" r="1.2" />
//                                 </svg>
//                             </a>

//                             {/* WhatsApp */}
//                             <a
//                                 href="#"
//                                 className="hover:text-green-500 transition"
//                                 aria-label="WhatsApp"
//                             >
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     className="w-5 h-5"
//                                     viewBox="0 0 24 24"
//                                     fill="currentColor"
//                                 >
//                                     <path d="M20.5 3.5A11.8 11.8 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.6 4.1 1.7 5.9L0 24l6.4-1.7a12 12 0 0 0 5.6 1.4c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.4-8.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.8 1 1-3.7-.3-.4a9.8 9.8 0 0 1-1.5-5.2C2 6.4 6.5 2 12 2s10 4.4 10 9.9-4.5 9.9-10 9.9zm5.5-7.2c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-.9 1.2-.3.2-.6.1a8.3 8.3 0 0 1-2.5-1.5 9.4 9.4 0 0 1-1.7-2.2c-.2-.3 0-.5.1-.7l.5-.6c.2-.2.3-.4.4-.6.1-.2 0-.4 0-.6s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.3 3.2 1.5 3.4c.2.3 2.3 3.5 5.6 4.8.8.3 1.4.5 1.9.6.8.3 1.5.2 2.1.1.6-.1 1.8-.7 2-1.3.3-.6.3-1.2.2-1.3 0-.1-.3-.2-.6-.4z"/>
//                                 </svg>
//                             </a>

//                         </div>
//                     </div>

//                     {/* Links */}
//                     <div className="space-y-2">
//                         <h4 className="font-semibold text-gray-700 mb-2">
//                             Navegación
//                         </h4>

//                         <p className="hover:text-gray-900 cursor-pointer">Inicio</p>
//                         <p className="hover:text-gray-900 cursor-pointer">Productos</p>
//                         <p className="hover:text-gray-900 cursor-pointer">Categorías</p>
//                     </div>

//                     {/* Newsletter */}
//                     <div>
//                         <h4 className="font-semibold text-gray-700 mb-2">
//                             Newsletter
//                         </h4>

//                         <p className="mb-3">
//                             Recibí novedades y ofertas exclusivas
//                         </p>

//                         <div className="flex flex-col gap-2">
//                             <input
//                                 type="email"
//                                 placeholder="Tu email"
//                                 className="
//                                     px-3 py-2
//                                     rounded-xl
//                                     border border-gray-300
//                                     text-sm
//                                     outline-none
//                                     focus:border-amber-700
//                                     bg-white
//                                 "
//                             />

//                             <button className="
//                                 bg-primary/80
//                                 text-white
//                                 py-2
//                                 rounded-xl
//                                 text-sm
//                                 hover:bg-primary
//                                 transition
//                             ">
//                                 Suscribirme
//                             </button>
//                         </div>
//                     </div>

//                 </div>

//                 {/* Bottom */}
//                 <div className="mt-10 pt-6 border-t border-gray-200 text-center text-xs text-gray-500">
//                     © {new Date().getFullYear()} Emilia Deco Home — Todos los derechos reservados
//                 </div>

//             </div>

//         </footer>
//     );
// }

export default function Footer() {

    const whatsappMessage = encodeURIComponent(
        "Hola! Quisiera hacer una consulta sobre los productos 😊"
    );

    const whatsappLink = `https://wa.me/5492324586726?text=${whatsappMessage}`;

    return (
        <footer className="mt-16 border-t border-gray-200 bg-primary/5">

            <div className="max-w-7xl mx-auto px-4 py-10">

                <div className="grid md:grid-cols-3 gap-8 text-sm text-gray-600">

                    {/* Marca */}
                    <div>
                        <h3 className="font-serif text-lg text-gray-800 mb-2">
                            Emilia Deco Home
                        </h3>

                        <p className="leading-6">
                            Decoración para el hogar con estilo simple, cálido y moderno.
                        </p>

                        {/* Redes */}
                        <div className="flex items-center gap-4 mt-4">

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/emilia_deco_textil_"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="hover:text-pink-500 transition"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm9 2h-9A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4z" />
                                    <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                                    <circle cx="17.5" cy="6.5" r="1.2" />
                                </svg>
                            </a>

                            {/* WhatsApp */}
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                className="hover:text-green-500 transition"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M20.5 3.5A11.8 11.8 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.6 4.1 1.7 5.9L0 24l6.4-1.7a12 12 0 0 0 5.6 1.4c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.4-8.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.8 1 1-3.7-.3-.4a9.8 9.8 0 0 1-1.5-5.2C2 6.4 6.5 2 12 2s10 4.4 10 9.9-4.5 9.9-10 9.9zm5.5-7.2c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-.9 1.2-.3.2-.6.1a8.3 8.3 0 0 1-2.5-1.5 9.4 9.4 0 0 1-1.7-2.2c-.2-.3 0-.5.1-.7l.5-.6c.2-.2.3-.4.4-.6.1-.2 0-.4 0-.6s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.3 3.2 1.5 3.4c.2.3 2.3 3.5 5.6 4.8.8.3 1.4.5 1.9.6.8.3 1.5.2 2.1.1.6-.1 1.8-.7 2-1.3.3-.6.3-1.2.2-1.3 0-.1-.3-.2-.6-.4z"/>
                                </svg>
                            </a>

                        </div>
                    </div>

                    {/* Links */}
                    <div className="space-y-2">
                        <h4 className="font-semibold text-gray-700 mb-2">
                            Navegación
                        </h4>

                        <Link to="/" className="block hover:text-gray-900">Inicio</Link>
                        <Link to="/products" className="block hover:text-gray-900">Productos</Link>
                        <Link to="/products" className="block hover:text-gray-900">Categorías</Link>
                    </div>

                    {/* Info */}
                    <div className="space-y-2">
                        <h4 className="font-semibold text-gray-700 mb-2">
                            Información
                        </h4>

                        <p>Envíos a todo el país</p>
                        <p>Atención personalizada</p>
                        <Link 
                            to="mailto:emiliaDecoHome@outlook.com?subject=Consulta"
                            className="block hover:text-gray-900"
                        >
                            Email: emiliaDecoHome@outlook.com
                        </Link>
                        <Link 
                            to="/terms" 
                            className="block hover:text-gray-900"
                        >
                            Términos y Condiciones
                        </Link>
                        <Link
                            to="/privacy-policy"
                            className="block hover:text-gray-900"
                        >
                            Política de Privacidad
                        </Link>
                    </div>

                </div>

                {/* Bottom */}
                <div className="mt-10 pt-6 border-t border-gray-200 text-center text-xs text-gray-500 space-y-2">

                    <p>
                        © {new Date().getFullYear()} Emilia Deco Home — Todos los derechos reservados
                    </p>

                    <p className="text-center text-xs text-crema-natural opacity-80">
                        Diseñado y desarrollado por {''}
                        <a 
                            href="https://github.com/joaquinPedeuboy" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="underline underline-offset-2 hover:opacity-80 transition"
                        >
                            Joaquín Pedeuboy · Desarrollador Web
                        </a>
                    </p>

                </div>

            </div>

        </footer>
    );
}