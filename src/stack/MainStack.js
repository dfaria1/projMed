import React from 'react';
/* 
   O React Navigation Stack fornece uma maneira para seu aplicativo fazer a transição entre telas 
   e gerenciar o histórico de navegação.
*/
import { createStackNavigator } from '@react-navigation/stack'
import Preload from '../screens/Preload'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import Medic from '../screens/Medic'
import MainTab from '../stack/MainTab'
import AddMedic from '../screens/AddMedic'

const Stack = createStackNavigator()

export default () => {
    return (
        <Stack.Navigator
            initialRouteName="Preload"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Preload" component={Preload} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="MainTab" component={MainTab} />
            <Stack.Screen name="Medic" component={Medic} />
            <Stack.Screen name="AddMedic" component={AddMedic} />
        </Stack.Navigator>
    )
}