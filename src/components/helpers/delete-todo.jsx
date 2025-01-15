import React from 'react'
import ConfirmationPopUp from '../ui/confirm-pop-up'
import { TbTrash } from 'react-icons/tb'
import { RiLoader4Line } from 'react-icons/ri'
import { Tooltip } from 'antd'
import { useMutation } from '@tanstack/react-query'
import todoService from "../../service/todo-service"

const DeleteTodo = ({ todoId, refetchTodoList }) => {

  const { isLoading, mutate } = useMutation({
    mutationKey: ["delete"],
    mutationFn: (data) =>
      todoService().deleteTodo(data),
    onSuccess: ({ data }) => {
      console.log("Deleted: ", data);
      refetchTodoList();
    },
    onError: (error) => {
      console.error("ERROR :: delete Todo ::", error);
      handleError(error);
    },
    retry: false,
  });
  const handleOnDelete = () => {
    const data = {
      todoId
    }
    mutate(data)
  }
  return (
    <ConfirmationPopUp
      title="Delete Todo"
      description="Are you sure to delete this todo?"
      fn={handleOnDelete}
      icon={
        <div className="flex items-center justify-center h-5 mr-2">
          <TbTrash className="text-red-500" />
        </div>
      }
      isLoading={isLoading}
    >
      <Tooltip title="Delete Todo">
        <button className="text-red-500 hover:text-red-500/80 transition">
          {isLoading ? <RiLoader4Line className="animate-spin" /> : <TbTrash />}
        </button>
      </Tooltip>
    </ConfirmationPopUp>
  )
}

export default DeleteTodo