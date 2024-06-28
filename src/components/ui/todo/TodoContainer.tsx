import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  return (
    <div>
      {/* header  */}
      <div className="flex justify-between  mb-5">
        <AddTodoModal />
        <TodoFilter/>
      </div>
      {/* body */}
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[3px] ">
        {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center ">
          <p>There is no task pending</p>
        </div> */}
        {/* todo list */}
        <div className="w-full bg-white rounded-lg space-y-3">
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
