import React from 'react';
import {View, StyleSheet, Image, TextInput, Text, TouchableOpacity} from 'react-native';

const Signin = () => {
    return (
        <View >
            
              <Image source={require("../assets/sig.png")} style={{width:500,height:400}}  />
            
            <View style={{marginHorizontal:30,marginTop:30}}>
               <View style={{flexDirection:"row",alignItems:"center",borderBottomWidth:1,borderColor:"lightgray",marginVertical:30}}>
                   <Text style={{fontSize:25}}>Email :  </Text>
                   <TextInput style={{fontSize:20}}  placeholder="ama@mail.com" />
              </View> 
              <View style={{flexDirection:"row",alignItems:"center",borderBottomWidth:1,borderColor:"lightgray"}}>
                   <Text style={{fontSize:25}}>Password :  </Text>
                   <TextInput style={{fontSize:20}}  placeholder="**********" secureTextEntry />
              </View>
              <TouchableOpacity style={{backgroundColor:"red",padding:10,marginTop:20,borderRadius:10}} activeOpacity={0.5}>
                  <Text style={{textAlign:"center",color:"white",fontSize:20}}>SIGN IN</Text>
              </TouchableOpacity>
              <View style={{flexDirection:"row",marginTop:10}}>
                  <Text>Forgot? </Text>
                  <TouchableOpacity activeOpacity={0.5}>
                  <Text style={{borderBottomWidth:1,borderColor:"red"}}>Reset Password</Text>
                  </TouchableOpacity>
                  
              </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Signin;
