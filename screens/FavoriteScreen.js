import React from "react";
import { View, StyleSheet } from "react-native";
import MealList from "../components/mealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButtonApps from "../components/headerButton";
import { useSelector } from "react-redux";

import TextDefault from "../components/textDefault";

const FavoriteScreen = (props) => {
  const favMealList = useSelector((state) => state.meals.addFavorites);

  if (favMealList.length === 0 || !favMealList) {
    return (
      <View style={styles.containerTextFavorites}>
        <TextDefault>Your Favorite list is empty</TextDefault>
      </View>
    );
  }

  return <MealList lisData={favMealList} navigation={props.navigation} />;
};

FavoriteScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favorites",
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

const styles = StyleSheet.create({
  containerTextFavorites: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
