import { useState } from 'react'
import { useGetAllUsersQuery } from './Redux/User.api';
import { User } from './Types/Posts'

function App() {
  const { data, isLoading, error } = useGetAllUsersQuery('posts',{pollingInterval:3000})

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline text-red-600">
        Hello world!
      </h1>
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

export default App
