export const getCategories = async () => {
    const url = process.env.REACT_APP_API_URL;
    const res = await fetch(`${url}/categories`);
    const categories = await res.json();
    return categories;
}