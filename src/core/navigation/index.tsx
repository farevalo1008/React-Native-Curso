import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text } from 'react-native';
import { LoginScreen, RegisterScreen } from '@containers';
import { HomeScreen } from 'containers/home';
import ProfileScreen from 'containers/home/screens/ProfileScreen';

const hideHeader = { headerShown: false}

export function NavigationApp(){
    const Stack = createNativeStackNavigator()
    function AuthStack(){
        //fucion que enderiza stack de authentication
        return (
            <Stack.Navigator>
                <Stack.Screen 
                name='Login' 
                component={LoginScreen} 
                options={hideHeader}
                />
                <Stack.Screen 
                name='Register' 
                component={RegisterScreen} 
                options={hideHeader}
                />
            </Stack.Navigator>
        )
    }

    const Tab = createBottomTabNavigator();
    function MainApp(){
        return (
            <Tab.Navigator>
                <Tab.Screen 
                name='Home' 
                component={HomeScreen} 
                options={hideHeader}
                />
                <Stack.Screen 
                name='Profile' 
                component={ProfileScreen} 
                options={hideHeader}
                />
            </Tab.Navigator>          
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='MainApp'>
                <Stack.Screen 
                name='Authentication' 
                component={AuthStack} 
                options={hideHeader}
                />

                <Stack.Screen 
                name='MainApp' 
                component={MainApp}
                options={hideHeader}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}