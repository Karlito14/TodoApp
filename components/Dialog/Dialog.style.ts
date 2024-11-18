import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  container: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 7,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    fontSize: 18,
    marginBottom: 10,
    borderRadius: 7,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cancelBtn: {
    backgroundColor: '#d5294d',
    marginRight: 10,
    borderRadius: 7,
  },
  addBtn: {
    backgroundColor: '#2f76e5',
    borderRadius: 7,
  },
  txtBtns: {
    fontSize: 16,
    padding: 8,
    color: 'white',
    fontWeight: 'bold',
  },
});
