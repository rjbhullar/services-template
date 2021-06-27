/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import * as React from 'react'
import {ColorSchemeName} from 'react-native'

import NotFoundScreen from '../screens/NotFoundScreen'
import LandingPageScreen from '../screens/LandingPageScreen'
import SignupScreen from '../screens/SignupScreen'
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import {RootStackParamList} from '../types'
import BottomTabNavigator from './BottomTabNavigator'
import LinkingConfiguration from './LinkingConfiguration'

export default function Navigation({
    colorScheme,
}: {
    colorScheme: ColorSchemeName
}) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootNavigator />
        </NavigationContainer>
    )
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator()

function RootNavigator() {
    return (
        <Stack.Navigator
            // initialRouteName="ProfilePage"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="LandingPage" component={LandingPageScreen} />
            <Stack.Screen name="LoginPage" component={LoginScreen} />
            <Stack.Screen name="SignupPage" component={SignupScreen} />
            <Stack.Screen
                name="HomePage"
                component={HomeScreen}
                options={{title: 'Oops!'}}
            />
            <Stack.Screen
                name="ProfilePage"
                component={ProfileScreen}
                options={{title: 'Oops!'}}
            />
            <Stack.Screen
                name="NotFound"
                component={NotFoundScreen}
                options={{title: 'Oops!'}}
            />
        </Stack.Navigator>
    )
}
