import { FlatList, View } from 'react-native';
import { ITodoList } from '@interfaces/interfaces';
import { Card } from '@components/Card/Card';

export const CardList = ({ todoList }: ITodoList) => {
  return (
    <FlatList
      data={todoList}
      renderItem={({ item }) => <Card todo={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};