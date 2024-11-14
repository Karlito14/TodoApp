import { IState } from '@interfaces/interfaces';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './Footer.style';

const STATES = ['All', 'In Progress', 'Done'];

export const Footer = ({ state, updateState }: IState) => {
  return (
    <View style={styles.container}>
      {STATES.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => updateState(item)}>
          <Text style={[styles.state, item === state && { color: '#2f76e5' }]}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
