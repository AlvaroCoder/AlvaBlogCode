export function postsAdapter(posts) {
    const contentComponents = posts.message.contentComponents;
    const contentPosts = contentComponents.map((post)=>{
        return {
            title : post.heading,
            description : post.description,
            id : post.id,
            img : post.iconContent,
            url : post.slug,
            createdAt : post.datecreatedAt,
            categories : post.categories
        }
    });
    return {contentPosts}
}
export function categoriesAdapter(categories=[]) {
    const contentCategories = categories.map((cat)=>{
        return {
            ...cat,
            selected : false
        }
    });
    return [ {
        "id": "1",
        "name": "Recientes",
        "slug": "recientes",
        "selected":true
    }, ...contentCategories]
}