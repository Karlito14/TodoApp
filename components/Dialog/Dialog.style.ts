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
    padding: 30,
    paddingBottom: 20,
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
  error: {
    color: '#b10303',
    fontSize: 16
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  addBtn: {
    backgroundColor: '#c2daff',
    borderRadius: 7,
  },
  txtBtn: {
    fontSize: 16,
    padding: 10,
    color: '#2f76e5',
    fontWeight: 'bold',
  },
});
