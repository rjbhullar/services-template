import * as React from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import Swiper from "react-native-swiper";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
const LANDING_PAGE_DETAILS = {
  carousalCards: [
    {
      imageURI: "https://img.youtube.com/vi/AifjAze23lo/0.jpg",
      heading: [
        {
          color: "red",
          text: "HRS Services",
          fontSize: 50,
        },
      ],
      subHeading: [
        {
          color: "pink",
          text: "Best Car Services",
          fontSize: 3,
        },
      ],
    },
    {
      imageURI:
        "https://static.billboard.com/files/2020/04/eminem-press-photo-2019-aqu-billboard-1548-1587659998-compressed.jpg",
      heading: [
        {
          color: "red",
          text: "HRS Services",
          fontSize: 50,
        },
      ],
      subHeading: [
        {
          color: "pink",
          text: "Best Car Services",
          fontSize: 3,
        },
      ],
    },
  ],
  ctaPrimary: [
    {
      text: "Login",
      textColor: "black",
      bgColor: "white",
      fontSize: 50,
      actionType: "signinHandler",
    },
    {
      text: "Signup",
      textColor: "black",
      bgColor: "white",
      fontSize: 50,
      actionType: "signupHandler",
    },
  ],
  ctaSecondary: [
    {
      text: "Continue as Guest",
      textColor: "white",
      fontSize: 30,
      actionType: "guestHandlerHandler",
    },
  ],
};
export default function TabOneScreen() {
  let buttonCallbacks = {};
  return (
    <View style={styles.container}>
      {/* <View style={styles.container}>
        <Carousel
          delay={2000}
          style={{
            // flex: 1,
            height: "70%",
            width: "80%",
          }}
          autoplay
          pageInfo
          onAnimateNextPage={(p) => console.log(p)}
        >
          
        </Carousel>
      </View> */}
      <Swiper style={styles.container} showsButtons={true}>
        {LANDING_PAGE_DETAILS.carousalCards.map((card, index) => (
          <View
            key={"card" + index}
            style={[
              { height: "100%", width: "100%" },
            ]}
          >
            <Image
              source={{ uri: card.imageURI }}
              style={styles.carousalImage}
            />
          </View>
        ))}
      </Swiper>
      <View style={styles.container}>
        {LANDING_PAGE_DETAILS.ctaPrimary.map((button, index) => (
          <TouchableOpacity
            key={"button1" + index}
            // onPress={buttonCallbacks[button.actionType]}
            style={{ backgroundColor: button.bgColor, marginVertical: 10 }}
          >
            <Text
              style={{ color: button.textColor, fontSize: button.fontSize }}
            >
              {button.text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View>
        {LANDING_PAGE_DETAILS.ctaSecondary.map((button, index) => (
          <TouchableOpacity
            key={"button2" + index}
            // onPress={buttonCallbacks[button.actionType]}
            style={{ marginVertical: 10 }}
          >
            <Text
              style={{ color: button.textColor, fontSize: button.fontSize }}
            >
              {button.text}
            </Text>
          </TouchableOpacity>
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
  carousal: {
    // flex: 1,
    height: "70%",
    width: "80%",
  },
  carousalImage: {
    // flex: 1,
    height: "100%",
    width: "100%",
    resizeMode:"contain"
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
});
