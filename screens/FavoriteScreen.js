import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MealList from "../components/mealList";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButtonApps from "../components/headerButton";

const FavoriteScreen = (props) => {
  const favMealList = MEALS.filter(
    (meal) => meal.id === "m1" || meal.id === "m2" || meal.id === "m2"
  );

  return <MealList lisData={favMealList} />;
};

FavoriteScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "You Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButtonApps}>
        <Item
          iconName="ios-menu"
          title="menu"
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
  };
};
export default FavoriteScreen;
