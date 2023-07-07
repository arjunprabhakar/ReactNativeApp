import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import { SplashScreen,WelcomeScreen,SigninScreen,OtpScreen,StudentDetails,SchoolDetails,Home } from "../screens";

const Stack=createStackNavigator()
const Navigators=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="splash" component={SplashScreen}/>
                <Stack.Screen name="signin" component={SigninScreen}/>
                <Stack.Screen name="OtpScreen" component={OtpScreen}/>
                <Stack.Screen name="StudentDetails" component={StudentDetails}/>
                <Stack.Screen name="SchoolDetails" component={SchoolDetails}/>
                <Stack.Screen name="welcome" component={WelcomeScreen}/>
                <Stack.Screen name="Home" component={Home}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigators;