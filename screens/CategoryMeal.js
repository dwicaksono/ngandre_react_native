import React from "react";

import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/mealList";
import { useSelector } from "react-redux";
import { View, StyleSheet } from "react-native";
import TextDefault from "../components/textDefault";

const CategoryMeal = (props) => {
  const mealsFilterState = useSelector((state) => state.meals.filteredMeals);

  const catId = props.navigation.getParam("categoryId");
  const displayedMeals = mealsFilterState.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.screen}>
        <TextDefault>No Meals data, check yout filter !</TextDefault>
      </View>
    );
  }

  return <MealList lisData={displayedMeals} navigation={props.navigation} />;
};

CategoryMeal.navigationOptions = ({ navigation }) => {
  const catId = navigation.getParam("categoryId");
  const selectData = CATEGORIES.find((item) => item.id === catId);
  return { headerTitle: selectData.title };
};

export default CategoryMeal;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
