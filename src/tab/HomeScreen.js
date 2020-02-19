import React from 'react';
import {SafeAreaView, View, TouchableOpacity, Text} from 'react-native';
import CustomHeader from '../CustomHeader';
import {COLOR} from '../constants/color';

const HomeScreen = props => {
  const {navigation} = props;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLOR.PRIMARY}}>
      <CustomHeader isHome navigation={navigation} title="Home" />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeDetail')}
          style={{
            padding: 10,
            backgroundColor: COLOR.PRIMARY,
            borderRadius: 3,
          }}>
          <Text>Home Detail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
