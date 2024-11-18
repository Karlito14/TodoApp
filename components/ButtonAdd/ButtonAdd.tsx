import { Text, TouchableOpacity } from 'react-native';
import { styles } from './ButtonAdd.style';
import { IAdd } from '@interfaces/interfaces';

export const ButtonAdd = ({onPress}: IAdd) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(true)}>
      <Text style={styles.text}>New Todo +</Text>
    </TouchableOpacity>
  );
};
