import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AnimatedLottieView from 'lottie-react-native';

const NetworkError = () => {
  const path = '../assets/NetworkError.json';
  return (
    <>
      <View style={styles.lottieViewStyle}>
        <AnimatedLottieView source={require(path)} autoPlay loop />
      </View>
      <Text style={styles.textStyle}>
        Please Turn On The Internet Conection
      </Text>
    </>
  );
};

export default NetworkError;

const styles = StyleSheet.create({
  lottieViewStyle: {
    height: '50%',
    width: '70%',
    marginTop: '40%',
    alignSelf: 'center',
    marginBottom: 40,
    flexDirection: 'column-reverse',
  },
  textStyle: {
    color: 'darkblue',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});
