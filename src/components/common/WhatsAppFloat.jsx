import React from 'react'

export default function WhatsAppFloat() {

    const message = encodeURIComponent("Hola, estoy interesado en sus productos. ¿Podrían brindarme más información?😊");

    const link = `https://wa.me/5492324586726?text=${message}`;

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="
                fixed bottom-5 right-5
                bg-green-500
                hover:bg-green-600
                text-white
                w-14 h-14
                rounded-full
                flex items-center justify-center
                shadow-lg
                z-50
                transition
            "
            aria-label="WhatsApp"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
        </a>
    );
}
