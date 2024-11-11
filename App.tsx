import { Text, SafeAreaView, View } from 'react-native';
import { styles } from './App.style';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text>Header</Text>
        </View>
        <View style={styles.body}>
          <Text>Body</Text>
        </View>
      </SafeAreaView>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </>
  );
}
