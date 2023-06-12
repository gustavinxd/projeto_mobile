import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Card from './Card';
import receitas from './Recipes';

export default function HomeScreen({ navigation }) {
  return (
      <View style={styles.container}>
      <Text style={styles.title}>Tela Principal</Text>
        <FlatList
          data={receitas}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                <Card
                title={item.nome}
                text='Iae poha'
                img={item.img}
                navigation={'Detail'}           
              />
            </TouchableOpacity>
          )}
        />
        
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
        fontSize: 15,
        fontWeight: 'bold',
    }
  });