import React from 'react';
import {SafeAreaView, View, Image, TouchableOpacity, Text} from 'react-native';
import {IMAGE} from '../src/constants/image';
import {COLOR} from '../src/constants/color';

const CustomDrawer = props => {
  const {navigation} = props;
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View
          style={{height: 100, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={IMAGE.ICON_PROFILE} style={{width: 90, height: 90}} />
        </View>
        <TouchableOpacity
          style={{
            padding: 15,
            marginVertical: 1,
            borderBottomWidth: 0.5,
            borderTopWidth: 0.5,
            borderBottomColor: '#ccc',
            borderTopColor: '#ccc',
          }}
          onPress={() => navigation.navigate('Profile')}>
          <Text style={{fontSize: 16}}>Profile</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <View
          style={{
            backgroundColor: COLOR.PRIMARY,
            padding: 15,
            margin: 10,
            borderRadius: 5,
          }}>
          <Text style={{fontSize: 16}}>Logout</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CustomDrawer;
