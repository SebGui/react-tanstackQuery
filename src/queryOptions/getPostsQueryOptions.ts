import { queryOptions } from "@tanstack/react-query"
import Post from "../types/Post"

const MAX_PER_PAGE:number = 20

export const getPostsQueryOptions = () => {
    return queryOptions({
        queryKey: ['getPosts'], 
        queryFn : getPosts
        //enabled: true | false, //conditional querying
    })
}

const getPosts = async (): Promise<Post[]> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${MAX_PER_PAGE}`)
    return await res.json()
}