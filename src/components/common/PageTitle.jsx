import { useEffect } from "react";
import { useMatches } from "react-router-dom";

export default function PageTitle() {
    const matches = useMatches();

    useEffect(() => {
        const currentMatch = matches[matches.length - 1];

        document.title =
            currentMatch?.handle?.title || "Emilia Deco Home";
    }, [matches]);

    return null;
}