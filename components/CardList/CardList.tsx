import { FlatList, View } from 'react-native';
import { ITodoList } from '@interfaces/interfaces';
import { Card } from '@components/Card/Card';

export const CardList = ({ todoList, onPress }: ITodoList) => {
  return (
    <FlatList
      data={todoList}
      renderItem={({ item }) => <Card todo={item} onPress={onPress} />}
      keyExtractor={(item) => item.id}
    />
  );
};