import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  ImageBackground,
} from "react-native";
import { color } from "react-native-reanimated";

const GridTitle = (props) => {
  let TouchedCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchedCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <ImageBackground
        source={{ uri: props.image }}
        style={styles.bgImg}
        resizeMode="cover"
      >
        <TouchedCmp onPress={props.onSelect} style={{ flex: 1 }}>
          <View
            style={{
              ...styles.containerBox,
              ...{ backgroundColor: props.color },
            }}
          >
            <Text style={styles.title} numberOfLines={2}>
              {props.title}
            </Text>
          </View>
        </TouchedCmp>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  bgImg: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },

  gridItem: {
    flex: 1,
    margin: 10,
    height: 150,
    borderRadius: 20,
    overflow: "hidden",
  },
  containerBox: {
    flex: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.26,
    shadowRadius: 8,
    // elevation: 8,
  },
  title: {
    padding: 20,
    backgroundColor:
      Platform.OS === "ios" ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0.7)",
    fontSize: 22,
    fontFamily: "open-sans-bold",
    textAlign: "right",
    color: "white",
    width: "100%",
    height: "100%",
  },
});

export default GridTitle;
