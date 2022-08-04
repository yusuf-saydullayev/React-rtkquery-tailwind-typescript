import { FC } from 'react'
import PostList from '../Components/PostList';
import AddPost from '../Components/addPost';

const Home: FC = () => {

  return (
    <>
      <AddPost />
      <PostList />
    </>
  )
}

export default Home