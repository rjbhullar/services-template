import * as React from 'react'
import {StyleSheet, ImageBackground} from 'react-native'
import {
    isRequired,
    validateEmail,
    validateMobile,
    validateRegex,
} from './formValidations'
import {FontAwesome, Entypo, Ionicons, MaterialIcons} from '@expo/vector-icons'

import {Input, Button, Text} from 'react-native-elements'
import {View} from '../components/Themed'
import Form from '../components/Form'
import ClearButton from '../components/ClearButton'

let SIGNUP_FIELDS = [
    {
        placeholder: 'Name',
        errorMessage: 'Please Enter Name',
        onPress: '',
        onChangeText: '',
        keyboardType: 'email-address',
    },
]

const PASSWORD_REGEX =
    /^(?=.*[A-Za-z])(?=.*d)(?=.*[$@$!%*#?&])[A-Za-zd$@$!%*#?&]{8,}$/

export default function SignupScreen({navigation}) {
    const navigateToLogin = () => {
        navigation.navigate('LoginPage')
    }

    return (
        <ImageBackground
            source={{
                uri: 'https://i.pinimg.com/originals/db/ef/d2/dbefd2a0ddf098a50427d6af39ae342f.jpg',
            }}
            style={{flex: 1}}>
            <View style={styles.container}>
                <Text style={styles.title}>Logo😊</Text>
                <Form
                    // containerStyle={{ marginBottom: 30, width: "90%" }}
                    fields={{
                        name: {
                            label: 'Name',
                            validators: [isRequired('Name')],
                            leftIcon: () => (
                                <FontAwesome
                                    name="user"
                                    size={20}
                                    color="#b31b1b"
                                    style={{marginRight: 10}}
                                />
                            ),
                            inputProps: {
                                autoCapitalize :'words',
                            },
                        },
                        email: {
                            label: 'Email',
                            validators: [isRequired('Email'), validateEmail],
                            leftIcon: () => (
                                <Entypo
                                    name="email"
                                    size={20}
                                    color="#b31b1b"
                                    style={{marginRight: 10}}
                                />
                            ),
                        },
                        mobile: {
                            label: 'Mobile',
                            validators: [isRequired('Mobile'), validateMobile],
                            leftIcon: () => (
                                <Ionicons
                                    name="call"
                                    size={20}
                                    color="#b31b1b"
                                    style={{marginRight: 10}}
                                />
                            ),
                        },
                        password: {
                            label: 'Password',
                            validators: [
                                isRequired('Password'),
                                validateRegex(PASSWORD_REGEX),
                            ],
                            leftIcon: () => (
                                <FontAwesome
                                    name="key"
                                    size={20}
                                    color="#b31b1b"
                                    style={{marginRight: 10}}
                                />
                            ),
                            inputProps: {
                                secureTextEntry: true,
                            },
                        },
                        confirmPassword: {
                            label: 'Confirm Password',
                            validators: [isRequired('Confirm Password')],
                            leftIcon: () => (
                                <MaterialIcons
                                    name="security"
                                    size={20}
                                    color="#b31b1b"
                                    style={{marginRight: 10}}
                                />
                            ),
                        },
                    }}
                    submitButtonText="Signup"
                    onSubmit={() => {}}
                    afterSubmit={() => {}}
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
