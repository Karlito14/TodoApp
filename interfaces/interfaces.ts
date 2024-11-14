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

interface IStates {
  state: string;
  updateState: (state: string) => void;
  todoList: Todo[];
}

enum EnumStates {
  all = 'All',
  inProgress = 'In Progress',
  done= 'Done'
}

export { Todo, ITodoList, ITodo, IStates, EnumStates };
