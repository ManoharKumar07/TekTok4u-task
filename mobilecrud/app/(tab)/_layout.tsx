import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabRoot = () => {
  return (
   
   <Tabs>
    <Tabs.Screen name="index"/>
    <Tabs.Screen name="viewperson"/>
   </Tabs>
  )
}

export default TabRoot 