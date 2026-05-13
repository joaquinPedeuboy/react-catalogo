import { Link } from "react-router-dom";

export default function SectionHeader({
    label,
    title,
    link,
}) {
    return (
        <div className="flex items-end justify-between mb-8">

            <div>
                <span
                    className="
                        text-xs
                        uppercase
                        tracking-[0.25em]
                        text-gray-500
                    "
                >
                    {label}
                </span>

                <h2
                    className="
                        text-3xl
                        md:text-5xl
                        font-serif
                        font-bold
                        text-gray-900
                        mt-2
                    "
                >
                    {title}
                </h2>

                <div className="w-16 h-0.5 bg-primary/50 mt-4"></div>
            </div>

            <Link
                to={link}
                className="
                    hidden sm:flex
                    items-center gap-2
                    px-5 py-2.5
                    rounded-full
                    border
                    border-gray-300
                    bg-white
                    text-sm
                    text-gray-700
                    font-sans
                    hover:bg-black
                    hover:text-white
                    transition-all
                    duration-300
                    shadow-sm
                    shadow-gray-200
                "
            >
                Ver todos
            </Link>
        </div>
    );
}