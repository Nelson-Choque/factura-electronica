import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React, {ReactNode, useEffect, useState} from 'react';
import {colorPrimary} from '../../../consts/colors';
import TextCustom from '../../../ui/typography/TextCustom';

const HomeCard = ({children}: {children: ReactNode}) => {
  const [firstLetter, setFirstLetter] = useState('');

  useEffect(() => {
    if (!children) {
      return;
    }
    if (!children.toString()[0]) {
      return;
    }
    setFirstLetter(children.toString()[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={style.container}>
      <TouchableOpacity>
        <View style={style.productContainer}>
          <View style={style.product}>
            <TextCustom fontSize={20} color="#fff">
              {firstLetter}
            </TextCustom>
          </View>
          <TextCustom fontSize={16}>{children}</TextCustom>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {height: 5, width: 0},
    shadowOpacity: 0.25,

    shadowRadius: 24,
    elevation: 5,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
  },
  product: {
    width: 40,
    height: 40,
    backgroundColor: colorPrimary,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeCard;
