import React from 'react';
import {SafeAreaView, View, TouchableOpacity, Text} from 'react-native';
import CustomHeader from '../CustomHeader';

const RegisterScreen = props => {
  const {navigation} = props;
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Register" navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={{padding: 10, backgroundColor: 'skyblue', borderRadius: 3}}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
