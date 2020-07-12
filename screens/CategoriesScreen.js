import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButtonApps from "../components/headerButton";

import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native-gesture-handler";

import GridTitle from "../components/gridTitle";

const CategoriesScreen = ({ navigation }) => {
  const CategoryData = (itemData) => {
    return (
      <GridTitle
        title={itemData.item.title}
        onSelect={() =>
          navigation.navigate("CategoryMeals", { categoryId: itemData.item.id })
        }
        image={itemData.item.color}
        color={itemData.item.color}
      />
    );
  };
  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={CategoryData}
      keyExtractor={(item, idx) => item.id}
    />
  );
};

CategoriesScreen.navigationOptions = (navdata) => {
  return {
    headerTitle: "Categories",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButtonApps}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navdata.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
