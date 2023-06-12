import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen   from '../components/Home';
import DetailScreen from '../components/Details';
// import Card from '../components/Card';
//import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor: '#0068EA',
        }, 
        headerTintColor: '#fff',
        headerTitleAlign: 'center'
    }}>
      <Stack.Screen name="Home" component={ HomeScreen } options={{ title: 'Home'}} />
      {/* <Stack.Screen name="Card" component={ Card } /> */}
      <Stack.Screen name="Detail" component={ DetailScreen } options={{ title: 'Detalhes'}} />
    </Stack.Navigator>
  );
}

