import React from "react";
import { StyleSheet, View, Text, Button, FlatList, Image } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";

import MealItem from "../components/mealItem";
const CategoryMeal = ({ navigation }) => {
  const mealsData = ({ item }) => {
    return (
      <MealItem
        title={item.title}
        image={item.imageUrl}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
        onSelectMeal={() =>
          navigation.navigate("MealDetail", { mealId: item.id })
        }
      />
    );
  };
  const catId = navigation.getParam("categoryId");
  // const selectData = CATEGORIES.find((item) => item.id === catId);
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, idx) => item.id}
        renderItem={mealsData}
      />
    </View>
  );
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
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});
