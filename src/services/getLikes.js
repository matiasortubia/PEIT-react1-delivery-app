export const getLikes = async () => {
  const url = process.env.REACT_APP_API_URL;
  const res = await fetch(`${url}/likes`);
  const likes = await res.json();
  return likes;
};
