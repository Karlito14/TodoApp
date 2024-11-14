import { Text, SafeAreaView, View } from 'react-native';
import { useState } from 'react';
import { styles } from './App.style';
import { Header } from '@components/Header/Header';
import { CardList } from '@components/CardList/CardList';
import { Todo } from '@interfaces/interfaces';
import { Footer } from '@components/Footer/Footer';

const TODO_LIST: Todo[] = [
  { id: '1', title: 'Sortir le chien', done: false },
  { id: '2', title: 'Acheter le pain', done: false },
  { id: '3', title: 'Laver la votiure', done: false },
  { id: '4', title: 'Faire les courses', done: false },
];

export default function App() {
  const [todoList, setTodoList] = useState(TODO_LIST);
  const [stateSelected, setStateSelected] = useState('All');

  const updateTodo = (todo: Todo) => {
    const updatedTodo = { ...todo, done: !todo.done };

    const todoIndex = todoList.findIndex((item) => item.id === updatedTodo.id);

    const updatedTodoList = [...todoList];
    updatedTodoList[todoIndex] = updatedTodo;

    setTodoList(updatedTodoList);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.body}>
          <CardList todoList={todoList} onPress={updateTodo} />
        </View>
      </SafeAreaView>
      <View style={styles.footer}>
        <Footer state={stateSelected} updateState={setStateSelected} />
      </View>
    </>
  );
}
