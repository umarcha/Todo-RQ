import { useMutation } from '@tanstack/react-query';
import { useState } from 'react'
import { postRequest } from '../config/axiosConfig';

const AddTodo = ({ refetch }) => {

  const [todo, setTodo] = useState("");

  // Mutations
  const mutation = useMutation({
    mutationFn: (data) => postRequest("add-todo", data),
    onSuccess: () => refetch()
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    mutation.mutate({ title: todo, status: false })
    setTodo("")
  }

  return (
    <div className="px-6 py-8 shadow-lg rounded-xl w-full max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit}>
        <input type="text" className="block outline-none border border-gray-400 rounded h-9 w-full px-2"
          onChange={(e) => setTodo(e.target.value)}
          required
          value={todo}
        />
        <button type="submit" className="mt-4 px-4 py-2 block mx-auto w-fit rounded font-semibold text-base leading-5 text-white bg-teal-600">
          {mutation.isLoading ? " Loading..." : "Add Todo"}
        </button>
      </form>
    </div>
  )
}

export default AddTodo
