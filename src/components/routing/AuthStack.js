import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Boarding from '../screens/Auth/Boarding/Boarding';
import SignUp from '../screens/Auth/Signup/SignUp';
import HomeStack from './HomeStack';
import Feed from '../screens/Home/Feed/Feed';
import Topic from '../screens/Home/Topic/Topic';
import EditProfile from '../screens/Home/Edit/EditProfile';
// import HomeScreen from '../screens/Home/HomeSCreen/HomeScreen';


const Stack = createStackNavigator();

const AuthStack = () => {
  return (

    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Boarding'>
      <Stack.Screen name="Boarding" component={Boarding} />
      <Stack.Screen name="Signup" component={SignUp} />
      <Stack.Screen name="Homestack" component={HomeStack} />
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Topic" component={Topic} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({
    
})