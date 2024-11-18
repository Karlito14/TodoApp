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
  onPress: (value: boolean) => void;
}

interface IDialog {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
  addTodo: (todo: Todo) => void;
}

export { Todo, ITodoList, ITodo, IStates, IAdd, IDialog, EnumStates };
