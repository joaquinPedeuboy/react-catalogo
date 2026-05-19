🛍️ Emilia Deco - Catálogo Web

Frontend de catálogo e-commerce desarrollado con React para la visualización de productos decorativos y del hogar, consumiendo datos desde una API REST realizada en Laravel.
El proyecto está orientado a brindar una experiencia moderna, responsive y visualmente atractiva para clientes que desean explorar productos y realizar consultas rápidas mediante WhatsApp.

🚀 Características
- Consumo de productos desde API REST
- Navegación SPA con React Router DOM
- Renderizado dinámico de categorías y productos
- Integración con WhatsApp para consultas directas
- Carruseles interactivos e imágenes dinámicas
- Diseño responsive mobile-first
- Arquitectura frontend desacoplada del backend
- Manejo de estados y caché con SWR
- Interfaz moderna enfocada en experiencia de usuario

## 🧰 Tecnologías utilizadas

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge\&logo=react\&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-black?style=for-the-badge\&logo=javascript)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge\&logo=vite\&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge)
![SWR](https://img.shields.io/badge/SWR-black?style=for-the-badge)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge\&logo=react-router)
![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=for-the-badge\&logo=swiper)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge\&logo=tailwindcss\&logoColor=white)
![Laravel API](https://img.shields.io/badge/Laravel_API-FF2D20?style=for-the-badge\&logo=laravel\&logoColor=white)

### 📂 Funcionalidades principales

🏠 Página principal
- Productos destacados
- Banners dinámicos
- Navegación por categorías
- Secciones visuales orientadas a catálogo

🛒 Catálogo de productos
- Listado dinámico de productos
- Vista individual de producto
- Galerías e imágenes interactivas
- Consulta rápida vía WhatsApp

📱 Diseño responsive
- Optimizado para dispositivos móviles
- Adaptación fluida a tablets y escritorio
- Interfaz moderna y ligera

🔗 Backend relacionado

👉 Backend: https://github.com/joaquinPedeuboy/pede-store-system

API REST desarrollada con Laravel 11 para administración y gestión del catálogo.

▶️ Instalación

### Requisitos

- Node.js >= 18 (recomendado)
- npm >= 9 o yarn

### Clonar el repositorio

```bash
git clone https://github.com/joaquinPedeuboy/react-catalogo.git
cd react-catalogo
```

### Variables de entorno

Este frontend usa una variable de entorno Vite para apuntar al backend. Crea un archivo `.env.local` o `.env` en la raíz con al menos:

```env
VITE_API_URL=https://tu-backend.example/api
```

Reemplaza la URL por la de tu API (ver [src/api/axios.js](src/api/axios.js#L1-L20)).

### Instalar dependencias

```bash
npm install
# o
 # yarn
```

### Ejecutar en desarrollo

```bash
npm run dev
```

### Scripts disponibles

- `npm run dev` — arranca Vite en modo desarrollo
- `npm run build` — construye la app para producción
- `npm run preview` — vista previa del build local
- `npm run lint` — ejecuta ESLint

### Capturas / Demo

Agrega aquí capturas de pantalla o GIFs para mostrar la interfaz (opcional).

### Notas importantes

- La configuración de consumo de la API está en [src/api/axios.js](src/api/axios.js#L1-L20) y utiliza `import.meta.env.VITE_API_URL`.

### Contribuciones

Si quieres contribuir, abre un issue o crea un PR. Buenas prácticas:

- Crea una rama por feature: `git checkout -b feat/nueva-funcionalidad`
- Añade detalles en el PR sobre qué se cambia y por qué

### Licencia

Indica la licencia del proyecto aquí (por ejemplo, MIT). Si no hay licencia, añade una para clarificar el uso.

👨‍💻 Autor

Desarrollado por Joaquín Pedeuboy.