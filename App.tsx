import { Text, SafeAreaView, View } from 'react-native';
import { styles } from './App.style';
import { Header } from './components/Header/Header';
import { Card } from '@components/Card/Card';
import { Todo } from 'interfaces/interfaces';

const TODO_LIST: Todo[]  = [{ id: 1, title: 'Sortir le chien', done: false }, { id: 2, title: 'Acheter le pain', done: false }, { id: 3, title: 'Laver la votiure', done: false }];

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.body}>
          <Card todo={TODO_LIST[0]} />
        </View>
      </SafeAreaView>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </>
  );
}
