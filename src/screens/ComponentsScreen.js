import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {

  const greeting = 'Chema!';

  return (
    <View>
      <Text style={styles.headStyle}>Getting started with React Native!</Text>
      <Text style={styles.nameStyle}>My name is {greeting}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headStyle: {
    fontSize: 45  
  },
  nameStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;