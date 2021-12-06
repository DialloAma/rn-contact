import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

const Started = ({navigation}) => {
    return (
        <View >
            <Image style={{height:400}} source={require("../assets/start.png")}/>
            <View style={{marginTop:50,marginHorizontal:20}}>
                <Text style={{fontSize:20,fontWeight:"bold"}}>KEEP IN TOUCH WITH THE PEOPLE AMPERSAND </Text>
                <Text style={{fontStyle:"italic"}}> Sign in or register with your ampersand email</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:25,marginTop:150}}>
                <View>
                    <TouchableOpacity onPress={()=>navigation.navigate("SignUp")}>
                     <Text style={{borderBottomWidth:2,borderColor:"red"}}>REGISTER</Text>
                    </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity onPress={()=>navigation.navigate("SignIn")}>
                <Text style={{borderBottomWidth:2,borderColor:"red"}}>SIGN IN</Text>
                        </TouchableOpacity>
                </View>
            </View>
           
           
        </View>
    );
}

const styles = StyleSheet.create({})

export default Started;
