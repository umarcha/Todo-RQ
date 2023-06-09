import { useQuery } from "@tanstack/react-query";
import AddTodo from "./components/AddTodo";
import TodoCard from "./components/TodoCard";
import { getRequest } from "./config/axiosConfig";

const getTodo = () => getRequest("get-todo");

function App() {

  const { data, refetch } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodo,
  })


  return (
    <main className="max-w-4xl mx-auto px-5">
      <AddTodo refetch={refetch} />
      <div className="grid grid-cols-2 gap-4 mt-12">
        {data?.todos.map((item, index) => <TodoCard key={index} item={item} refetch={refetch} />)}
      </div>
    </main>
  )
}

export default App
