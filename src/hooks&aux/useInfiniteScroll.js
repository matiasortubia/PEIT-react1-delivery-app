import React from "react";

export const useInfiniteScroll = (get, state, setState, setLoading) => {
    React.useEffect(() => {
        const handleScroll = async () => {
            setLoading(true);
            if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
            const nextPage = await get('next');
            if (nextPage) {
                setState([...state, ...nextPage]);
                setLoading(false);
            }
            window.removeEventListener("scroll", handleScroll);
            setLoading(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [get, state, setState, setLoading]);
};