import { queryOptions } from "@tanstack/react-query"
import Post from "../types/Post"

export const getPostQueryOption = (id?:string) => {
    return queryOptions({
        queryKey: ['getSinglePost', id],
        queryFn: () => getPost(id)
    })
}

const getPost = async (id?:string): Promise<Post> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return await res.json()
}