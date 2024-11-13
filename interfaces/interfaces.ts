interface Todo {
  id: string;
  title: string;
  done: boolean;
}

interface ITodo {
  todo: Todo;
  onPress: (todo: Todo) => void;
}

interface ITodoList {
  todoList: Todo[];
  onPress: (todo: Todo) => void;
}

export { Todo, ITodoList, ITodo };
