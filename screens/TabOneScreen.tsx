import * as React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";
import Swiper from "react-native-swiper";
import EditScreenInfo from "../components/EditScreenInfo";
import {  View } from "../components/Themed";
import { Button, Text } from "react-native-elements";
const LANDING_PAGE_DETAILS = {
  carousalCards: [
    {
      imageURI: "https://img.youtube.com/vi/AifjAze23lo/0.jpg",
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
        "https://static.billboard.com/files/2020/04/eminem-press-photo-2019-aqu-billboard-1548-1587659998-compressed.jpg",
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
      bgColor: "red",
      fontSize: 25,
      actionType: "signinHandler",
    },
    {
      text: "Signup",
      textColor: "white",
      bgColor: "red",
      fontSize: 25,
      actionType: "signupHandler",
    },
  ],
  ctaSecondary: [
    {
      text: "Continue as Guest",
      textColor: "blue",
      fontSize: 20,
      actionType: "guestHandlerHandler",
    },
  ],
};
export default function TabOneScreen() {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  return (
    <View style={styles.container}>
      <Swiper style={styles.wrapper} showsPagination={true}>
        {LANDING_PAGE_DETAILS.carousalCards.map((card, index) => (
          <View key={"card" + index} style={styles.carousalView}>
            <Image
              source={{ uri: card.imageURI }}
              style={styles.carousalImage}
            />
            {card.heading.map((heading) => (
              <Text
                key={"heading" + index}
                style={{ fontSize: heading.fontSize, color: heading.color }}
              >
                {heading.text}
              </Text>
            ))}
            {card.subHeading.map((subHeading) => (
              <Text
                key={"subHeading" + index}
                style={{
                  fontSize: subHeading.fontSize,
                  color: subHeading.color,
                }}
              >
                {subHeading.text}
              </Text>
            ))}
          </View>
        ))}
      </Swiper>
      <View style={styles.bottomContent}>
        {LANDING_PAGE_DETAILS.ctaPrimary.map((button, index) => (
          <Button
            key={"ctaPrimary" + index}
            containerStyle={{ marginBottom: 10, width: 300, borderRadius: 120 }}
            buttonStyle={{ backgroundColor: button.bgColor }}
            title={button.text}
            titleStyle={{
              color: button.textColor,
              fontSize: button.fontSize,
            }}
          />
        ))}
      </View>
      <View>
        {LANDING_PAGE_DETAILS.ctaSecondary.map((button, index) => (
          <Button
            key={"ctaSecondary" + index}
            containerStyle={{ marginVertical: 10 }}
            type="clear"
            title={button.text}
            titleStyle={{
              color: button.textColor,
              fontSize: button.fontSize,
            }}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContent: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },
  carousal: {
    flex: 0.7,
    // height: "70%",
    width: "80%",
  },
  carousalImage: {
    // flex: 1,
    height: "70%",
    width: "100%",
    // resizeMode:""
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
  buttons: {
    marginVertical: 30,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  wrapper: {
    // flex:.÷,
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});

{
}
