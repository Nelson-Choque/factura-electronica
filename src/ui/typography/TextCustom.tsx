import React, {ReactNode} from 'react';
import {StyleSheet, Text} from 'react-native';

const TextCustom = ({
  fontSize,
  color = '#000',
  children,
  type = 'default',
  fontWeight = 'normal',
}: {
  children: ReactNode;
  color?: string;
  fontSize?: number;
  type?: 'h2' | 'p' | 'default';
  fontWeight?: 'bold' | 'normal';
}) => {
  return (
    <Text
      style={[
        {fontWeight: fontWeight, color: color, fontSize: fontSize},
        style[type],
      ]}>
      {children}
    </Text>
  );
};

const style = StyleSheet.create({
  h2: {
    fontSize: 20,
    marginTop: 16,
  },
  p: {
    fontSize: 14,
  },
  default: {},
});

export default TextCustom;
