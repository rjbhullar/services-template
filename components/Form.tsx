import {isLoaded} from 'expo-font'
import React, {useEffect} from 'react'

import {
    View,
    KeyboardAvoidingView,
    TextInput,
    Text,
    ActivityIndicator,
    StyleSheet,
} from 'react-native'
import {ThemeProvider, Input, Button} from 'react-native-elements'
import Animated from 'react-native-reanimated'
import {validateField, validateFields} from '../screens/formValidations'
import CenteredView from './CenteredView'
import {FontAwesome, Entypo, Ionicons, MaterialIcons} from '@expo/vector-icons'

const icons = {FontAwesome, Entypo, Ionicons, MaterialIcons}
const iconCommonProps = {
    size: 20,
    color: '#b31b1b',
    style: {marginRight: 10},
}

const getIcon = (iconDetails) => {
    const Icon = icons[iconDetails.family]
    return <Icon {...iconCommonProps} {...iconDetails} />
}
const getInitialState = (fieldKeys) => {
    const values = {}

    fieldKeys.forEach((key) => {
        values[key] = ''
    })

    return values
}

const stateReducer = (state, action) => {
    if (typeof action === 'function') {
        return {...state, ...action(state)}
    }
    return {...state, ...action}
}

const Form = ({
    fields,
    submitButtonText,
    onSubmit,
    afterSubmit,
    containerStyle = {},
    isAsync = true,
}) => {
    const fieldKeys = React.useMemo(() => Object.keys(fields), [fields])
    const [state, setState] = React.useReducer(stateReducer, {}, () => {
        const blankValues = getInitialState(fieldKeys)
        return {
            values: blankValues,
            validationErrors: blankValues,
        }
    })
    const {values, validationErrors} = state

    const onChangeValue = (key, value) => {
        setState((prevState) => ({
            values: {...prevState.values, [key]: value},
            validationErrors: {...prevState.validationErrors, [key]: ''},
        }))
    }

    const validateFieldOnBlur = (key, {validators}, fieldValue) => {
        const error = validateField(validators, fieldValue)
        setState((prevState) => ({
            validationErrors: {...prevState.validationErrors, [key]: error},
        }))
    }

    const submitForm = async () => {
        const validationErrors = validateFields({
            fields,
            fieldKeys,
            values: state.values,
        })
        if (validationErrors) {
            setState({validationErrors})
            return
        }
        if (isAsync) {
            setState({
                formStatus: 'isSubmitting',
            })
            // try {
            //     const result = await onSubmit(...values);
            //     await afterSubmit(result);
            // } catch (e) {
            //     console.log("error:", e);
            // }
        }
    }

    useEffect(() => {
        if (state.formStatus === 'isSubmitting') {
            const handleFormSubmit = async () => {
                try {
                    const result = await onSubmit(values)
                    // await afterSubmit(result)
                } catch (e) {
                    console.log('error:', e)
                }
            }
            handleFormSubmit()
        }
    }, [state.formStatus])

    const getIcon = (icon) => {
        icon && (typeof icon === 'function' ? icon() : getIcon(icon))
    }

    return (
        <CenteredView style={containerStyle}>
            {fieldKeys.map((key) => {
                const field = fields[key]
                const fieldValue = values[key]
                const fieldError = validationErrors[key]
                return (
                    <CenteredView key={key} style={{padding: 10}}>
                        {/* <Text>{field.label}</Text> */}
                        {/* <TextInput
                            {...field.inputProps}
                            placeholder={field.label}
                            value={fieldValue}
                            style={{
                                borderBottomColor: "grey",
                                borderBottomWidth: 1,
                                fontSize: 20,
                            }}
                            onChangeText={(text) => onChangeValue(key, text)}
                            onBlur={() =>
                                validateFieldOnBlur(key, field, fieldValue)
                            }
                        /> */}
                        <Input
                            containerStyle={{
                                marginBottom: 10,
                                width: '100%',
                            }}
                            placeholder={field.label}
                            value={fieldValue}
                            onChangeText={(text) => onChangeValue(key, text)}
                            errorStyle={{color: 'red'}}
                            rightIcon={getIcon(field.rightIcon)}
                            leftIcon={getIcon(field.leftIcon)}
                            errorMessage={fieldError}
                            autoCapitalize="none"
                            {...field.inputProps}
                        />
                    </CenteredView>
                )
            })}
            <Button
                containerStyle={styles.submitButton}
                title={submitButtonText}
                onPress={submitForm}
                disabled={state.formStatus === 'isSubmitting'}
                icon={
                    state.formStatus === 'isSubmitting' && (
                        <ActivityIndicator
                            color="#FFFFFF"
                            style={{paddingRight: 10}}
                        />
                    )
                }
                raised
            />
        </CenteredView>
    )
}

const styles = StyleSheet.create({
    submitButton: {
        width: 200,
        borderRadius: 120,
    },
})

export default Form
