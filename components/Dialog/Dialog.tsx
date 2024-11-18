import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './Dialog.style';
import { useState } from 'react';

export const Dialog = (props: { modalVisible: boolean }) => {
  const [valueInput, setValueInput] = useState('');
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
    >
      <View style={styles.modalView}>
        <View style={styles.container}>
          <TextInput style={styles.input} placeholder="Add a New Todo" />
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.cancelBtn}>
                <Text style={styles.txtBtns}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addBtn}>
                <Text style={styles.txtBtns}>Add +</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
