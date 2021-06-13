import * as React from 'react'
import {StyleSheet, ImageBackground, Image} from 'react-native'

import EditScreenInfo from '../components/EditScreenInfo'
import {Input, Button, Text} from 'react-native-elements'
import {View} from '../components/Themed'
import Form from '../components/Form'
import {FontAwesome} from '@expo/vector-icons'
import ClearButton from '../components/ClearButton'
import makeAxiosRequest from '../api'


const SIGNIN_FIELDS = {
    email: {
        label: 'Email/Mobile',
        validators: [
            {
                type: 'isRequired',
                params: ['Email/Mobile'],
            },
            {
                type: 'validateEmailOrMobile',
            },
        ],
        leftIcon: {
            family: 'FontAwesome',
            name: 'user',
        },
    },
    password: {
        label: 'Password',
        validators: [
            {
                type: 'isRequired',
                params: ['Password'],
            },
        ],
        leftIcon: {
            family: 'FontAwesome',
            name: 'key',
        },
        rightIcon: () => <Text style={{color: 'grey'}}>Forgot Password?</Text>,
        inputProps: {
            secureTextEntry: true,
        },
    },
}


const loginHandler = (payload) => {
    return makeAxiosRequest('login', payload)
}

export default function LoginScreen({navigation}) {
    const navigateToSignup = () => {
        navigation.navigate('SignupPage')
    }

    return (
        <ImageBackground
            source={{
                uri: 'https://i.pinimg.com/originals/db/ef/d2/dbefd2a0ddf098a50427d6af39ae342f.jpg',
            }}
            style={{
                flex: 1,
                transform: [{scaleX: -1}],
            }}>
            <View style={[styles.container, {transform: [{scaleX: -1}]}]}>
                <Text style={styles.title}>
                    <Image
                        source={{
                            uri: 'https://image.freepik.com/free-vector/red-sport-car-logo-icon_126523-964.jpg',
                        }}
                        style={{height: 100, width: 100}}
                    />
                </Text>
                <Form
                    // containerStyle={{ marginBottom: 30, width: "90%" }}
                    fields={SIGNIN_FIELDS}
                    submitButtonText="Login"
                    onSubmit={loginHandler}
                />
                <ClearButton
                    title="Not a Member? Signup"
                    onPress={navigateToSignup}
                />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.8,
    },
    title: {
        marginBottom: 100,
        fontSize: 30,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
})
