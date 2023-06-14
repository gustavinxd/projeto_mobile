import React from "react";
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';

function HeaderReceita({ img, title }) {
    return (
        <View style={styles.container}>
            <Image style={styles.imagem}
            source= { img }
            />
            <Text style={styles.title}> { title }</Text>         

        </View>
    );
}

export default HeaderReceita;

const larguraTela = Dimensions.get('window').width;
const alturaTela = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f1f1f1',
        elevation: 2,
        marginBottom: '5%'
    },
    title:{
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        padding: 5
    },

    imagem:{
      width: larguraTela,
      height: alturaTela/4  
    }

});