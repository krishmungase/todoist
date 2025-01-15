import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import todoService from '../../service/todo-service';
import CreateTodo from '../helpers/create-task';
import DesktopTodoList from './desktop-todo-view';
import MobileTodoList from './mobile-todo-view';

const TaskPage = () => {
  const [todoList, setTodoList] = useState([]);

  const { mutate: refetchTodoList, isLoading } = useMutation({
    mutationKey: ["get-todo-list"],
    mutationFn: () => todoService().getTodoList(),
    onSuccess: ({ data }) => {
      setTodoList(data?.todoList)
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


  console.log("TodoList: ", todoList)

  return (
    <div className=" mt-16 px-4 relative">
      <div className="flex items-center justify-end px-4">
        <CreateTodo refetchTodoList={refetchTodoList} />
      </div>

      {isLoading ? (
        <div className="py-16 flex items-center justify-center">
          <Spin />
        </div>
      ) : todoList?.length === 0 ? (
        <div className="py-16 flex items-center justify-center text-primary font-semibold">
          No Todo Yet? Get Started by Creating Your First One!
        </div>
      ) : (
        <div className='mt-4'>
          <DesktopTodoList
            todoList={todoList}
            refetchTodoList={refetchTodoList}
          />
          <MobileTodoList
            todoList={todoList}
            refetchTodoList={refetchTodoList}
          />
        </div>
      )}
    </div>
  );
};

export default TaskPage;
