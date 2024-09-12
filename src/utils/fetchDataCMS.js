// process.env.REACT_APP_CMS_URL
// https://backend-blog-alvacode.fly.dev
const statusWork = "dev";
const BASE_URL = statusWork === "dev" ? "http://localhost:8082" : "https://backend-blog-alvacode.fly.dev";

export function getContentPosts() {
    return fetch(`${BASE_URL}/posts`,{
        method : 'POST',
        mode : 'cors',
        cache : 'force-cache'
    })
}
export function getContenPostDetail(id) {
    return fetch(`${BASE_URL}/posts/id/${id}`,{
        method : 'POST',
        mode : 'cors',
        cache : 'force-cache'

    })
}
export function getContentCategories() {
    return fetch(`${BASE_URL}/posts/categories`,{
        method : 'GET',
        mode : 'cors'
    })
}

export function getContentsByCategorie(slug) {
    return fetch(`${BASE_URL}/posts/?slug=${slug}`,{
        method : 'GET',
        mode : 'cors'
    })
}