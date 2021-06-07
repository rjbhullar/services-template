import { isLoaded } from "expo-font";
import * as React from "react";

import {
    View,
    KeyboardAvoidingView,
    TextInput,
    Text,
    ActivityIndicator,
    StyleSheet
} from "react-native";
import { Input, Button } from "react-native-elements";
import Animated from "react-native-reanimated";
import { validateField, validateFields } from "../screens/formValidations";
import CenteredView from "./CenteredView";

const getInitialState = (fieldKeys) => {
    const values = {};

    fieldKeys.forEach((key) => {
        values[key] = "";
    });

    return values;
};

const stateReducer = (state, action) => {
    if (typeof action === "function") {
        return { ...state, ...action(state) };
    }
    return { ...state, ...action };
};

const Form = ({
    fields,
    submitButtonText,
    onSubmit,
    afterSubmit,
    containerStyle,
    isAsync = true,
}) => {
    const fieldKeys = React.useMemo(() => Object.keys(fields), [fields]);
    const [state, setState] = React.useReducer(stateReducer, {}, () => {
        let blankValues = getInitialState(fieldKeys);
        return {
            values: blankValues,
            validationErrors: blankValues,
        };
    });

    const onChangeValue = (key, value) => {
        setState((prevState) => ({
            values: { ...prevState.values, [key]: value },
            validationErrors: { ...prevState.validationErrors, [key]: "" },
        }));
    };

    const validateFieldOnBlur = (key, { validators }, fieldValue) => {
        let error = validateField(validators, fieldValue);
        setState((prevState) => ({
            validationErrors: { ...prevState.validationErrors, [key]: error },
        }));
    };

    const submitForm = async () => {
        const validationErrors = validateFields({
            fields,
            fieldKeys,
            values: state.values,
        });
        console.log('validationErrors: ', validationErrors);
        if (validationErrors) {
            setState({ validationErrors });
            return;
        }
        console.log("oasdeded");
        if (isAsync) {
            setState({
                isSubmitting: true
            })
            // try {
            //     const result = await onSubmit(...values);
            //     await afterSubmit(result);
            // } catch (e) {
            //     console.log("error:", e);
            // }
        }
    };

    const { values, validationErrors } = state;
    return (
        <CenteredView >
            {fieldKeys.map((key) => {
                const field = fields[key];
                const fieldValue = values[key];
                const fieldError = validationErrors[key];
                return (
                    <CenteredView key={key} style={{ padding: 10 }}>
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
                            containerStyle={{ marginBottom: 30, width: "100%" }}
                            placeholder={field.label}
                            value={fieldValue}
                            onChangeText={(text) => onChangeValue(key, text)}
                            errorStyle={{ color: "red" }}
                            {...field.inputProps}
                            rightIcon={field.rightIcon && field.rightIcon()}
                            leftIcon={field.leftIcon && field.leftIcon()}
                            errorMessage={fieldError}
                        />
                    </CenteredView>
                );
            })}
            <Button
                containerStyle={styles.submitButton}
                title={submitButtonText}
                onPress={submitForm}
                disabled={state.isSubmitting}
                icon={
                    state.isSubmitting && (
                        <ActivityIndicator
                            color="#FFFFFF"
                            style={{ paddingRight: 10 }}
                        />
                    )
                }
                raised
            />
        </CenteredView>
    );
};


const styles = StyleSheet.create({
    submitButton: {
        marginVertical: 10,
        width: 200,
        borderRadius: 120,
        backgroundColor: "red"
    },
});

export default Form;
