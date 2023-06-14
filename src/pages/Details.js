import React from 'react';
import { View, Text, Button, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import HeaderReceita from '../components/HeaderDetalhe';
import { CardDetailIngredientes, CardDetailIngredientesHeader} from '../components/Cards';
import { ScrollView } from 'react-native-gesture-handler';

export default function DetailScreen({ route }) {
  const {recipe}  = route?.params;
  // const recipesIng = recipe.ingredientes;
  // console.log(recipesIng);
  //console.log(recipe.ingredientes);

  return (

      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <HeaderReceita title={recipe.nome} img={recipe.img}/>

          <CardDetailIngredientesHeader ingTempo={recipe.tempo} ingDif={recipe.dificuldade}/>

          <CardDetailIngredientes 
          ingredientes={recipe.ingredientes.sections}/>

          <CardDetailIngredientes 
          ingredientes={recipe.preparo.sections}/>

        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
    
  },
  scroll: {
   
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