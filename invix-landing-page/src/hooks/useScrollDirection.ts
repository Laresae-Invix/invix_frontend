import { useEffect, useRef, useState } from "react";

type Direction = "up" | "down";

export function useScrollDirection(threshold = 6) {
    const lastYRef = useRef(0);
    const [direction, setDirection] = useState<Direction>("down");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        lastYRef.current = window.scrollY;

        const onScroll = () => {
            const y = window.scrollY;
            setScrolled(y > 8);

            const diff = y - lastYRef.current;
            if (Math.abs(diff) >= threshold) {
                setDirection(diff > 0 ? "down" : "up");
                lastYRef.current = y;
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [threshold]);

    return { direction, scrolled };
}
