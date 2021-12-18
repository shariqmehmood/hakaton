import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './src/signup';
import SignIn from './src/Signin';

import BranchManager from './src/MultipleScreen/manager';
import NeedypeopleForm from './src/MultipleScreen/needypeopleform';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
  
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="SignIn" component={SignIn} />

        <Stack.Screen name="NeedyPeoPleForm" component={NeedypeopleForm} />
        <Stack.Screen name="BranchManager" component={BranchManager} />





      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;