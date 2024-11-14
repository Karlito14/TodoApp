import { IStates, EnumStates, Todo } from '@interfaces/interfaces';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './Footer.style';

const STATES = Object.values(EnumStates);

export const Footer = ({ state, updateState, todoList }: IStates) => {
  const displayQuantity = (list: Todo[], state: string) => {
    switch (state) {
      case EnumStates.all:
        return list.length;
      case EnumStates.inProgress:
        return list.filter((item) => !item.done).length;
      case EnumStates.done:
        return list.filter((item) => item.done).length;
    }
  };

  return (
    <View style={styles.container}>
      {STATES.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => updateState(item)}>
          <Text style={[styles.state, item === state && { color: '#2f76e5' }]}>
            {item} ({displayQuantity(todoList, item)})
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
