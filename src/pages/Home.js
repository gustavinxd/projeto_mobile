import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import {CardHome, } from '../components/Cards';
import especiais from '../components/Recipes';

export default function HomeScreen({ navigation }) {

    return (
        <View style={styles.container}>
        
          <FlatList
            style ={styles.lista}
            ListHeaderComponent={<Text style={styles.title}>Receitas do dia</Text>}
            data={especiais}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => navigation.navigate('Detail', { recipe: item } )}>
                  <CardHome
                  title={item.nome}
                  text={item.nota}
                  img={item.img}           
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