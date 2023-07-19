import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AnimatedLottieView from 'lottie-react-native';

const NetworkError = () => {
  const path = '../assets/NetworkError.json';
  return (
    <>
    <View
      style={{height: "50%",width:"70%", marginTop: '40%', alignSelf: 'center',marginBottom:40,flexDirection:'column-reverse'}}>
      <AnimatedLottieView source={require(path)} autoPlay loop />

    </View>
      <Text style={{color:'darkblue',fontWeight:'bold',textAlign:'center',marginTop:20}}>Please Turn On The Internet Conection</Text>
        </>
  );
};

export default NetworkError;

const styles = StyleSheet.create({});
