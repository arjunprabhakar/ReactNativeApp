import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import { SplashScreen,WelcomeScreen,SigninScreen,OtpScreen } from "../screens";

const Stack=createStackNavigator()
const Navigators=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="splash" component={SplashScreen}/>
                <Stack.Screen name="welcome" component={WelcomeScreen}/>
                <Stack.Screen name="signin" component={SigninScreen}/>
                <Stack.Screen name="OtpScreen" component={OtpScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigators;