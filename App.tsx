import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const style = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: '#000',
    padding: 16,
  },
});

const App = () => {
  return (
    <View>
      <Text style={style.title}>Factura electronica - hello world</Text>
    </View>
  );
};

export default App;
