import React,{useEffect} from "react";
import {View,Text,StyleSheet,StatusBar,Image} from 'react-native';
import { Colors ,Images} from "../constants";
import { Display } from "../utils";



const SplashScreen =({navigation})=>{

    useEffect(() =>{
        setTimeout(()=>{
            navigation.navigate('welcome');
        },3000)
    })

    return(
    <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={Colors.DEFAULT_GREEN} translucent/>
        <Image 
        style={styles.image}
        source={Images.LOGO}
        />
        <Text style={styles.titleText}>Inmakes Learning Hub</Text>
    </View>
    );
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
   
    titleText:{
        color:Colors.DEFAULT_BLACK,
        fontSize:22,
    }
});


export default SplashScreen;



