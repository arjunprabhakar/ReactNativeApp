import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import { SplashScreen,WelcomeScreen } from "../screens";

const Stack=createStackNavigator()
const Navigators=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="welcome" component={WelcomeScreen}/>
                <Stack.Screen name="splash" component={SplashScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigators;