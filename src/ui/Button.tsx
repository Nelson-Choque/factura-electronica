import {Text, TouchableOpacity} from 'react-native';
import React, {ReactNode} from 'react';
import {style} from './Style';

const Button = ({children}: {children: ReactNode}) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <Text style={style.text}> {children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
