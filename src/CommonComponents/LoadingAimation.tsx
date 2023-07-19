import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AnimatedLottieView from 'lottie-react-native';

const LoadingAimation = () => {
  const path = '../assets/LoadingAnimation.json';

  return (
    <View style={styles.LoadingAimationStyle}>
      <AnimatedLottieView source={require(path)} autoPlay loop />
    </View>
  );
};

export default LoadingAimation;

const styles = StyleSheet.create({
  LoadingAimationStyle: {
    height: 250,
    width: 300,
    marginTop: '50%',
    alignSelf: 'center',
  },
});
