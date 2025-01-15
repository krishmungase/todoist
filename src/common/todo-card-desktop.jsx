import { Tag } from "antd";
import { MdAccessTime } from "react-icons/md";
import dateFormat from "dateformat";
// import DeleteTodo from "../helpers/delete";
import { TODO_CARD_BORDER_COLOR, TODO_LEVEL_COLOR, TODO_STATUS_COLOR } from "../config/todo";
import { strSlice } from "../utils";
import TodoStatusDropdown from "../components/ui/todo-dropdown";
import DeleteTodo from "../components/helpers/delete-todo";

const TodoCardForDesktop = ({ todo, refetchTodoList }) => {
  return (
    <div
      className={`bg-card p-3 space-y-2 rounded-lg shadow-lg transition-transform transform border-t border-r border-b border-l-2 ${TODO_CARD_BORDER_COLOR[todo.level]}`}
    >
      <div className="flex items-center space-x-1">
        <h3 className="text-black font-medium">{strSlice(todo.title, 30)}</h3>
      </div>
      <p className="text-gray-700 pb-2 text-sm font-light h-[45px]">
        {strSlice(todo.description, 65)}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Tag color={TODO_LEVEL_COLOR[todo.level]}>
            {todo.level.toUpperCase()}
          </Tag>
          <Tag color={TODO_STATUS_COLOR[todo.status]}>
            {todo.status.toLocaleUpperCase()}
          </Tag>
        </div>

        <TodoStatusDropdown todo={todo} refetchTodoList={refetchTodoList} />
      </div>

      <div className="flex items-center justify-between pt-4">
        <div className="font-light flex items-center space-x-1 text-black">
          <MdAccessTime />
          <span className="text-xs">
            {dateFormat(new Date(todo.createdAt), "HH:MM")}
          </span>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <DeleteTodo todoId={todo._id} refetchTodoList={refetchTodoList} />
        </div>
      </div>
    </div>
  );
};

export default TodoCardForDesktop;
