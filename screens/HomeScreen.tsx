import * as React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";
import Swiper from "react-native-swiper";
import EditScreenInfo from "../components/EditScreenInfo";
import { View } from "../components/Themed";
import { Button, Text } from "react-native-elements";
import BottomTabNavigator from "../navigation/BottomTabNavigator"
const LANDING_PAGE_DETAILS = {
  carousalCards: [
    {
      imageURI: "https://media.istockphoto.com/vectors/car-painting-vector-id156891453?b=1&k=6&m=156891453&s=612x612&w=0&h=kPCoQxkMzuhxWzrQrHWfUXC9dcfmOhnP84CYevArOFY=",
      heading: [
        {
          color: "black",
          text: "HRS Services",
          fontSize: 40,
        },
      ],
      subHeading: [
        {
          color: "grey",
          text: "Leave it on us ✌️",
          fontSize: 23,
        },
      ],
    },
    {
      imageURI:
        "https://graphicriver.img.customer.envatousercontent.com/files/308249461/Business-2872-prw.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=3e3065a786e55b612005976c4d701883",
      heading: [
        {
          color: "black",
          text: "HRS Services",
          fontSize: 40,
        },
      ],
      subHeading: [
        {
          color: "grey",
          text: "Best Car Services",
          fontSize: 23,
        },
      ],
    },
  ],
  ctaPrimary: [
    {
      text: "Login",
      textColor: "white",
      bgColor: "#b31b1b",
      fontSize: 25,
      actionType: "signinHandler",
    },
    {
      text: "Signup",
      textColor: "white",
      bgColor: "#b31b1b",
      fontSize: 25,
      actionType: "signupHandler",
    },
  ],
  ctaSecondary: [
    {
      text: "Continue as Guest",
      textColor: "#002D62",
      fontSize: 20,
      actionType: "guestHandlerHandler",
    },
  ],
};
export default function LandingPageScreen({ navigation }) {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const signinHandler = () => {
    navigation.navigate("LoginPage");
  }

  return (
   <BottomTabNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  bottomContent: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center"
  },
  carousalImage: {
    // flex: 1,
    height: "70%",
    width: "100%",
    resizeMode: "contain"
  },
  carousalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 30,
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
