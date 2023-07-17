import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import UserDetails from './src/Components/UserDetails';
import {Provider} from 'react-redux';
import {store} from './src/Redux/Store';
import StackNavigation from './src/StackNavigation/StackNavigation';
const App = () => {
  return (
    <Provider store={store}>
      <StackNavigation />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
