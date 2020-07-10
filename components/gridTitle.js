import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

const GridTitle = (props) => {
  let TouchedCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchedCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
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
    </View>
  );
};

const styles = StyleSheet.create({
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
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.26,
    shadowRadius: 10,

    elevation: 3,
  },
  title: {
    fontSize: 22,
    fontFamily: "open-sans-bold",
    textAlign: "right",
  },
});

export default GridTitle;
