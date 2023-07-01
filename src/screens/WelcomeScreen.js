import React from "react";
import {View,Text,StyleSheet,StatusBar} from 'react-native';
import { Colors ,Images} from "../constants";
import { FlatList } from "react-native-gesture-handler";


const WelcomeScreen =()=>{
    return(
    <View style={styles.container}>
        <StatusBar 
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
        />
        <View style={styles.WelcomelistContainer}>
            <FlatList />
        </View>
    </View>
    );
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.DEFAULT_WHITE,
    },
});


export default WelcomeScreen;



