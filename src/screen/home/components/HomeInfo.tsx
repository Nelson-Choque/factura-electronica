import {View, StyleSheet} from 'react-native';
import React from 'react';
import {colorPrimary} from '../../../consts/colors';
import TextCustom from '../../../ui/typography/TextCustom';
import ViewCustom from '../../../ui/view/ViewCustom';

const HomeInfo = () => {
  return (
    <ViewCustom
      bg={colorPrimary}
      padding={16}
      paddingVertical={24}
      borderRadius={12}>
      <View style={style.containerText}>
        <TextCustom color="#fff" fontWeight="bold">
          RUC
        </TextCustom>
        <TextCustom color="#fff">1654485</TextCustom>
      </View>
      <View style={style.containerText}>
        <TextCustom color="#fff" fontWeight="bold">
          Empresa:
        </TextCustom>
        <TextCustom color="#fff">Ejemplo sac</TextCustom>
      </View>
    </ViewCustom>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: colorPrimary,
    padding: 16,
    paddingVertical: 24,
    borderRadius: 16,
  },

  containerText: {
    flexDirection: 'row',
    gap: 4,
  },
});

export default HomeInfo;
