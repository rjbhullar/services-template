import * as React from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import Carousel from "react-native-looped-carousel";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
const LANDING_PAGE_DETAILS = {
  carousalCards: [
    {
      imageURI:
        "http://www.mericar.com/car_service_center/wp-content/uploads/2018/09/FB_IMG_1527053530825.jpg",
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
          {LANDING_PAGE_DETAILS.carousalCards.map((card, index) => (
            <View
              key={"card" + index}
              style={[{ backgroundColor: "#BADA55" }, this.state.size]}
            >
              <Image
                source={{ uri: card.imageURI }}
                style={styles.carousalImage}
              />
            </View>
          ))}
        </Carousel>
      </View> */}
      <View style={styles.container}>
        {LANDING_PAGE_DETAILS.ctaPrimary.map((button) => (
          <TouchableOpacity
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
        {LANDING_PAGE_DETAILS.ctaSecondary.map((button) => (
          <TouchableOpacity
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
    // flex: 1,
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
