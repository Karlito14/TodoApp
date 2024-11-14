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

interface IState {
  state: string;
  updateState: (state: string) => void;
}

export { Todo, ITodoList, ITodo, IState };
