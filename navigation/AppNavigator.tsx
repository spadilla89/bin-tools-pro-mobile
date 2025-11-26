import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      {/* Add your tab screens here */}
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="BinGenerator" component={BinGeneratorScreen} />
      <Tab.Screen name="BinSearch" component={BinSearchScreen} />
      {/* Repeat for remaining modules */}
    </Tab.Navigator>
  );
};

export default AppNavigator;