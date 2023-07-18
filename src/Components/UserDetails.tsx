import {
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {RootStackParamList} from '../StackNavigation/StackNavigation';
import {RouteProp, useRoute} from '@react-navigation/native';

const UserDetails = () => {
  const route = useRoute<RouteProp<RootStackParamList>>();
  const [SingslUserData] = useState<any>([route.params?.SingslUser]);
  console.log('Route params', SingslUserData);
  // const latitude = "30.3753";
  // const longitude = "69.3451";
  const openGps = (latitude: string, longitude: string, label: string) => {
    var scheme = 'geo:';
    var url = `${scheme}:${latitude},${longitude}?q=${label}`;
    openExternalApp(url);
  };

  const openExternalApp = (url: string) => {
    Linking.canOpenURL(url)
      .then(supported => {
        console.log('error', supported);
        Linking.openURL(url);
      })
      .catch(error => {
        console.log('Error', error);
      });
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#F6FFDE'}}>
      {SingslUserData.map((item: any) => (
        <React.Fragment key={item.id}>
          <View style={styles.firstContainer}>
            <Text style={{textAlign: 'center', fontWeight: 'bold',color:"black"}}>
              {item.name}
            </Text>
            <Text style={{textAlign: 'center',color:'black'}}>{item.company.name}</Text>
          </View>
          {[item.address].map((addressObject: any) => (
            <View key={item.id} style={styles.secondContainer}>
              <Text style={{textAlign: 'center', fontWeight: 'bold',color:'black'}}>
                Contect Information
              </Text>
              <View style={{marginHorizontal: 20}}>
                <Text style={{marginTop: 10,color:'black'}}>{item.email}</Text>

                <TouchableOpacity
                  style={{marginTop: 10, width: '60%'}}
                  onPress={() =>
                    openGps(
                      addressObject.geo.lat,
                      addressObject.geo.lng,
                      addressObject.city,
                    )
                  }>
                  <Text style={{color:'black'}}>{addressObject.street}</Text>
                  <Text style={{color:'black'}}>{addressObject.suite}</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{color:'black'}}>{addressObject.city} </Text>
                    <Text style={{color:'black'}}>{addressObject.zipcode}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    marginTop: 10,
                    width: '35%',
                  }}
                  onPress={() => Linking.openURL(`tel:${item.phone}`)}>
                  <Text style={{color:'black'}}>{item.phone.split('x')[0]}</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
          <View style={styles.thirdContainer}>
            <View>
              <Text style={{textAlign: 'center', fontWeight: 'bold',color:"black"}}>
                Other Information
              </Text>
            </View>
            <Text style={{marginHorizontal: 20, marginTop: 15,color:'black'}}>
              User Name: {item.username}
            </Text>
            <TouchableOpacity
              onPress={() => Linking.openURL(`https://${item.website}`)}>
              <Text style={{marginHorizontal: 20,color:'black'}}>Website {item.website}</Text>
            </TouchableOpacity>
          </View>
        </React.Fragment>
      ))}
    </ScrollView>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  firstContainer: {
    backgroundColor: '#CBFFA9',
    height: 100,
    width: '100%',
    alignSelf: 'center',
    paddingTop: 25,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  secondContainer: {
    backgroundColor: '#CBFFA9',
    height: 200,
    width: '100%',
    marginTop: 10,
    paddingTop: 10,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  thirdContainer: {
    backgroundColor: '#CBFFA9',
    height: 200,
    width: '100%',
    marginTop: 20,
    paddingTop: 10,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});
