interface Todo {
  id: string;
  title: string;
  done: boolean;
}

interface ITodo {
  todo: Todo;
}

interface ITodoList {
  todoList: Todo[];
}

export { Todo, ITodoList, ITodo };
