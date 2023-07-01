import React from "react";
import {View,Text,StyleSheet,StatusBar, TouchableOpacity} from 'react-native';
import { Colors ,General} from "../constants";
import { FlatList } from "react-native-gesture-handler";
import { WelcomeCard } from "../componenets";
import { Display } from "../utils";


const Pagination = () =>{
    return(
        <View style={styles.pageContainer}>
            <View style={styles.page}/>
            <View style={styles.page}/>
            <View style={styles.page}/>
        </View>
    )
}


const WelcomeScreen =()=>{
    return(
    <View style={styles.container}>
        <StatusBar 
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
        />
        <View style={styles.WelcomelistContainer}>
            <FlatList 
            data={General.WELCOME_CONTENTS}
            keyExtractor={item => item.title}
            horizontal
            pagingEnabled
            overScrollMode="never"
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <WelcomeCard {...item} />}
            />
        </View>
        
        <Pagination/>

        <View>
            <TouchableOpacity>
                <Text>SKIP</Text>
            </TouchableOpacity>
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
    WelcomelistContainer:{
        height:Display.setHeight(60),
    },
    pageContainer:{
        flexDirection:'row',

    },
    page:{
        height:8,
        width:15,
        backgroundColor:Colors.DEFAULT_GREEN,
        borderRadius:32,
        marginHorizontal:5,
    },
});


export default WelcomeScreen;



