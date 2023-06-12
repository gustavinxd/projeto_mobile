import react from "react";
import { Text, View, Image, StyleSheet } from 'react-native';

function Card({ title, text, img }) {
    return (
        <View style={styles.container}>
            {/* <View style={styles.imgContainer}> */}
                {/* Imagem */}
                <Image style={styles.imagem}
                source= { img }
                />
            {/* </View> */}
            <Text style={[styles.p, styles.pTitle]}>{ title }</Text>
            <Text style={styles.p}>{ text }</Text>

        </View>
    );
}
export default Card;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f1f1f1',
        width: 370,
        marginBottom: 20,
        padding: 15,
        borderRadius: 5,
    },

    p: {
        textAlign: 'center'
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
        width: 340,
        height: 200
    },

    link: {
        color: '#00f',
        textDecorationLine: 'underline'
    }
});