import * as React from "react";
import { StyleSheet, ImageBackground } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Input, Button, Text } from "react-native-elements";
import { View } from "../components/Themed";

export default function LoginScreen({ navigation }) {
  const [emailOrMobile, setEmailOrMobile] = React.useState("");
  console.log('emailOrMobile: ', emailOrMobile);
  const [password, setPassword] = React.useState("");
  console.log('password: ', password);

  const emailOrMobileChanghandler = (value) => {
    setEmailOrMobile(value);
  };

  const passwordChangHandler = (value) => {
    setPassword(value);
  };

  const navigateToSignup = () => {
    navigation.navigate("SignupPage");
  };

  let isValidEmailOrMobile = React.useMemo(() => {

  }, [emailOrMobile]);

  return (
    <ImageBackground
      source={{ uri: "https://i.pinimg.com/originals/db/ef/d2/dbefd2a0ddf098a50427d6af39ae342f.jpg" }}
      style={{
        width: '100%', height: '100%', transform: [{ scaleX: -1 }]
      }}
    >
      <View style={[styles.container, { transform: [{ scaleX: -1 }] }]}>
        <Text style={styles.title}>Logo😊</Text>
        <Input
          containerStyle={{ marginBottom: 30, width: "90%" }}
          placeholder="Email/Mobile"
          errorStyle={{ color: "red" }}
          onChangeText={emailOrMobileChanghandler}
          errorMessage="Enter a valid email or Mobile"
        />
        <Input
          containerStyle={{ marginBottom: 30, width: "90%" }}
          placeholder="Password"
          onChangeText={passwordChangHandler}
          errorStyle={{ color: "red" }}
          secureTextEntry={true}
          rightIcon={() => (
            <Text style={{ color: "grey" }}>Forgot Password?</Text>
          )}
        />
        <Button
          containerStyle={{ marginBottom: 10, width: 200, borderRadius: 120 }}
          disabled={!(emailOrMobile && password)}
          title="Signin"
          onPress={() => null}
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
