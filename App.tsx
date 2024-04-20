import { StyleSheet, Text, View } from 'react-native';
// import * as React from 'react';
import React, {useEffect} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen'

import AuthStack from './src/components/routing/AuthStack';

const App = () => {
  useEffect(() =>{
    setTimeout(()=>{
      SplashScreen.hide()},500
    )
  })
  return (
    <NavigationContainer>
      <AuthStack />
     </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
