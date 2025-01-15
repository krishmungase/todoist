const urls = {
  main: {
    developmentBaseUrl: "https://todoist-server-0naw.onrender.com/api/v1",
    productionBaseUrl: "https://todoist-server-0naw.onrender.com/api/v1",
    // developmentBaseUrl: "http://localhost:5501/api/v1",
    // productionBaseUrl: "http://localhost:5501/api/v1",
  },
  todo: {
    createTodo: "/todo/create",
    getTodoList: "/todo/get",
    deleteTodo: "/todo/delete",
  }
};

export default urls;
