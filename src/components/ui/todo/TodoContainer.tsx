import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      {/* header  */}
      <div>
        <button>Add Todo</button>
        <button>Filter</button>
      </div>
      {/* body */}
      <div className="bg-red-500 w-full h-[500px] rounded-xl p-5 space-y-3">
        {/* default div */}
        {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center ">
          <p>There is no task pending</p>
        </div> */}
        {/* todo list */}
       
      </div>
    </div>
  );
};

export default TodoContainer;
