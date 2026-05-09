export default function SortBar({
    searchInput,
    setSearchInput,
    params,
    updateParam,
}) {
    return (
        <div className="mb-6 flex flex-col md:flex-row gap-3 md:gap-4 md:items-center md:justify-between">

        {/* Buscador */}
        <input
            type="text"
            placeholder="Buscar producto..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="
            w-full md:w-72
            border
            rounded-xl
            px-4 py-2.5
            text-sm md:text-base
            "
        />

        {/* Orden */}
        <select
            value={params.sort}
            onChange={(e) => updateParam("sort", e.target.value)}
            className="
            w-full md:w-auto
            border
            rounded-xl
            px-4 py-2.5
            text-sm md:text-base
            "
        >
            <option value="latest">Más nuevos</option>
            <option value="price_asc">Precio menor</option>
            <option value="price_desc">Precio mayor</option>
        </select>
        </div>
    );
}