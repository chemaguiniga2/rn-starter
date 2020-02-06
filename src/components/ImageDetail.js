import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';

const ImageDetail = ({ imageSource, title, score }) => {

  return <View>
    <Image source={imageSource} />
    <Text>{title}</Text>
    <Text>{score}</Text>
  </View>
};

const styles = StyleSheet.create({ });

export default ImageDetail;