import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/Home'
import React from 'react';
import {
  SafeAreaView, StatusBar, StyleSheet,
  Text, View, FlatList, TouchableOpacity } from 'react-native';

import FA5 from 'react-native-vector-icons/MaterialIcons'
import {widthPercentageToDP as wp2dp, heightPercentageToDP as hp2dp} from 'react-native-responsive-screen';


const Stack = createStackNavigator();


const App = () => {
  
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  const renderItem2 = ({item}) => (
    <Item2 title = {item.title} />
  );
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={
            { title: 'DMS' }
          }
          
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
