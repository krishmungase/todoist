import request from "../api"
import urls from "../utils/urls"

const todoService = () => {
  return {
    getTodoList: () =>
      request({
        method: "GET",
        url: urls.todo.getTodoList,
      }),

    createTodo: (data) =>
      request({
        method: "POST",
        data,
        url: urls.todo.createTodo
      }),

    deleteTodo: (data) =>
      request({
        method: "POST",
        data,
        url: urls.todo.deleteTodo
      })
  }
}

export default todoService;