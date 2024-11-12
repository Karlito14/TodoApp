import { Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './Card.style';
import { Todo } from 'interfaces/interfaces';

interface ITodo {
  todo: Todo;
}

export const Card = ({ todo }: ITodo) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Text
        style={[
          styles.title,
          todo.done ? { textDecorationLine: 'line-through' } : null,
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
