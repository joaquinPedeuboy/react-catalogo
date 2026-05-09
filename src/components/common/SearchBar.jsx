export default function SearchBar({
    value,
    onChange,
    placeholder = "Buscar productos...",
    className = "",
}) {
    return (
        <div className={`w-full ${className}`}>
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="
            w-full
            rounded-2xl
            border border-gray-300
            bg-white
            px-4 py-3
            text-sm md:text-base
            outline-none
            transition
            focus:border-gray-900
            focus:ring-2 focus:ring-gray-900/10
            "
        />
        </div>
    );
}