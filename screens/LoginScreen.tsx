import * as React from "react";
import { StyleSheet, ImageBackground } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Input, Button, Text } from "react-native-elements";
import { View } from "../components/Themed";
import Form from "../components/Form";
import { isRequired, validateEmailOrMobile } from "./formValidations";
import { FontAwesome } from "@expo/vector-icons";
export default function LoginScreen({ navigation }) {

    const navigateToSignup = () => {
        navigation.navigate("SignupPage");
    };

    return (
      <ImageBackground
      source={{ uri: "https://i.pinimg.com/originals/db/ef/d2/dbefd2a0ddf098a50427d6af39ae342f.jpg" }}
      style={{
        flex: 1, transform: [{ scaleX: -1 }]
      }}
    >
        <View  style={[styles.container, { transform: [{ scaleX: -1 }] }]}>
            <Text style={styles.title}>Logo😊</Text>
            <Form
                // containerStyle={{ marginBottom: 30, width: "90%" }}
                fields={{
                    email: {
                        label: "Email/Mobile",
                        validators: [isRequired("Email/Mobile"), validateEmailOrMobile],
                        leftIcon: () => (
                            <FontAwesome
                                name="user"
                                size={20}
                                color="grey"
                                style={{ marginRight: 10 }}
                            />
                        ),
                    },
                    password: {
                        label: "Password",
                        validators: [isRequired("Password")],
                        leftIcon: () => (
                            <FontAwesome
                                name="key"
                                size={20}
                                color="grey"
                                style={{ marginRight: 10 }}
                            />
                        ),
                        rightIcon: () => (
                            <Text style={{ color: "grey" }}>
                                Forgot Password?
                            </Text>
                        ),
                        inputProps: {
                            secureTextEntry: true,
                        },
                    },
                }}
                submitButtonText="Login"
                onSubmit={() => {}}
                afterSubmit={() => {}}
            />
            <Button
                containerStyle={{ marginVertical: 10 }}
                type="clear"
                title="Not a Member? Signup"
                onPress={navigateToSignup}
            />
        </View>
    </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        marginBottom: 100,
        fontSize: 30,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
});
