import { useState, useEffect } from 'react';

const useScreenWidth = () => {
    const [width, setWidth] = useState(undefined);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        handleResize(); // Set the initial width on the client-side

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return width;
};

export default useScreenWidth;
