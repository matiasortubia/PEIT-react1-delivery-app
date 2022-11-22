export const deleteLike = async(likeId) =>{
    const url = process.env.REACT_APP_API_URL;
    await fetch(`${url}/likes/${likeId}`, {
        method: 'DELETE'});
        return likeId;
    }