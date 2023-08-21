/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  KeyboardAvoidingView, Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text, TextInput, TouchableOpacity,
  useColorScheme,
  View,
  Keyboard, BackHandler, DeviceEventEmitter, NativeModules,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import Task from './android/app/src/components/Task';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './android/app/src/components/Screen/SplashScreen';
import LoginScreen from './android/app/src/components/Screen/LoginScreen';
import PunchTimeRecordScreen from './android/app/src/components/Screen/PunchTimeRecordScreen';
import RegisterScreen from './android/app/src/components/Screen/PunchTimeRecordScreen';

function App() {

  const Stack = createStackNavigator();

  const Auth = () => {
    return (
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            title: 'MSSPL',
            headerStyle: {
              backgroundColor: '#307ecc',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              alignItems: 'center'
            },
          }}
        />
        <Stack.Screen
          name="RegisterScreens"
          component={PunchTimeRecordScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>

  );
}

export default App;
