import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import todoService from '../../service/todo-service';
import CreateTodo from '../helpers/create-task';

const TaskPage = () => {
  const [todoList, setTodoList] = useState([]);

  const { mutate: refetchTodoList, isLoading } = useMutation({
    mutationKey: ["get-todo-list"],
    mutationFn: () => todoService().getTodoList(),
    onSuccess: ({ data }) => {
      // setSubLinks(data.data);
      console.log("data =>", data);
    },
    onError: (error) => {
      message.error('Failed to fetch todos');
      console.error(error);
    }
  });

  useEffect(() => {
    refetchTodoList();
  }, [refetchTodoList]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await todoService().getTodoList();
  //       console.log("Manual fetch response:", response.data.todoList);
  //       setTodoList(response.data.todoList)
  //     } catch (error) {
  //       console.error("Manual fetch error:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  console.log("TodoList: ", todoList)

  return (
    <div className="mt-16 px-4  w-full h-full ">
      <div className="flex items-center justify-end px-4">
        <CreateTodo refetchTodoList={refetchTodoList} />
      </div>
      <div className="h-[calc(100vh_-170px)] my-8 overflow-y-auto md:p-6 md:rounded-lg md:shadow-sm scroll-smooth">
        ...
      </div>
    </div>
  );
};

export default TaskPage;
