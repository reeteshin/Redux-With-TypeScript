import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UserDetails from '../Components/UserDetails';
import UserList from '../Components/UserList';

export type RootStackParamList = {
  UserList: undefined;
  UserDetails: {SingslUser: object};
};

const StackNavigation: React.FC = () => {
  const stack = createStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="UserList">
        <stack.Screen
          name="UserList"
          component={UserList}
          options={{
            title: 'My Application',
            headerStyle: {
              backgroundColor: '#CBFFA9',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold'
            },
          }}
        />
        <stack.Screen name="UserDetails" component={UserDetails}   options={{
            title: 'User Details',
            headerStyle: {
              backgroundColor: '#CBFFA9',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold'
            },
          }}/>
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
