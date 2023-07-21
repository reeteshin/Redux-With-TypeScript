import {
  Alert,
  Button,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ApiMiddlware} from '../Redux/Middleware';
import {AppDispatch, RootState} from '../Redux/Store';
import LoadingAimation from '../CommonComponents/LoadingAimation';
import NetworkError from '../CommonComponents/NetworkError';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../StackNavigation/StackNavigation';
import {useNetInfo} from '@react-native-community/netinfo';
import {Success} from '../Redux/Action';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const UserList = ({navigation}: NativeStackScreenProps<RootStackParamList>) => {
  //const navigation = useNavigation()
  const {Loading, User, Error} = useSelector(
    (Value: RootState) => Value.apireducer,
  );
  console.log('Orignal User', User.data?.length);
  const dispatch = useDispatch<AppDispatch>();
  //console.log('APi Call', Error);
  //Checks if all user deleted, reload the user from api Again
 // setReload(Check())
  //console.log('Checks', Check());
  //type NAL = NativeStackScreenProps<RootStackParamList, 'UserDetails'>;
  //console.log('Data', User);
  const InternetInfo = useNetInfo();
  console.log('Info', InternetInfo.isConnected);

  useEffect(() => {
    dispatch(ApiMiddlware());
  }, [(InternetInfo.isConnected) || (User.data?.length===0)   ]); 

  useEffect(() => {
    dispatch(ApiMiddlware());
  }, []);
  const handelAlert = (item: any) => {
    Alert.alert('Warn !!!', 'Do you want to delete this User ?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Nothing Will show'),
        style: 'cancel',
      
      },
      {text: 'OK', onPress: () => handelDelete(item)},
    ]);
  };

  const handelDelete = (item: any) => {
    if (item.id) {
      const filterItem = User.data.filter(
        (itemOfUser: any) => itemOfUser.id !== item.id,
      );
      // console.log('filterItem', {data: filterItem});
      // console.log('User', User);
      dispatch(Success({data: filterItem}));
    } else {
      dispatch(Success(User));
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: '#F7FFE5', paddingBottom: 5}}>
      {Loading ? (
        <LoadingAimation />
      ) : (
        <View>
          {Error !== '' ? (
            <NetworkError />
          ) : (
            <View>
              <FlatList
                data={User.data}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('UserDetails', {SingslUser: item})
                    }>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.mappedNameAndEmail}>
                        <Text style={{color: 'black'}}>{item.name}</Text>
                        <Text style={{color: 'black'}}>{item.email}</Text>
                      </View>
                      <TouchableOpacity
                        style={{marginTop: 40, marginRight: 20}}
                        onPress={() => handelAlert(item)}>
                        <Icon name="delete" size={24} color={'black'} />
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
              />
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default UserList;

const styles = StyleSheet.create({
  mappedNameAndEmail: {
    flex: 1,
    backgroundColor: '#CBFFA9',
    marginHorizontal: 20,
    marginTop: 20,
    padding: 5,
    paddingLeft: 10,
    justifyContent: 'space-evenly',
    height: 80,
    borderRadius: 4,
  },
});
