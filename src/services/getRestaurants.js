export const getRestaurants = async () => {
    const url = process.env.REACT_APP_API_URL;
    const res = await fetch(`${url}/restaurants`);
    const restaurants = await res.json();
    return restaurants;
}
