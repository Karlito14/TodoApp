import { Image, Text } from 'react-native';
import { styles } from './Header.style';

export const Header = () => {
  return (
    <>
      <Image style={styles.logo} source={require('@assets/logo.png')} resizeMode='contain' />
      <Text style={styles.title}>What should you do ?</Text>
    </>
  );
};
