import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text } from 'react-native';

const hideHeader = { headerShown: false}

export function NavigationApp(){
    const Stack = createNativeStackNavigator()
    function AuthStack(){
        //fucion que enderiza stack de authentication
        return (
            <Stack.Navigator>
                <Stack.Screen 
                name='Login' 
                component={()=> <Text>Hola desde el login</Text>} 
                options={hideHeader}
                />
                <Stack.Screen 
                name='Register' 
                component={()=> <Text>Hola desde el Register</Text>} 
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
                component={()=> <Text>Hola desde el Home</Text>} 
                options={hideHeader}
                />
                <Stack.Screen 
                name='Profile' 
                component={()=> <Text>Hola desde el Profile</Text>} 
                options={hideHeader}
                />
            </Tab.Navigator>          
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Authentication'>
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