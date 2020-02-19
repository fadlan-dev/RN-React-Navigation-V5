import * as React from 'react';
import {Image, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import CustomDrawer from './src/CustomDrawer';
import HomeScreen from './src/tab/HomeScreen';
import HomeScreenDetail from './src/tab/HomeScreenDetail';
import SettingsScreen from './src/tab/SettingsScreen';
import SettingScreenDetail from './src/tab/SettingScreenDetail';

import ProfileScreen from './src/drawer/ProfileScreen';
import LoginScreen from './src/auth/LoginScreen';
import RegisterScreen from './src/auth/RegisterScreen';
import {IMAGE} from './src/constants/image';

const Tab = createBottomTabNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

const StackHome = createStackNavigator();
const HomeStack = () => {
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen
        name="Home"
        component={HomeScreen}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name="HomeDetail"
        component={HomeScreenDetail}
        options={navOptionHandler}
      />
    </StackHome.Navigator>
  );
};

const StackStting = createStackNavigator();
const SettingStack = () => {
  return (
    <StackStting.Navigator initialRouteName="Setting">
      <StackStting.Screen
        name="Setting"
        component={SettingsScreen}
        options={navOptionHandler}
      />
      <StackStting.Screen
        name="SettingDetail"
        component={SettingScreenDetail}
        options={navOptionHandler}
      />
    </StackStting.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? IMAGE.ICON_HOME : IMAGE.ICON_HOME_OUTLINE;
          } else if (route.name === 'Setting') {
            iconName = focused
              ? IMAGE.ICON_SETTING
              : IMAGE.ICON_SETTING_OUTLINE;
          }

          // You can return any component that you like here!
          return (
            <Image
              source={iconName}
              style={{width: 22, height: 22}}
              resizeMode="contain"
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'skyblue',
        inactiveTintColor: '#ccc',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={navOptionHandler}
      />
      <Tab.Screen
        name="Setting"
        component={SettingStack}
        options={navOptionHandler}
      />
    </Tab.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="MenuTab"
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="MenuTab" component={TabNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

const StackApp = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="Login">
        <StackApp.Screen
          name="HomeApp"
          component={DrawerNavigator}
          options={navOptionHandler}
        />
        <StackApp.Screen
          name="Login"
          component={LoginScreen}
          options={navOptionHandler}
        />
        <StackApp.Screen
          name="Register"
          component={RegisterScreen}
          options={navOptionHandler}
        />
      </StackApp.Navigator>
    </NavigationContainer>
  );
}
