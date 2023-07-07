import React,{useState,useRef} from "react";
import {View,Text,StyleSheet,StatusBar, TouchableOpacity} from 'react-native';
import { Colors ,General} from "../constants";
import { FlatList } from "react-native-gesture-handler";
import { Separator, WelcomeCard } from "../componenets";
import { Display } from "../utils";


//function for pagination color change
const pageStyle = isActive =>
    isActive
     ?
     styles.page:{...styles.page,backgroundColor:Colors.DEFAULT_GREY}




// function for pagination
const Pagination = ({index}) =>{
    return(
        <View style={styles.pageContainer}>
            {[...Array(General.WELCOME_CONTENTS.length).keys()].map((_,i) => 
            i === index ? (
             <View style={pageStyle(true)} key={i}/>
             ):(
             <View style={pageStyle(false)} key={i}/>
             ),
            )}
        </View>
    );
};


const WelcomeScreen =({navigation})=>{

    //variables for page sliding
    const [welcomeListIndex,setWelcomeListIndex]=useState(0)
    const welcomeList=useRef();
    const onViewRef =useRef(({changed}) =>{
        setWelcomeListIndex(changed[0].index);
    });
    const ViewConfigRef=useRef({viewAreaCoveragePercentThreshold: 50});


    // function for next page
    const pageScroll= () =>{
        welcomeList.current.scrollToIndex({
            index:welcomeListIndex < 2 ? welcomeListIndex + 1:  welcomeListIndex,
        })
    }

    return(
    <View style={styles.container}>
        <StatusBar 
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
        />
        <View style={styles.WelcomelistContainer}>
            <FlatList 
            ref={welcomeList}
            data={General.WELCOME_CONTENTS}
            keyExtractor={item => item.title}
            horizontal
            pagingEnabled
            overScrollMode="never"
            viewabilityConfig={ViewConfigRef.current}
            onViewableItemsChanged={onViewRef.current}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <WelcomeCard {...item} />}
            />
        </View>
        <Separator height={Display.setHeight(1)}/>
        <Pagination index={welcomeListIndex}/>
        <Separator height={Display.setHeight(10)}/>



        {welcomeListIndex === 2 ? (
            <TouchableOpacity style={styles.gettingStartButton} activeOpacity={0.8} onPress={()=>navigation.navigate('Home')}>
                <Text style={styles.gettingStartText}>Get Started</Text>
            </TouchableOpacity>
        ): (
        <View style={styles.buttonContainer}>
            <TouchableOpacity activeOpacity={0.8}  onPressIn={() => welcomeList.current.scrollToEnd()}>
                <Text style={styles.buttonText}>SKIP</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => pageScroll()}>
                <Text style={styles.buttonText}>NEXT</Text>
            </TouchableOpacity>
        </View>
        )}

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
        backgroundColor:'#31CA34',
        borderRadius:32,
        marginHorizontal:5,
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:Display.setWidth(90),
        alignItems:'center',
    },
    buttonText:{
        fontSize:16,
        lineHeight:16 * 1.4,
        fontWeight:'bold',
    },
    button:{
        backgroundColor:'#31CA34',
        paddingVertical:20,
        paddingHorizontal:11,
        borderRadius:32,
    },
    gettingStartButton:{
        backgroundColor:'#31CA34',
        paddingVertical:9,
        paddingHorizontal:30,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        elevation:2,
    },
    gettingStartText:{
        fontSize:16,
        color:Colors.DEFAULT_WHITE,
    }

});

export default WelcomeScreen;



