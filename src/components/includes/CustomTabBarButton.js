import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CustomTabBarButton(props) {
    const { children } = props;
    console.log(props)
  return (
    <View>
          <Text>{props.children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})