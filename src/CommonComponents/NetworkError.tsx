import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AnimatedLottieView from 'lottie-react-native';

const NetworkError = () => {
  const path = '../assets/NetworkError.json';
  return (
    <View
      style={{height: 250, width: 300, marginTop: '50%', alignSelf: 'center'}}>
      <AnimatedLottieView source={require(path)} autoPlay loop />
    </View>
  );
};

export default NetworkError;

const styles = StyleSheet.create({});
