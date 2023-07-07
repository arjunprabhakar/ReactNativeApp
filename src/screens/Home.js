import React,{useRef, useState} from "react";
import {View,Text,StyleSheet,StatusBar,Image,TouchableOpacity} from 'react-native';
import { Colors ,Images} from "../constants";
import { Display } from "../utils";







const Home =({navigation})=>{


    //for set the each input field for one single otp 
   
    return(
    <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={Colors.DEFAULT_GREEN} translucent/>
        <Text>Home</Text>
    </View>
    );
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
})


export default Home;



