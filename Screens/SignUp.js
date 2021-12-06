import React from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';

const Signup = () => {
    return (
        <View style={{flex:1}}>
            <View style={{flex:0.5}}>

            </View>
            <View style={{flex:1,marginHorizontal:15}}>
                 <View style={{flexDirection:"row",alignItems:"center",borderBottomWidth:1,borderColor:"lightgray",marginVertical:10}}>
                   <Text style={{fontSize:25}}>Full Name :  </Text>
                   <TextInput style={{fontSize:20}}  placeholder="Full Name" />
                </View>
                <View style={{flexDirection:"row",alignItems:"center",borderBottomWidth:1,borderColor:"lightgray",marginVertical:10}}>
                   <Text style={{fontSize:25}}>Email :  </Text>
                   <TextInput style={{fontSize:20}}  placeholder="ama@mail.com" />
                </View>
                <View style={{flexDirection:"row",alignItems:"center",borderBottomWidth:1,borderColor:"lightgray",marginVertical:10}}>
                   <Text style={{fontSize:25}}>Phone Number :  </Text>
                   <TextInput style={{fontSize:20}}  placeholder="Phone Number" />
                </View>
                <View style={{flexDirection:"row",alignItems:"center",borderBottomWidth:1,borderColor:"lightgray",marginVertical:10}}>
                   <Text style={{fontSize:25}}>Role :  </Text>
                   <TextInput style={{fontSize:20}}  placeholder="Funtion" />
                </View>
                <View style={{flexDirection:"row",alignItems:"center",borderBottomWidth:1,borderColor:"lightgray",marginVertical:10}}>
                   <Text style={{fontSize:25}}>Twitter:  </Text>
                   <TextInput style={{fontSize:20}}  placeholder="Twitter" />
                </View>
                <View style={{flexDirection:"row",alignItems:"center",borderBottomWidth:1,borderColor:"lightgray",marginVertical:10}}>
                   <Text style={{fontSize:25}}>Linkedln :  </Text>
                   <TextInput style={{fontSize:20}}  placeholder="Linkedln" />
                </View>
                <TouchableOpacity style={{backgroundColor:"red",padding:10,marginTop:20,borderRadius:10}} activeOpacity={0.5}>
                  <Text style={{textAlign:"center",color:"white",fontSize:20}}>REGISTER</Text>
              </TouchableOpacity>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({})

export default Signup;
