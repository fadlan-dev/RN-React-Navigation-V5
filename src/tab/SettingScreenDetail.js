import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import CustomHeader from '../CustomHeader';
import {COLOR} from '../constants/color';

const SettingScreenDetail = props => {
  const {navigation} = props;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLOR.PRIMARY}}>
      <CustomHeader navigation={navigation} title="Setting Detail Screen" />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: COLOR.WHITE,
        }}>
        <Text>Setting Detail Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default SettingScreenDetail;
