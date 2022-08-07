import { FC } from 'react'
import { useGetAllUsersQuery } from '../Redux/Post.api';
import Post from './Post';

const PostList: FC = () => {
  const { data, isLoading, error } = useGetAllUsersQuery('posts')

  return (
    <div className='flex justify-center py-6 px-4'>
      {error && 'Error'}
      {isLoading && "Loading...."}
      {data && (
        <ul>
          {data.map((item) => {
            return <Post id={item.id} title={item.title} />
          })}
        </ul>
      )}
    </div>
  )
}

export default PostList