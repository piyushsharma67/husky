import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeStackType} from '../types/rootNavigationProp';
import HomeScreen from '../screens/stackscreens/homeScreen';

const RootStack = createStackNavigator<HomeStackType>();

const StackNavigation = function () {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="home" component={HomeScreen} />
    </RootStack.Navigator>
  );
};

export default StackNavigation;
