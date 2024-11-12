import { Text, SafeAreaView, View } from 'react-native';
import { useState } from 'react';
import { styles } from './App.style';
import { Header } from '@components/Header/Header';
import { CardList } from '@components/CardList/CardList';
import { Todo } from '@interfaces/interfaces';

const TODO_LIST: Todo[] = [
  { id: '1', title: 'Sortir le chien', done: false },
  { id: '2', title: 'Acheter le pain', done: false },
  { id: '3', title: 'Laver la votiure', done: false },
  { id: '4', title: 'Sortir le chien', done: false },
  { id: '5', title: 'Acheter le pain', done: false },
  { id: '6', title: 'Laver la votiure', done: false },
];

export default function App() {
  const [todoList, setTodoList] = useState(TODO_LIST);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.body}>
          <CardList todoList={todoList} />
        </View>
      </SafeAreaView>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </>
  );
}
