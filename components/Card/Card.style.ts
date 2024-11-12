import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 13,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 115,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {
    fontSize: 25,
  },
  check: {
    width: 25,
  },
});
