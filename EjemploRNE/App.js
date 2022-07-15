import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Button, Icon, Input } from "@rneui/themed";
import { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ListGrades } from './app/screens/ListGrades';
import { GradeForm } from './app/screens/GradeForm';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ListGrades" component={ListGrades}/>
          <Stack.Screen name="GradeForm" component={GradeForm}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
