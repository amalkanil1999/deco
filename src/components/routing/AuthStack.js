import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Boarding from '../screens/Auth/Boarding/Boarding';
import SignUp from '../screens/Auth/Signup/SignUp';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (

    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Boarding'>
      <Stack.Screen name="Boarding" component={Boarding} />
      <Stack.Screen name="Signup" component={SignUp} />
    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({
    
})