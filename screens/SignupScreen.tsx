import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Input, Button, Text } from "react-native-elements";
import { View } from "../components/Themed";

let SIGNUP_FIELDS = [
    {
        placeholder: "Name",
        errorMessage: "Please Enter Name",
        onPress: "",
        onChangeText: "",
        keyboardType: "email-address",
    },
];

export default function SignupScreen({ navigation }) {
    const navigateToLogin = () => {
        navigation.navigate("LoginPage");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Logo😊</Text>
            <Input
                containerStyle={{ marginBottom: 30, width: "90%" }}
                placeholder="Name"
                errorStyle={{ color: "red" }}
                errorMessage=""
            />
            <Input
                containerStyle={{ marginBottom: 30, width: "90%" }}
                placeholder="Email"
                errorStyle={{ color: "red" }}
                errorMessage=""
            />
            <Input
                containerStyle={{ marginBottom: 30, width: "90%" }}
                placeholder="Mobile"
            />
            <Input
                containerStyle={{ marginBottom: 30, width: "90%" }}
                placeholder="Password"
                errorStyle={{ color: "red" }}
            />
            <Input
                containerStyle={{ marginBottom: 30, width: "90%" }}
                placeholder="Confirm Password"
                errorStyle={{ color: "red" }}
            />
            <Button
                containerStyle={{
                    marginBottom: 10,
                    width: 200,
                    borderRadius: 120,
                }}
                title="Signup"
                onPress={() => null}
            />
            <Button
                containerStyle={{ marginVertical: 10 }}
                type="clear"
                title="Already a Member? Signin"
                onPress={navigateToLogin}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 50,
    },
    title: {
        marginBottom: 100,
        fontSize: 30,
        fontWeight: "bold",
    },
    textBox: {
        marginVertical: 30,
        width: "90%",
    },
});
