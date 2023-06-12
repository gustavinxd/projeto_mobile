import React from 'react';
import { View, Text, Button } from 'react-native';
import Card from '../components/Card';

export default function DetailScreen({ navigation }) {
  return (
    <View>
      <Text>Tela de Detalhes</Text>
      <Button title="Ir para Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}