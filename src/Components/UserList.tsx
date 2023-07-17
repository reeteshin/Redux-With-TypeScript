import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ApiMiddlware} from '../Redux/Middleware';
import {AppDispatch, RootState} from '../Redux/Store';
import LoadingAimation from '../CommonComponents/LoadingAimation';
import NetworkError from '../CommonComponents/NetworkError';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../StackNavigation/StackNavigation';
const UserList = ({navigation}: NativeStackScreenProps<RootStackParamList>) => {
  //const navigation = useNavigation()
  const {Loading, User, Error} = useSelector(
    (Value: RootState) => Value.apireducer,
  );
  const dispatch = useDispatch<AppDispatch>();
  //console.log('APi Call', Error);
  //type NAL = NativeStackScreenProps<RootStackParamList, 'UserDetails'>;
  console.log('Data', User);

  useEffect(() => {
    dispatch(ApiMiddlware());
  }, []);

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
                    <View
                      style={styles.mappedNameAndEmail}>
                      <Text>{item.name}</Text>
                      <Text>{item.email}</Text>
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
  mappedNameAndEmail:{
    flex: 1,
    backgroundColor: '#CBFFA9',
    marginHorizontal: 20,
    marginTop: 20,
    padding: 5,
    paddingLeft: 10,
    justifyContent: 'space-evenly',
    height: 80,
    borderRadius: 4,
  }
});
