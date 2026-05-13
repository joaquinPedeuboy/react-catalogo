export default function Pagination({ meta, onPageChange }) {
    if (!meta || meta.last_page <= 1) return null;

    const { current_page, last_page } = meta;

    const pages = Array.from({ length: last_page }, (_, i) => i + 1);

    return (
        <div className="flex items-center justify-center gap-2 mt-10">

            {/* Anterior */}
            <button
                disabled={current_page === 1}
                onClick={() => onPageChange(current_page - 1)}
                className="
                    px-4 py-2
                    rounded-xl
                    border border-gray-300
                    text-sm
                    font-serif
                    bg-white
                    hover:bg-gray-100
                    transition
                    disabled:opacity-40
                    disabled:cursor-not-allowed
                "
            >
                ←
            </button>

            {/* Números */}
            <div className="flex items-center gap-2">
                {pages.map((page) => (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`
                            w-10 h-10
                            rounded-xl
                            text-sm
                            font-serif
                            transition
                            border
                            ${
                                page === current_page
                                    ? "bg-primary text-white border-primary shadow-sm"
                                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                            }
                        `}
                    >
                        {page}
                    </button>
                ))}
            </div>

            {/* Siguiente */}
            <button
                disabled={current_page === last_page}
                onClick={() => onPageChange(current_page + 1)}
                className="
                    px-4 py-2
                    rounded-xl
                    border border-gray-300
                    text-sm
                    font-serif
                    bg-white
                    hover:bg-gray-100
                    transition
                    disabled:opacity-40
                    disabled:cursor-not-allowed
                "
            >
                →
            </button>
        </div>
    );
}