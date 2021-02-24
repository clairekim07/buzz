import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import facebook from './screens/fb';
import instagram from './screens/insta';

export default function App() {
  return (
    <View style={styles.container}>
      <Container/>
      <Text>Facebook</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const Navigator = createBottomTabNavigator({
  facebook:{screen:fb},
  instagram:{screen:insta} 
})
const Container = createAppContainer(Navigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
