import React,{useEffect} from "react";
import {View,Text,StyleSheet,StatusBar,Image} from 'react-native';
import { Colors ,Images} from "../constants";
import { Display } from "../utils";



const SigninScreen =()=>{
    return(
    <View style={styles.container}>
    
        <Text style={styles.titleText}>Login</Text>
    </View>
    );
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
   
    
});


export default SigninScreen;



