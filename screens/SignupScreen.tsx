import * as React from 'react'
import {StyleSheet, ImageBackground, Image} from 'react-native'

import {FontAwesome, Entypo, Ionicons, MaterialIcons} from '@expo/vector-icons'

import {Input, Button, Text} from 'react-native-elements'
import {View} from '../components/Themed'
import Form from '../components/Form'
import ClearButton from '../components/ClearButton'
import makeAxiosRequest from '../api'

const PASSWORD_REGEX =
    /^(?=.*[A-Za-z])(?=.*d)(?=.*[$@$!%*#?&])[A-Za-zd$@$!%*#?&]{8,}$/;

const SIGNUP_FIELDS = {
    name: {
        label: 'Name',
        validators: [
            {
                type: 'isRequired',
                params: ['Name'],
            },
        ],
        leftIcon: {
            family: 'FontAwesome',
            name: 'user',
        },
        inputProps: {
            autoCapitalize: 'words',
        },
    },
    email: {
        label: 'Email',
        validators: [
            {
                type: 'isRequired',
                params: ['Email'],
            },
            {
                type: 'validateEmail',
            },
        ],
        leftIcon: {
            family: 'Entypo',
            name: 'email',
        },
    },
    mobileNumber: {
        label: 'Mobile',
        validators: [
            {
                type: 'isRequired',
                params: ['Mobile'],
            },
            {
                type: 'validateMobile',
            },
        ],
        leftIcon: {
            family: 'Ionicons',
            name: 'call',
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
        inputProps: {
            secureTextEntry: true,
        },
    },
    confirmPassword: {
        label: 'Confirm Password',
        validators: [
            {
                type: 'isRequired',
                params: ['Confirm Password'],
            },
        ],
        leftIcon: {
            family: 'MaterialIcons',
            name: 'security',
        },
    },
}

const signupHandler = (payload) => {
    return makeAxiosRequest('signup', payload)
}

export default function SignupScreen({navigation}) {
    const navigateToLogin = () => {
        navigation.navigate('signup')
    }

    return (
        <ImageBackground
            source={{
                uri: 'https://i.pinimg.com/originals/db/ef/d2/dbefd2a0ddf098a50427d6af39ae342f.jpg',
            }}
            style={{flex: 1}}>
            <View style={styles.container}>
                <Image
                    source={{
                        uri: 'https://image.freepik.com/free-vector/red-sport-car-logo-icon_126523-964.jpg',
                    }}
                    style={{height: 100, width: 100}}
                />
                <Form
                    // containerStyle={{ marginBottom: 30, width: "90%" }}
                    fields={SIGNUP_FIELDS}
                    submitButtonText="Signup"
                    onSubmit={signupHandler}
                    afterSubmit={navigateToLogin}
                />
                <ClearButton
                    title="Already a Member? Signin"
                    onPress={navigateToLogin}
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
