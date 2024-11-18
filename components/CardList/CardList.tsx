import { FlatList, View } from 'react-native';
import { ITodoList } from '@interfaces/interfaces';
import { Card } from '@components/Card/Card';

export const CardList = ({ todoList, onPress, onLongPress }: ITodoList) => {
  return (
    <FlatList
      data={todoList}
      renderItem={({ item }) => <Card todo={item} onPress={onPress} onLongPress={onLongPress} />}
      keyExtractor={(item) => item.id}
    />
  );
};