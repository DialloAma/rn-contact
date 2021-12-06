import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Home from './Screens/Home';
import Started from './Screens/Started';
import Signin from './Screens/SignIn';
import Signup from './Screens/SignUp';

const stack =createStackNavigator()
const Navigator = () => {
    return (
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen options={{headerShown:false}} name="Home" component={Home}/>
                <stack.Screen options={{headerShown:false}} name="Start" component={Started}/>
                <stack.Screen options={{ headerStyle:{backgroundColor:"red"},headerTintColor:"white",headerTitleAlign:"center",headerTitle:"SIGN IN"}} name="SignIn" component={Signin}/>
                <stack.Screen options={{ headerStyle:{backgroundColor:"red"},headerTintColor:"white",headerTitleAlign:"center",headerTitle:"REGISTER"}}  name="SignUp" component={Signup}/>
            </stack.Navigator>
            
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({})

export default Navigator;
