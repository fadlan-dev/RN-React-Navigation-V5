import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Dimensions,
  Image,
} from 'react-native';
import {IMAGE} from '../constants/image';
import {COLOR} from '../constants/color';

const deviceWidth = Dimensions.get('window').width;

const LoginScreen = props => {
  const {navigation} = props;
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View>
          <View
            style={{
              padding: 10,
              height: 250,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={IMAGE.ICON_LOGO}
              style={{width: 200, height: 200}}
              resizeMode="contain"
            />
          </View>
          <View style={{marginBottom: 10}}>
            <TextInput
              style={{
                fontSize: 20,
                color: COLOR.BLACK,
                height: 40,
                width: deviceWidth - 20,
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderColor: COLOR.SMOKE,
                borderWidth: 1,
                borderRadius: 3,
              }}
            />
          </View>
          <View style={{marginBottom: 10}}>
            <TextInput
              style={{
                fontSize: 20,
                color: COLOR.BLACK,
                height: 35,
                width: deviceWidth - 20,
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderColor: COLOR.SMOKE,
                borderWidth: 1,
                borderRadius: 3,
              }}
            />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('HomeApp')}
            style={{
              padding: 10,
              backgroundColor: 'skyblue',
              borderRadius: 3,
              width: deviceWidth - 20,
            }}>
            <Text style={{textAlign: 'center', fontSize: 18}}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text
              style={{
                color: '#61dafb',
                textAlign: 'right',
                paddingVertical: 10,
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
