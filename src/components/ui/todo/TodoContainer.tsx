import { useState } from "react";
import { useGetTodosQuery } from "../../../redux/api/api";
// import { useAppSelector } from "../../../redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

type TTodo = {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  priority: string;
};

const TodoContainer = () => {
  const [priority, setPriority] = useState("");
  // data query from server
  const { data: todos, isLoading } = useGetTodosQuery(priority);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {/* header  */}
      <div className="flex justify-between  mb-5">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      {/* body */}
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[3px] ">
        {todos.length === 0 && (
          <div className="bg-white text-2xl text-red-500 font-bold p-5 flex justify-center items-center ">
            <p>There is no task pending</p>
          </div>
        )}
        {/* todo list */}
        <div className="w-full bg-white rounded-lg space-y-3">
          {todos?.map((todo: TTodo) => (
            <TodoCard key={todo.id} {...todo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
