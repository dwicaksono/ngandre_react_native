import React from "react";
import MealList from "../components/mealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButtonApps from "../components/headerButton";
import { useSelector } from "react-redux";

const FavoriteScreen = (props) => {
  const favMealList = useSelector((state) => state.meals.addFavorites);

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
