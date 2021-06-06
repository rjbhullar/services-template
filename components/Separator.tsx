import * as React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";

export default function Separator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: 30,
    height: 1,
    width: "90%",
    backgroundColor: "lightgrey",
  },
});
