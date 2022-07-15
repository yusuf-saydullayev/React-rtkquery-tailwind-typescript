import { FC } from 'react'
import { useGetAllUsersQuery } from '../Redux/User.api';
import { User } from '../Types/Posts'

const Home: FC = () => {
  const { data, isLoading, error } = useGetAllUsersQuery('posts', { pollingInterval: 3000 })

  return (
    <div>
      {isLoading ? (
        "Loading...."
      ) : error ? (
        "Error"
      ) : data ? (
        <ul>
          {data?.map((item: User) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      ) : null}
    </div>
  )
}

export default Home