export default function FiltersSidebar({
    filters,
    params,
    updateParam,
    clearFilters,
}) {
    return (
        <aside className="space-y-5 border-r border-gray-300 border-b border-gray-303 rounded-2xl p-4 md:p-5 bg-primary/5 shadow shadow-gray-300">

        {/* Categoría */}
        <div>
            <h3 className="font-serif text-gray-700 font-semibold text-sm md:text-base mb-2">
            Categoría
            </h3>

            <select
            value={params.category}
            onChange={(e) => updateParam("category", e.target.value)}
            className="
            appearance-none
            w-full 
            border-b 
            border-gray-400 
            shadow 
            shadow-gray-300 
            rounded-xl 
            px-4 py-2.5 
            text-sm md:text-base font-serif text-gray-700 
            bg-transparent
            outline-none
            transition-all duration-300 
            focus:border-amber-700
            focus:bg-white"
            >
            <option value="">Todas</option>

            {(filters.categories ?? []).map((cat) => (
                <option key={cat.id} value={cat.slug} className="font-serif text-gray-700">
                {cat.name}
                </option>
            ))}
            </select>
        </div>

        {/* Precio mínimo */}
        <div>
            <h3 className="font-serif text-gray-700 font-semibold text-sm md:text-base mb-2">
            Precio mínimo
            </h3>

            <input
            type="number"
            inputMode="numeric"
            placeholder="Ej: 10000"
            value={params.min_price}
            onChange={(e) => updateParam("min_price", e.target.value)}
            className="
            appearance-none
            w-full 
            border-b border-gray-400 
            shadow shadow-gray-300 
            rounded-xl 
            px-4 py-2.5 
            text-sm md:text-base font-serif text-gray-700
            bg-transparent
            outline-none
            transition-all duration-300 
            focus:border-amber-700
            focus:bg-white
            "
            />
        </div>

        {/* Precio máximo */}
        <div>
            <h3 className="font-serif text-gray-700 font-semibold text-sm md:text-base mb-2">
            Precio máximo
            </h3>

            <input
            type="number"
            inputMode="numeric"
            placeholder="Ej: 50000"
            value={params.max_price}
            onChange={(e) => updateParam("max_price", e.target.value)}
            className="
            appearance-none
            w-full 
            border-b 
            border-gray-400 
            shadow 
            shadow-gray-300 
            rounded-xl 
            px-4 py-2.5 
            text-sm md:text-base font-serif text-gray-700
            bg-transparent
            outline-none
            transition-all duration-300 
            focus:border-amber-700
            focus:bg-white
            "
            />
        </div>

        {/* Botón */}
        <button
            onClick={clearFilters}
            className="
            w-full
            bg-primary/80
            text-white
            rounded-xl
            py-3
            text-sm md:text-base
            font-serif
            hover:bg-primary
            shadow-sm
            shadow-primary/50
            transition-all duration-300
            cursor-pointer
            "
        >
            Limpiar filtros
        </button>
        </aside>
    );
}