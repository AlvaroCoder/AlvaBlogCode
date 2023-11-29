export function postsAdapter(posts) {
    const contentComponents = posts.message.contentComponents;
    const contentPosts = contentComponents.map((post)=>{
        return {
            title : post.heading,
            description : post.description,
            id : post.id,
            img : post.iconContent,
            url : post.slug,
            createdAt : post.datecreatedAt
        }
    });
    return {contentPosts}
}