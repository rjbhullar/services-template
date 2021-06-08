import 'react-native-gesture-handler'
import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context'

import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'
import {ThemeProvider} from 'react-native-elements'

const theme = {
    Button: {
        titleStyle: {
            color: 'white',
        },
        buttonStyle: {
            backgroundColor: '#b31b1b',
        },
        containerStyle: {
            marginVertical: 10,
        },
    },
}

export default function App() {
    const isLoadingComplete = useCachedResources()
    const colorScheme = useColorScheme()

    if (!isLoadingComplete) {
        return null
    } else {
        return (
            <ThemeProvider theme={theme}>
                <SafeAreaProvider>
                    <Navigation colorScheme={colorScheme} />
                    <StatusBar />
                </SafeAreaProvider>
            </ThemeProvider>
        )
    }
}
