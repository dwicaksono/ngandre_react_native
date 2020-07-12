import React from "react";
import { Text, StyleSheet } from "react-native";

const TextDefault = (props) => {
  return (
    <Text style={{ ...styles.textDefault, ...props.style }}>
      {props.children}
    </Text>
  );
};

export default TextDefault;

const styles = StyleSheet.create({
  textDefault: {
    fontFamily: "open-sans",
  },
});
