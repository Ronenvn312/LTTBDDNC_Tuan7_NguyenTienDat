
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import FlatListSP from './component/FlatListSP';
import Screen1 from './Screen/Screen1';
import Updateform from './Screen/Updateform';

const Stack = createNativeStackNavigator()

export default App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={Screen1} />
        <Stack.Screen name='Form' component={Updateform} />
        <Stack.Screen name='FlatListSP' component={FlatListSP} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
