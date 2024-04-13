import React, {ReactNode} from 'react';
import {View} from 'react-native';

const ViewCustom = ({
  children,
  bg,
  padding,
  paddingVertical,
  borderRadius,
}: {
  children: ReactNode;
  bg: string;
  padding: number;
  paddingVertical?: number;
  borderRadius?: number;
}) => {
  return (
    <View
      style={[
        {backgroundColor: bg},
        {padding: padding},
        {borderRadius: borderRadius},
        {paddingVertical: paddingVertical},
      ]}>
      {children}
    </View>
  );
};

export default ViewCustom;
