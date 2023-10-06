const BASE_URL = "http://localhost:8080"
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
