import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import CustomHeader from '../CustomHeader';
import {COLOR} from '../constants/color';

const SettingsScreen = props => {
  const {navigation} = props;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLOR.PRIMARY}}>
      <CustomHeader isHome navigation={navigation} title="Setting" />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: COLOR.WHITE,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SettingDetail')}
          style={{
            padding: 10,
            backgroundColor: COLOR.PRIMARY,
            borderRadius: 3,
          }}>
          <Text>Setting Detail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
