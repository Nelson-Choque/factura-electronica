import {NavigationProp} from '@react-navigation/native';

import {Button, Text, TextStyle, View, ViewStyle} from 'react-native';

export default function LoginPage({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Holaaaa</Text>
      <Button title="Go home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  text: {
    color: '#000000',
  } as TextStyle,
};
