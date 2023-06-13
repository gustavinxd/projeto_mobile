import react from "react";
import { Text, View, Image, StyleSheet } from 'react-native';
import star from '../img/star.png'

function Card({ title, text, img }) {
    return (
        <View style={styles.container}>
            <Image style={styles.imagem}
            source= { img }
            />

            <View style={styles.cardbody}>
                <View style={styles.cardcol}>
                    <Text style={[styles.pTitle]}>{ title }</Text>
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

export default Card;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f1f1f1',
        width: 370,
        marginBottom: 20,
        borderRadius: 5,
        elevation: 2
    },

    p: {

    },

    pTitle:{
        fontWeight: 'bold',
        fontSize: 16
    },

    imgContainer:{
        alignItems:'center',
        justifyContent: 'center',
    },

    imagem:{
        width: 370,
        height: 200,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },

    link: {
        color: '#00f',
        textDecorationLine: 'underline'
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
    }
});