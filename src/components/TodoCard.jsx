import { useMutation } from "@tanstack/react-query"
import { deleteRequest, patchRequest } from "../config/axiosConfig"

const TodoCard = ({ item, refetch }) => {

  // Mutations
  const mutation = useMutation({
    mutationFn: (data) => patchRequest(`update/${item._id}`, data),
    onSuccess: () => refetch()
  })

  // Mutations
  const deleteMutation = useMutation({
    mutationFn: () => deleteRequest(`delete/${item._id}`),
    onSuccess: () => refetch()
  })

  const updateStatus = (e) => {
    const status = e.target.checked;
    mutation.mutate({ status: status })
  }
  return (
    <div className="px-4 py-6 rounded-md bg-white shadow-md">
      <div className="flex gap-3 justify-between items-center">
        <h5 className={`${item.status && 'line-through text-gray-400'}`}>{item.title}</h5>
        <input type="checkbox" checked={item.status} onChange={updateStatus} />
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={() => { deleteMutation.mutate() }}
          className="bg-red-600 rounded-md px-3 py-2 text-xs text-white">
          {deleteMutation.isLoading ? "Deleting" : "Delete"}
        </button>
      </div>
    </div>
  )
}

export default TodoCard