import React from 'react';
import {View, TouchableOpacity, Image, Text, StatusBar} from 'react-native';
import {IMAGE} from '../src/constants/image';
import {COLOR} from './constants/color';

const CustomHeader = ({title, isHome = false, navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
        backgroundColor: COLOR.PRIMARY,
      }}>
      <StatusBar backgroundColor={COLOR.PRIMARY} barStyle="dark-content" />
      {isHome ? (
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <Image
            style={{width: 25, height: 25, marginLeft: 10}}
            source={IMAGE.ICON_MENU}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => !isHome && navigation.goBack()}
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <Image
            style={{width: 20, height: 20, marginLeft: 10}}
            source={IMAGE.ICON_BACK}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
      <View
        style={{
          flex: 4,
          justifyContent: 'center',
        }}>
        <Text style={{textAlign: 'center', fontSize: 20}}>{title}</Text>
      </View>
      <View style={{flex: 1}}></View>
    </View>
  );
};

export default CustomHeader;
