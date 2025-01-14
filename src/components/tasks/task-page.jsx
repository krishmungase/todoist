import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import todoService from '../../service/todo-service';

const TaskPage = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await todoService().getTodoList();
        console.log("Manual fetch response:", response.data.todoList);
        setTodoList(response.data.todoList)
      } catch (error) {
        console.error("Manual fetch error:", error);
      }
    };
    fetchData();
  }, []);

  console.log("TodoList: ", todoList)

  return (
    <div className="mt-16 px-4">
      <div className="flex items-center justify-between">
        {/* <CreateTodo refetchTodoList={refetchTodoList} /> */}
      </div>
      <div className="h-[calc(100vh_-170px)] my-8 overflow-y-auto md:p-6 md:rounded-lg md:shadow-sm scroll-smooth">
        ...
      </div>
    </div>
  );
};

export default TaskPage;
