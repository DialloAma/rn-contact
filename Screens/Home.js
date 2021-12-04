import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

const Home = () => {
  return (
    <View style={{ alignItems: "center",backgroundColor:"#eee",flex:1 }}>
      <View >
        <Image
          style={{
            width: 300,
            height: 100,
            resizeMode: "contain",
            marginTop: 100,
          }}
          source={require("../assets/ampersand.png")}
        />
      </View>
      <View style={{marginTop:200}}>
        <Text style={{fontSize:20}}>AMPERSAND</Text>
        <Text style={{fontSize:20,marginLeft:10}}>CONTACTS</Text>
      </View>
      <View style={{ marginTop:200}}>
          <TouchableOpacity>
          <Text style={{borderBottomWidth:2,borderColor:"red",fontWeight:"bold"}}>GET STARTED</Text>
          </TouchableOpacity>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
