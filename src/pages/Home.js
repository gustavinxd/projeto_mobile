import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import {MainCard, SubCard} from '../components/Card';
import {especiais, receitas} from '../components/Recipes';

export default function HomeScreen({ navigation }) {

  const [data, setReceitas] = useState([]);
  const [loading, setLoading] = useState(true);

   useEffect(() =>{
    const loadReceitas = async () => {
      setReceitas(especiais);
      setLoading(false);
    }

    loadReceitas();

   },[]);

  if(loading){
    return(
      <View style={styles.loading}>
        <ActivityIndicator color="#121212" size={85}/>
      </View>
    );

  }else{
    return (
        <View style={styles.container}>
        
          <FlatList
            style ={styles.lista}
            ListHeaderComponent={<Text style={styles.title}>Especial do Dia</Text>}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                  <MainCard
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