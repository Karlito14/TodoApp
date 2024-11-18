import { Alert, Modal, SafeAreaView, View } from 'react-native';
import { useState } from 'react';
import { styles } from './App.style';
import { Header } from '@components/Header/Header';
import { CardList } from '@components/CardList/CardList';
import { EnumStates, Todo } from '@interfaces/interfaces';
import { Footer } from '@components/Footer/Footer';
import { ButtonAdd } from '@components/ButtonAdd/ButtonAdd';
import { Dialog } from '@components/Dialog/Dialog';

const TODO_LIST: Todo[] = [
  { id: '1', title: 'Sortir le chien', done: false },
  { id: '2', title: 'Acheter le pain', done: false },
  { id: '3', title: 'Laver la voiture', done: false },
  { id: '4', title: 'Faire les courses', done: false },
  { id: '5', title: 'Piscine', done: false },
];

export default function App() {
  const [todoList, setTodoList] = useState(TODO_LIST);
  const [stateSelected, setStateSelected] = useState(EnumStates.all);
  const [modalVisible, setModalVisible] = useState(false);

  const filteredList = () => {
    switch (stateSelected) {
      case EnumStates.all:
        return todoList;
      case EnumStates.inProgress:
        return todoList.filter((item) => !item.done);
      case EnumStates.done:
        return todoList.filter((item) => item.done);
    }
  };

  const updateTodo = (todo: Todo) => {
    const updatedTodo = { ...todo, done: !todo.done };

    const todoIndex = todoList.findIndex((item) => item.id === updatedTodo.id);

    const updatedTodoList = [...todoList];
    updatedTodoList[todoIndex] = updatedTodo;

    setTodoList(updatedTodoList);
  };

  const openAlert = (todo: Todo) => {
    Alert.alert('Delete this todo ?', todo.title, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: () => {
          const updatedTodoList = todoList.filter(
            (item) => item.id !== todo.id
          );
          setTodoList(updatedTodoList);
        },
        style: 'destructive',
      },
    ]);
  };

  const addTodo = () => {};

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Dialog modalVisible={modalVisible} />
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.body}>
          <CardList
            todoList={filteredList()}
            onPress={updateTodo}
            onLongPress={openAlert}
          />
        </View>
        <ButtonAdd onPress={setModalVisible} />
      </SafeAreaView>
      <View style={styles.footer}>
        <Footer
          state={stateSelected}
          updateState={setStateSelected}
          todoList={todoList}
        />
      </View>
    </>
  );
}
