import React from 'react';
import { View, Text, Button, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';

export default function DetailScreen({ route }) {

  const {item}  = route.params;

  console.log(item);

  return (

    <View style={styles.container}>
      <Text style={styles.title}>a</Text>            
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  lista: {
    flex: 1,
    paddingHorizontal: 20

  },
  title:{
      fontSize: 24,
      fontWeight: 'bold',
      paddingVertical: 20
      
  },
  loading: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'

  }
});