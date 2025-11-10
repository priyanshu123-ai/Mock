import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../../Screen/Home'

import Library from '../../Screen/Library'

import Playlists from '../../Screen/Playlists'

import Profile from '../../Screen/Profile'



const index = () => {

  const Stack = createNativeStackNavigator()

  
  return (
   <Stack.Navigator>
    <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
    <Stack.Screen name='Library' component={Library}/>
    <Stack.Screen name='Playlists' component={Playlists}/>

    <Stack.Screen name='Profile' component={Profile}/>

   </Stack.Navigator>
  )
}

export default index

const styles = StyleSheet.create({

})