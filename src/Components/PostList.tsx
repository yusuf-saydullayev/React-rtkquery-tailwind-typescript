import { useGetAllUsersQuery } from '../Redux/Post.api';
import { Post } from '../Types/Posts'
import { FC } from 'react'

const PostList: FC = () => {
  const { data, isLoading, error } = useGetAllUsersQuery('posts')

  return (
    <div className='flex justify-center py-6 px-4'>
      {error && 'Error'}
      {isLoading && "Loading...."}
      {data && (
        <ul>
          {data.map((item: Post) => {
            return <li key={item.id} className="text-center text-white font-mono bg-lime-500 rounded-md my-2 hover:bg-cyan-600 transition delay-50 hover:scale-105 py-1">{item.title}</li>;
          })}
        </ul>
      )}
    </div>
  )
}

export default PostList