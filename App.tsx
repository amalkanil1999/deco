import { StyleSheet, Text, View } from 'react-native';
// import * as React from 'react';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import AuthStack from './src/components/routing/AuthStack';

const App = () => {
  return (
    <NavigationContainer>
      <AuthStack />
     </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
