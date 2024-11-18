enum EnumStates {
  all = 'All',
  inProgress = 'In Progress',
  done = 'Done',
}

interface Todo {
  id: string;
  title: string;
  done: boolean;
}

interface ITodo {
  todo: Todo;
  onPress: (todo: Todo) => void;
  onLongPress: (todo: Todo) => void;
}

interface ITodoList {
  todoList: Todo[];
  onPress: (todo: Todo) => void;
  onLongPress: (todo: Todo) => void;
}

interface IStates {
  state: EnumStates;
  updateState: (state: EnumStates) => void;
  todoList: Todo[];
}

interface IAdd {
  onPress: (boolean: boolean) => void
}


export { Todo, ITodoList, ITodo, IStates, IAdd, EnumStates };
