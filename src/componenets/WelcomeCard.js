import React from "react";
import {View,Text,StyleSheet,Image} from 'react-native';
import { Colors ,General, Images} from "../constants";
import { Display } from "../utils";

const WelcomeCard =({title,content,image})=>{
    return(
    <View style={styles.container}>
    <Image style={styles.image} source={Images[image]} resizeMode="contain"/>
    <Text style={styles.titleText}>{title}</Text>
    <Text style={styles.contentText}>{content}</Text>
    </View>
    );
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.DEFAULT_WHITE,
        width:Display.setWidth(100),
    },
    image:{
        height:Display.setHeight(15),
        width:Display.setWidth(65),
    },
    titleText:{
        fontSize:22,
        fontWeight:"bold",
    },
    contentText:{
        fontSize:18,
        textAlign:'center',
        marginHorizontal:20,


    },
});


export default WelcomeCard;



