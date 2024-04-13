import {StyleSheet, View} from 'react-native';
import React from 'react';
import HomeInfo from './components/HomeInfo';
import HomeCard from './components/HomeCard';
import TextCustom from '../../ui/typography/TextCustom';

const Home = () => {
  return (
    <View style={style.container}>
      <HomeInfo />
      <View>
        <TextCustom type="h2" fontWeight="bold">
          Menu
        </TextCustom>
      </View>
      <View style={style.sectionProduct}>
        <HomeCard>Nuevo comprobante</HomeCard>
        <HomeCard>Realizar venta</HomeCard>
        <HomeCard>Productos</HomeCard>
        <HomeCard>Clientes</HomeCard>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 20,
    marginTop: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  container: {
    padding: 16,
    backgroundColor: '#f5f5f5',
    height: '100%',
  },

  sectionProduct: {
    gap: 16,
    marginTop: 16,
  },
});

export default Home;
