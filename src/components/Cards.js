import React from "react";
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import star from '../img/star.png';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
// import { FontAwesome } from '@expo/vector-icons';

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
                <View style={styles.bodyCdIm} key={index}>
                    <Text style={styles.titleIng}>{section.title}</Text>
                </View>
            ))}
            <View style={styles.bodyCdImp}> 
                {ingredientes.map((section, index) => (
                    <View key={index}>
                        <Text style={styles.dataIng}>{section.data.join("\n")}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

function CardDetailIngredientesHeader({ ingTempo, ingDif }) {
    return (
        <View style={styles.containerCdIh}>
            <View style={styles.bodyCdIh}>
                <MaterialCommunityIcons name="timelapse" size={24} color="black" />
                <Text style={styles.titleIngH}>{ingTempo}</Text>
            </View>
            <View style={styles.bodyCdIh}>
                <MaterialCommunityIcons name="chef-hat" size={24} color="black" /> 
                <Text style={styles.titleIngH}>{ingDif}</Text>  
            </View> 
        </View>
    );
}

// function CardDetailIngredientesModo({ ingredientes }) {
//     return (
//         <View style={styles.containerCdI}>
//             {ingredientes.map((section, index) => (
//                 <View style={styles.bodyCdI} key={index}>
//                     <Text style={styles.titleIng}>{section.title}</Text>
//                     <Text style={styles.dataIng}>{section.data.join("\n")}</Text>
//                 </View>
//             ))}
//         </View>
//     );
// }


export { CardHome, CardDetailIngredientes, CardDetailIngredientesHeader };

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
        elevation: 2,
        gap: 10,
        padding: '3%'
    },
    containerCdIh:{
        flex: 1,
        backgroundColor: '#f1f1f1',
        width: larguraTela * 0.9,
        marginBottom: '5%',
        padding: '3%',
        borderRadius: 5,
        elevation: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 15
    
    },
    bodyCdIh:{
        flexDirection: 'row',
        padding: 5,
        
    },
    bodyCdI:{
        flex: 1,
        padding: '5%',
    },
    bodyCdIm:{
        flex: 1,
        padding: '5%',
        backgroundColor: '#fff',
        borderRadius: 5
    },

    bodyCdImp:{
        flex: 1,
        padding: '5%',
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    bodyCdIh:{
        flex: 1,
        paddingVertical: '3%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 15,
    },
    titleIng:{
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },

    titleIngH:{
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        
    },
    dataIng:{
        fontSize: 16, 
        marginBottom: '3%',
    },
    ingRows:{
        flex: 1,
        flexDirection: 'row'
    },

});