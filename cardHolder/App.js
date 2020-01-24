import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './pages/login.js'



export default function App() {
  return (
    <View >
           <Login></Login>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6DADA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
