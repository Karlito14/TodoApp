import {
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { styles } from './Dialog.style';
import { useState } from 'react';
import { IDialog } from '@interfaces/interfaces';

export const Dialog = ({ modalVisible, setModalVisible, addTodo }: IDialog) => {
  const [valueInput, setValueInput] = useState('');
  const [errorInput, setErrorInput] = useState(false);

  const checkInputValid = () => {
    if (valueInput) {
      const newTodo = {
        title: valueInput.trim(),
        done: false,
        id: 'id' + Math.random().toString(16).slice(2),
      };

      setErrorInput(false);
      addTodo(newTodo);
      setModalVisible(false);
    } else {
      setErrorInput(true);
    }
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        onPress={() => {
          setModalVisible(false);
          setErrorInput(false);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="Add a New Todo"
              onChangeText={setValueInput}
            />
            {errorInput && (
              <Text style={styles.error}>Please enter a todo</Text>
            )}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.addBtn} onPress={checkInputValid}>
                <Text style={styles.txtBtn}>Add +</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
