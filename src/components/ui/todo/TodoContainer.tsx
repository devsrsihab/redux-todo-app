import { useAppSelector } from "../../../redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  return (
    <div>
      {/* header  */}
      <div className="flex justify-between  mb-5">
        <AddTodoModal />
        <TodoFilter />
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
          {todos.map((todo) => (
            <TodoCard key={todo.id} {...todo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
