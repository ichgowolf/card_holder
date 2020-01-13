import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header.js'


export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
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
