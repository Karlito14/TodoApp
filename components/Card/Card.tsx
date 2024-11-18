import { Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './Card.style';
import { ITodo } from '@interfaces/interfaces';

export const Card = ({ todo, onPress, onLongPress }: ITodo) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(todo)} onLongPress={() => onLongPress(todo)}>
      <Text
        style={[
          styles.title,
          todo.done && { textDecorationLine: 'line-through' },
        ]}
      >
        {todo.title}
      </Text>
      {todo.done && (
        <Image
          style={styles.check}
          source={require('@assets/check.png')}
          resizeMode="contain"
        />
      )}
    </TouchableOpacity>
  );
};
