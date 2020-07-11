import React from "react";
// import { StyleSheet, View, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
// import MealItem from "../components/mealItem";
import MealList from "../components/mealList";

const CategoryMeal = (props) => {
  const catId = props.navigation.getParam("categoryId");
  // const selectData = CATEGORIES.find((item) => item.id === catId);
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  return <MealList lisData={displayedMeals} navigation={props.navigation} />;
};

CategoryMeal.navigationOptions = ({ navigation }) => {
  const catId = navigation.getParam("categoryId");
  const selectData = CATEGORIES.find((item) => item.id === catId);
  return { headerTitle: selectData.title };
};

export default CategoryMeal;
