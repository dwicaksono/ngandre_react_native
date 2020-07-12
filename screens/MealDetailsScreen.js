import React, { useEffect, useCallback } from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButtonApps from "../components/headerButton";
import TextDefault from "../components/textDefault";

import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/actions/meals";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <TextDefault>{props.children}</TextDefault>
    </View>
  );
};

const MealDetails = (props) => {
  const dataMealState = useSelector((state) => state.meals.meals);
  // const favoriteMealsData = useSelector((state) => state.meals.addFavorites);
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = dataMealState.find((meal) => meal.id === mealId);
  const currentMealData = useSelector((state) =>
    state.meals.addFavorites.some((meal) => meal.id === mealId)
  );
  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({ favToggle: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFav: currentMealData });
  }, [currentMealData]);
  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <TextDefault>{selectedMeal.duration}m</TextDefault>
        <TextDefault>{selectedMeal.complexity.toUpperCase()}</TextDefault>
        <TextDefault>{selectedMeal.affordability.toUpperCase()}</TextDefault>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetails.navigationOptions = (navigationData) => {
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFavorite = navigationData.navigation.getParam("favToggle");
  const isFavo = navigationData.navigation.getParam("isFav");
  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButtonApps}>
        <Item
          title="Favorite"
          iconName={isFavo ? "ios-star" : "ios-star-outline"}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    ),
  };
};

export default MealDetails;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});
