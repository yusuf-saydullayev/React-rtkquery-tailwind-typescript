import { FC } from 'react'

interface PostIo {
  title: string
  id: number
}

const Post: FC<PostIo> = ({ id, title }) => {
  return (
    <li key={id} className="text-center text-white font-mono bg-lime-500 rounded-md my-2 hover:bg-cyan-600 transition delay-50 hover:scale-105 py-1">{title}</li>
  )
}

export default Post