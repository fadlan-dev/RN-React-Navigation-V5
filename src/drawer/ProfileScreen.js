import React from 'react';
import {SafeAreaView, View, Button, Image} from 'react-native';
import CustomHeader from '../CustomHeader';
import {IMAGE} from '../constants/image';
import {COLOR} from '../constants/color';

const ProfileScreen = props => {
  const {navigation} = props;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLOR.PRIMARY}}>
      <CustomHeader navigation={navigation} title="Profile" />
      <View
        style={{
          flex: 1,
          backgroundColor: COLOR.WHITE,
        }}>
        <View
          style={{
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10,
          }}>
          <Image source={IMAGE.ICON_PROFILE} style={{width: 90, height: 90}} />
        </View>
        {/* <Button onPress={() => navigation.goBack()} title="Go back home" /> */}
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
