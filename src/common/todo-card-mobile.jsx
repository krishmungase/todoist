import { Badge, Tag } from "antd";

import DeleteTodo from "../components/helpers/delete-todo";
import { TODO_CARD_BORDER_COLOR, TODO_LEVEL_COLOR, TODO_STATUS_COLOR } from "../config/todo";

const TodoCardForMobile = ({
  todo,
  refetchTodoList,
}) => {
  return (
    <div
      className={`flex flex-col bg-gray-100 border-t border-l-2 border-b border-r p-3 rounded-md ${TODO_CARD_BORDER_COLOR[todo.level]}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex space-x-2 h-[30px] md:h-[40px]">
          <Badge color={TODO_LEVEL_COLOR[todo.level]} />
          <h1 className="text-primary font-medium text-xs sm:text-sm">
            {todo.title}
          </h1>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <Tag
          className="w-[80px] text-[9px] flex items-center justify-center rounded-full"
          color={TODO_STATUS_COLOR[todo.status]}
        >
          {todo.status.toLocaleUpperCase()}
        </Tag>

        <div className="flex items-center justify-center space-x-3">
          <DeleteTodo objectId={todo._id} refetchTodoList={refetchTodoList} />
        </div>
      </div>
    </div>
  );
};

export default TodoCardForMobile;
