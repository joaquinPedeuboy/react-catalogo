export default function EmptyState({ title = "No hay resultados", description = "Probá con otros filtros." }) {
    return (
        <div className="py-16 text-center">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-500 mt-2">{description}</p>
        </div>
    );
}