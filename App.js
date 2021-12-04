import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import Started from './Screens/Started';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
       <StatusBar style="auto" />
     <Started/>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor: '#fff',
  
  },
});
