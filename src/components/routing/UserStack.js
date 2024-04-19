import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import User from '../screens/Home/User/User';
import Profile from '../screens/Home/profile/Profile';


const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='User'>
    <Stack.Screen name="User" component={User} />
    <Stack.Screen name="Profile" component={Profile} />
  </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})