// process.env.REACT_APP_CMS_URL
// https://backend-blog-alvacode.fly.dev
const statusWork = "prod";
const BASE_URL = statusWork === "dev" ? "http://localhost:8084" : "https://backend-blog-alvacode.fly.dev";

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
