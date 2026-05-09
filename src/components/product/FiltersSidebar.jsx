export default function FiltersSidebar({
    filters,
    params,
    updateParam,
    clearFilters,
}) {
    return (
        <aside className="space-y-5 border rounded-2xl p-4 md:p-5 bg-white">

        {/* Categoría */}
        <div>
            <h3 className="font-semibold text-sm md:text-base mb-2">
            Categoría
            </h3>

            <select
            value={params.category}
            onChange={(e) => updateParam("category", e.target.value)}
            className="w-full border rounded-xl px-3 py-2.5 text-sm md:text-base"
            >
            <option value="">Todas</option>

            {(filters.categories ?? []).map((cat) => (
                <option key={cat.id} value={cat.slug}>
                {cat.name}
                </option>
            ))}
            </select>
        </div>

        {/* Precio mínimo */}
        <div>
            <h3 className="font-semibold text-sm md:text-base mb-2">
            Precio mínimo
            </h3>

            <input
            type="number"
            inputMode="numeric"
            placeholder="Ej: 10000"
            value={params.min_price}
            onChange={(e) => updateParam("min_price", e.target.value)}
            className="w-full border rounded-xl px-3 py-2.5 text-sm md:text-base"
            />
        </div>

        {/* Precio máximo */}
        <div>
            <h3 className="font-semibold text-sm md:text-base mb-2">
            Precio máximo
            </h3>

            <input
            type="number"
            inputMode="numeric"
            placeholder="Ej: 50000"
            value={params.max_price}
            onChange={(e) => updateParam("max_price", e.target.value)}
            className="w-full border rounded-xl px-3 py-2.5 text-sm md:text-base"
            />
        </div>

        {/* Botón */}
        <button
            onClick={clearFilters}
            className="
            w-full
            bg-gray-900
            text-white
            rounded-xl
            py-3
            text-sm md:text-base
            font-medium
            hover:bg-black
            transition
            "
        >
            Limpiar filtros
        </button>
        </aside>
    );
}