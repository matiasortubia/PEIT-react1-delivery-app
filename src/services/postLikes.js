export const postLikes = async (likes) => {
  const url = process.env.REACT_APP_API_URL;
  const post = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(likes),
  };
  const res = await fetch(`${url}/likes`, post);
  return res;
};
