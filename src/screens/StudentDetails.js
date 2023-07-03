import React,{useEffect, useState} from "react";
import {View,Text,StyleSheet,StatusBar,Image,TouchableOpacity } from 'react-native';
import { Colors ,Images} from "../constants";
import { Display } from "../utils";

//package for icons
import IonIcons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import { TextInput } from "react-native-gesture-handler";





const StudentDetails =({navigation})=>{
const [phoneNumber,setPhoneNumber]=useState("");
const [selectedValue, setSelectedValue] = useState(null);
    return(
    <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={Colors.DEFAULT_GREEN} translucent/>
         <Image 
        style={styles.image}
        source={Images.LOGO}
        />
        <Text style={styles.titleText1}>Inmakes Learning Hub</Text>
        <Text style={styles.titleText2}>We will send you an OTP to verify</Text>
        <View style={styles.mobilecontainer}>
            <TextInput style={styles.textMobile} placeholder="Full name" 
                       placeholderTextColor="#fff"
                       marginTop={40}
                       maxLength={10}/>
             <TextInput style={styles.textMobile} placeholder="Email" 
                       placeholderTextColor="#fff"
                       maxLength={10}/>
        
            


             <TextInput style={styles.textMobile} placeholder="Pin code" 
                       keyboardType="number-pad"
                       placeholderTextColor="#fff"
                       maxLength={10}/>
            <TouchableOpacity style={styles.button} activeOpacity={0.8} 
                                onPress={()=>navigation.navigate('OtpScreen',{phoneNumber})}>
                <Text style={styles.buttonText}>Continue</Text>
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
        height:Display.setHeight(69),
        width:Display.setWidth(100),
        marginTop:100,
        marginBottom:-270,
        borderRadius:30,
        alignItems:'center',
    },
    textMobile:{
        backgroundColor:'#565956',
        width:Display.setWidth(90),
        height:Display.setHeight(6),
        borderRadius:8,
        color:'#fff',
        fontSize:15,
        marginBottom:10
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
    }
});


export default StudentDetails;



