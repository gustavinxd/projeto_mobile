import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Card from './Card';
import img_lasanha from '../img/lasanha.jpg';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Tela Principal</Text>
      <Card
        title='Lasanha'
        text='Iae poha'
        link='https://pokerandomteam.netlify.app'
        img={img_lasanha}
      />
        <Button title="Ir para Detalhes" onPress={() => navigation.navigate('Detail')} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });