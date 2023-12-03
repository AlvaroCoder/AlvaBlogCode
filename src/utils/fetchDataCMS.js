// process.env.REACT_APP_CMS_URL
const BASE_URL = process.env.REACT_APP_CMS_URL;

export function getContentPosts() {
    return fetch(`${BASE_URL}/posts`,{
        method : 'POST',
        mode : 'cors'
    })
}
export function getContenPostDetail(id) {
    return fetch(`${BASE_URL}/posts/id/${id}`,{
        method : 'POST',
        mode : 'cors'
    })
}
