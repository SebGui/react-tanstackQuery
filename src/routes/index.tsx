import SinglePost from '../components/SinglePost'

import Post from '../types/Post'
import { useQuery } from '@tanstack/react-query'
import { getPostsQueryOptions } from '../queryOptions/getPostsQueryOptions'

export default function Index() {
  const {data, isLoading, isError} = useQuery(getPostsQueryOptions())

  if (isLoading === true) {
    return <>Spinner</>
  }

  if (isError === true) {
    return <>Error</>
  }

  return (
    <section>
      {data && data.map((item:Post, index:number) => {
        return <SinglePost postData={item} key={index}></SinglePost>
      })}
    </section>
  )
}