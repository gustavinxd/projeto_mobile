import react from "react";
import { Text, View, Image, StyleSheet, Linking} from 'react-native';

function Card({ title, text, link, img }) {
    return (
        <View style={styles.container}>
            <Text style={[styles.p, styles.pTitle]}>{ title }</Text>
            <Text style={styles.p}>{ text }</Text>

            <View style={styles.imgContainer}>
                {/* Imagem */}
                <Image style={styles.imagem}
                source= { img }
                />
            </View>

            {/* Link */}
            <Text style= {[styles.link , styles.p]}
            onPress={() => {
              Linking.openURL( link );
            }}>Site {title}</Text>

        </View>
    );
}
export default Card;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f1f1f1',
        width: 370,
        height: 250,
        marginBottom: 20,
        padding: 15,
        borderRadius: 5
    },

    p: {
        textAlign: 'center'
    },

    pTitle:{
        fontWeight: 'bold',
        fontSize: 16
    },

    imgContainer:{
        flex: 1,
        alignItems:'center',
        marginTop: 35,
    },

    imagem:{
        width: 70,
        height: 70
    },

    link: {
        color: '#00f',
        textDecorationLine: 'underline'
    }
});