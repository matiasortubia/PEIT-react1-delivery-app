import React from "react";

export const useGeolocation = () => {
    const [location, setLocation] = React.useState(null);
    React.useMemo(() => {
        const succes = (data) => {
            const { latitude, longitude } = data.coords;
            setLocation({ latitude, longitude });
        };
        navigator.geolocation.getCurrentPosition(succes);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (location) return location;
}
