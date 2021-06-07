import * as React from "react";
import { View, StyleSheet } from "react-native";

export default function CenteredDiv({ children, style={}}) {
    return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: `100%`,
        alignItems: "center",
        justifyContent: "center",
    },
});
