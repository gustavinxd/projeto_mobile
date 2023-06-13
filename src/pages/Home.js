import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import Card from '../components/Card';
import especiais from '../components/Recipes';

export default function HomeScreen({ navigation }) {

  const handleItemPress = (item) => {
      navigation.navigate('Detail', { item } )
    };

    return (
        <View style={styles.container}>
        
          <FlatList
            style ={styles.lista}
            ListHeaderComponent={<Text style={styles.title}>Receitas do dia</Text>}
            data={especiais}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <TouchableOpacity onPress={handleItemPress(item)}>
                  <Card
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