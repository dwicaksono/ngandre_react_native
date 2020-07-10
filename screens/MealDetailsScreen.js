import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { MEALS } from "../data/dummy-data";
import HeaderButtonApps from "../components/headerButton";

const MealDetails = ({ navigation }) => {
  const mealId = navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title="go back Meal Categories"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

MealDetails.navigationOptions = ({ navigation }) => {
  const mealId = navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButtonApps}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => console.log("star")}
        />
      </HeaderButtons>
    ),
  };
};

export default MealDetails;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
