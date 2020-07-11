import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import MealItem from "./mealItem";

const MealList = (props) => {
  const mealsDataItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() =>
          props.navigation.navigate("MealDetail", { mealId: itemData.item.id })
        }
      />
    );
  };
  return (
    <View style={styles.list}>
      <FlatList
        data={props.lisData}
        keyExtractor={(item, idx) => item.id}
        renderItem={mealsDataItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});
