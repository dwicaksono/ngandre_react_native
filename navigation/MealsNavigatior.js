import React from "react";

import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
import color from "../constant/colors";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMeal from "../screens/CategoryMeal";
import FavoriteScreen from "../screens/FavoriteScreen";
import MealDetails from "../screens/MealDetailsScreen";
import FilterScreen from "../screens/FiltersScreen";
import { Platform } from "react-native";

const tabDefaultHeader = {
  headerStyle: {
    backgroundColor:
      Platform.OS === "ios" ? color.colorSecondary : color.colorPrimary,
  },

  headerTintColor:
    Platform.OS === "ios" ? color.colorPrimary : color.colorSecondary,
};

const MealNavigator = createStackNavigator(
  {
    Categories: { screen: CategoriesScreen },
    CategoryMeals: {
      screen: CategoryMeal,
    },
    MealDetail: { screen: MealDetails },
  },
  {
    defaultNavigationOptions: tabDefaultHeader,
  }
);

const FavTabNavigator = createStackNavigator(
  {
    Favorites: FavoriteScreen,
    MealDetail: MealDetails,
  },
  { defaultNavigationOptions: tabDefaultHeader }
);

const tabsConfiq = {
  Meals: {
    screen: MealNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: color.colorPrimary,
    },
  },
  Favorites: {
    screen: FavTabNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: color.colorPrimary,
    },
  },
};

const MealFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabsConfiq, {
        activeTincolor: color.colorSecondary,
        shifting: true,
        barStyle: {
          backgroundColor: color.colorPrimary,
          // height: ,
          // flex: 1,
          alignItems: "center",
        },
      })
    : createMaterialBottomTabNavigator(tabsConfiq, {
        activeTincolor: color.colorSecondary,
        shifting: true,
        barStyle: {
          backgroundColor: color.colorPrimary,
          alignItems: "center",
        },
      });
// : createBottomTabNavigator(tabsConfiq, {
//     tabBarOptions: { activeTincolor: color.colorPrimary },
//   });

const FilterNavigatior = createStackNavigator(
  {
    Filters: FilterScreen,
  },
  { defaultNavigationOptions: tabDefaultHeader }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFav: {
      screen: MealFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
        tintColor: color.colorPrimary,
      },
    },
    Filters: FilterNavigatior,
  },
  {
    drawerBackgroundColor: color.colorPrimary,

    drawerPosition: "default",
    drawerType: "back",
    drawerWidth: 200,
    contentOptions: {
      activeBackgroundColor: color.colorThird,
      labelStyle: { fontFamily: "open-sans-bold" },
      activeTintColor: color.colorPrimary,
      inactiveTintColor: color.colorThird,
    },
  }
);
export default createAppContainer(MainNavigator);
