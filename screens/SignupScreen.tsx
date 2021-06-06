import * as React from "react";
import { StyleSheet, ImageBackground } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Input, Button, Text } from "react-native-elements";
import { View } from "../components/Themed";

export default function SignupScreen({ navigation }) {
  const navigateToLogin = () => {
    navigation.navigate("LoginPage");
  };

  return (
    <ImageBackground
      source={{ uri: "https://i.pinimg.com/originals/db/ef/d2/dbefd2a0ddf098a50427d6af39ae342f.jpg" }}
      style={{ width: '100%', height: '100%' }}
    >
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
          containerStyle={{ marginBottom: 10, width: 200, borderRadius: 120 }}
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
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    opacity: .8
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
