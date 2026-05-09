export default function Pagination({ meta, onPageChange }) {
    if (!meta || meta.last_page <= 1) return null;

    const { current_page, last_page } = meta;

    return (
        <div className="flex items-center justify-center gap-3 mt-8">
            <button
                disabled={current_page <= 1}
                onClick={() => onPageChange(current_page - 1)}
                className="px-4 py-2 rounded-xl border disabled:opacity-40"
            >
                Anterior
            </button>

            <span className="text-sm text-gray-600">
                Página {current_page} de {last_page}
            </span>

            <button
                disabled={current_page >= last_page}
                onClick={() => onPageChange(current_page + 1)}
                className="px-4 py-2 rounded-xl border disabled:opacity-40"
            >
                Siguiente
            </button>
        </div>
    );
}