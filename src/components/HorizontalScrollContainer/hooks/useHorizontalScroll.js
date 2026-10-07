import { useRef, useEffect } from 'react';

export function useHorizontalScroll() {
    const elRef = useRef(null);

    useEffect(() => {
        const el = elRef.current;
        /* Prevents 'Cannot read property of null' error. */
        if (!el) return;

        const handleWheel = (e) => {
            if (e.deltaY === 0) return;
            e.preventDefault();
            e.scrollLeft += e.deltaY;
        };

        el.addEventListener('wheel', handleWheel, { passive: false });
        return () => el.removeEventListener('wheel', handleWheel);
    }, []);
    return elRef;
}