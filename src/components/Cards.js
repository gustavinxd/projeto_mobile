import React from "react";
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import star from '../img/star.png'

function CardHome({ title, text, img }) {
    return (
        <View style={styles.container}>
            <Image style={styles.imagem}
            source= { img }
            />

            <View style={styles.cardbody}>
                <View style={styles.cardcol}>
                    <Text style={styles.pTitle}>{ title }</Text>
                </View>
                <View style={styles.cardcol}>
                    <View style={styles.cardcolLeft}>
                        <Text style={styles.p}>{ text }</Text>
                        <Image source={star} style={styles.estrela}></Image>
                        <Image source={star} style={styles.estrela}></Image>
                        <Image source={star} style={styles.estrela}></Image>
                        <Image source={star} style={styles.estrela}></Image>
                        <Image source={star} style={styles.estrela}></Image>
                    </View>
                </View>
            </View>

        </View>
    );
}

function CardDetailIngredientes({ ingredientes }) {
    return (
        <View style={styles.containerCdI}>
            {ingredientes.map((section, index) => (
                <View style={styles.bodyCdI} key={index}>
                <Text style={styles.titleIng}>{section.title}</Text>
                    <Text>{section.data}</Text>
                </View>
            ))}
        </View>
    );
}

export { CardHome, CardDetailIngredientes };

const larguraTela = Dimensions.get('window').width;
const alturaTela = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f1f1f1',
        width: 370,
        marginBottom: 20,
        borderRadius: 5,
        elevation: 2
    },

    pTitle:{
        fontWeight: 'bold',
        fontSize: 16
    },

    imagem:{
        width: 370,
        height: 200,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },
    cardbody:{
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    cardcol:{
        flex: 1,
        flexDirection: 'row'

    },
    estrela:{
        width: 20,
        height: 20,
    },
    cardcolLeft:{
        flex: 1,
        flexDirection: 'row',
        justifyContent:'flex-end'
    },
    containerCdI:{
        backgroundColor: '#f1f1f1',
        width: larguraTela * 0.9,
        marginBottom: 20,
        borderRadius: 5,
        elevation: 2
    },
    bodyCdI:{
        padding: '5%'
    },
    titleIng:{
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: '3%'
    },

});