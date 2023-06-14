import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen   from '../pages/Home';
import DetailScreen from '../pages/Details';

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
      <Stack.Screen name="Detail" component={ DetailScreen } options={{ title: 'Modo de Preparo'}} />
    </Stack.Navigator>
  );
}

