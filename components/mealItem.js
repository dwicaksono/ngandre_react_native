import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import color from "../constant/colors";

const MealItem = (props) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.headerMeal }}>
            <ImageBackground source={{ uri: props.image }} style={styles.bgImg}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.MealDetail }}>
            <Text style={styles.textMealDetail}>{props.duration}/m</Text>
            <Text style={styles.textMealDetail}>
              {props.complexity.toUpperCase()}
            </Text>
            <Text style={styles.textMealDetail}>
              {props.affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    backgroundColor: color.colorThird,
    overflow: "hidden",
    marginBottom: 15,
  },
  mealRow: {
    flexDirection: "row",
  },
  bgImg: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  headerMeal: {
    height: "85%",
  },
  titleContainer: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 5,
    paddingVertical: 15,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: color.colorSecondary,
    textAlign: "center",
  },
  MealDetail: {
    height: "15%",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: color.colorThird,
  },
  textMealDetail: {
    fontFamily: "open-sans",
    fontSize: 14,
  },
});

export default MealItem;
