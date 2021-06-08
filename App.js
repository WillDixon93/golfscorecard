import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, Pressable, Alert, Image, SafeAreaView } from 'react-native';
import "react-native-gesture-handler";

import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from 'parse/react-native';
import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator } from "@react-navigation/stack";
import {UserRegistration} from './UserRegistration';
import Styles from './Styles';

Parse.setAsyncStorage(AsyncStorage)
const PARSE_APPLICATION_ID = "APPLICATION_ID";
const PARSE_HOST_URL = "HOST_URL";
const PARSE_JAVASCRIPT_ID = 'JAVASCRIPT_ID'; 
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_ID);
Parse.serverURL = PARSE_HOST_URL;

function UserRegistrationScreen() {
  return (
    <>
    <StatusBar />
      <SafeAreaView style={Styles.login_container}>
        <View style={Styles.login_header}>
          <Image 
            style={Styles.login_header_text}
            source={require('./assets/logo-back4app.png')}    
          />
          <Text style={Styles.login_header_text}>
            <Text style={Styles.login_header_text_bold}>
            </Text>
            {' User registration '}
          </Text>
        </View>
      </SafeAreaView>
    </>
  )
}

const Stack = createStackNavigator(); 

const App = () => { 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sign Up" component={UserRegistrationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// export default function App() {
//   return (
//     <View>
//       <Text> This is the scorecard </Text>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
});
