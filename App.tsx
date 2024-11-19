import { Alert, SafeAreaView, View } from 'react-native';
import { useEffect, useState } from 'react';
import { styles } from './App.style';
import { Header } from '@components/Header/Header';
import { CardList } from '@components/CardList/CardList';
import { Footer } from '@components/Footer/Footer';
import { ButtonAdd } from '@components/ButtonAdd/ButtonAdd';
import { Dialog } from '@components/Dialog/Dialog';
import { EnumStates, Todo } from '@interfaces/interfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TODO_LIST: Todo[] = [
  { id: '1', title: 'Sortir le chien', done: false },
  { id: '2', title: 'Acheter le pain', done: false },
  { id: '3', title: 'Laver la voiture', done: false },
  { id: '4', title: 'Faire les courses', done: false },
  { id: '5', title: 'Piscine', done: false },
];

export default function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [stateSelected, setStateSelected] = useState(EnumStates.all);
  const [modalVisible, setModalVisible] = useState(false);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('myData');
      if (jsonValue !== null) {
        setTodoList(JSON.parse(jsonValue));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const storeData = async (value: Todo[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('myData', jsonValue);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    storeData(todoList)
  },[todoList])

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

  const addTodo = (todo: Todo) => {
    const updatedTodoList = [...todoList, todo];
    setTodoList(updatedTodoList);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Dialog
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          addTodo={addTodo}
        />
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
