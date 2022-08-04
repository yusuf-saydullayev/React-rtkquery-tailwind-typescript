import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useAddPostMutation } from '../Redux/Post.api';

const addPost = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setdescription] = useState<string>('');
  const [addPost, { data }] = useAddPostMutation();

  const AddPostHandler = async () => {
    try {
      if (title && description) {
        await addPost({ title, body: description }).unwrap();
        toast.success('Post added successfully');
        setTitle('');
        setdescription('')
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong with the post');
    }
  }

  console.log(data)

  return (
    <>
      <div className="container mx-auto mb-6 px-6 flex justify-center space-x-6">
        <div className="w-56">
          <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
          <input value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div className="w-56">
          <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
          <input value={description} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setdescription(e.target.value)} type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <button onClick={AddPostHandler} type="submit" className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Post</button>
      </div>
      <Toaster />
    </>
  )
}

export default addPost