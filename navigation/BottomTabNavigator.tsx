/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import {Ionicons, MaterialIcons} from '@expo/vector-icons'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import * as React from 'react'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import LoginScreen from '../screens/LoginScreen'
import ProfileScreen from '../screens/ProfileScreen'
import {BottomTabParamList, TabOneParamList, TabTwoParamList} from '../types'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme()

    return (
        <BottomTab.Navigator
            initialRouteName="TabOne"
            tabBarOptions={{activeTintColor: Colors[colorScheme].tint}}>
            <BottomTab.Screen
                name="TabOne"
                component={LoginScreen}
                options={{
                    title: 'Services',
                    tabBarIcon: ({color}) => (
                        <MaterialIcons
                            name="car-repair"
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
            <BottomTab.Screen
                name="TabTwo"
                component={ProfileScreen}
                options={{
                    title: 'Account',
                    tabBarIcon: ({color}) => (
                        <TabBarIcon name="man" color={color} />
                    ),
                }}
            />
        </BottomTab.Navigator>
    )
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
    name: React.ComponentProps<typeof Ionicons>['name']
    color: string
}) {
    return <Ionicons size={30} style={{marginBottom: -3}} {...props} />
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
