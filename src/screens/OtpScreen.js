import React,{useRef, useState} from "react";
import {View,Text,StyleSheet,StatusBar,Image,TouchableOpacity} from 'react-native';
import { Colors ,Images} from "../constants";
import { Display } from "../utils";

//package for icons
import IonIcons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import { TextInput } from "react-native-gesture-handler";





const OtpScreen =({route:{params: {phoneNumber}}})=>{

    const firstInput=useRef()
    const secondInput=useRef()
    const thirdInput=useRef()
    const fourthInput=useRef()
    const fifthInput=useRef()
    return(
    <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={Colors.DEFAULT_GREEN} translucent/>
         <Image 
        style={styles.image}
        source={Images.LOGO}
        />
        <Text style={styles.titleText1}>Verification Code </Text>
        <Text style={styles.titleText2}>Please type the verification code send to</Text>
        <Text style={styles.titleText3}>+91 {phoneNumber}</Text>
        <View style={styles.mobilecontainer}>
            <View style={styles.inputWrap}>
            <TextInput style={styles.textMobileCode} 
                    ref={firstInput} maxLength={1} 
                    keyboardType="number-pad" 
                    placeholderTextColor="#fff"
                    onChangeText={(text)=>{
                        text && secondInput.current.focus()
                    }}/>
            <TextInput style={styles.textMobileCode} 
                    ref={secondInput}maxLength={1} 
                    keyboardType="number-pad" 
                    placeholderTextColor="#fff"
                    onChangeText={(text)=>{
                        text && thirdInput.current.focus()
                    }}/>
            <TextInput style={styles.textMobileCode} 
                    ref={thirdInput} maxLength={1} 
                    keyboardType="number-pad" 
                    placeholderTextColor="#fff"
                    onChangeText={(text)=>{
                        text && fourthInput.current.focus()
                    }}/>
            <TextInput style={styles.textMobileCode} 
                    ref={fourthInput} maxLength={1} 
                    keyboardType="number-pad" 
                    placeholderTextColor="#fff"
                    onChangeText={(text)=>{
                        text && fifthInput.current.focus()
                    }}/>
            <TextInput style={styles.textMobileCode} 
                    ref={fifthInput} maxLength={1} 
                    keyboardType="number-pad" 
                    placeholderTextColor="#fff"/>
            </View>

            <TouchableOpacity style={styles.button} activeOpacity={0.8} >
                <Text style={styles.buttonText}>Verify</Text>
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
    },
    titleText1:{
        fontSize:20,
        fontWeight:'bold',
    },
    titleText2:{
        fontSize:13,
        color:Colors.DEFAULT_GREY,
    },
    mobilecontainer:{
        backgroundColor:Colors.DEFAULT_BLACK,
        height:Display.setHeight(40),
        width:Display.setWidth(100),
        marginTop:100,
        marginBottom:-270,
        borderRadius:30,
        alignItems:'center',
    },
  
    textMobileCode:{
        backgroundColor:'#565956',
        width:Display.setWidth(15),
        height:Display.setHeight(6),
        marginLeft:2,
        borderRadius:8,
        textAlign:'center',
        marginRight:10,
        fontSize:25,
        color:'#fff',
        fontWeight:'bold'
        },
    inputWrap:{
        flexDirection: "row",
        marginTop:70,
    },
    button:{
        backgroundColor:'#31CA34',
        paddingVertical:20,
        paddingHorizontal:11,
        borderRadius:8,
        width:Display.setWidth(88),
        height:Display.setHeight(7),
        marginTop:40,
    },
    buttonText:{
        color:'#fff',
        textAlign:'center',
        fontSize:19,
        fontWeight:'bold'
    },
    titleText3:{
        marginBottom:-50,
        marginTop:15,
        fontSize:15
    },
})


export default OtpScreen;



