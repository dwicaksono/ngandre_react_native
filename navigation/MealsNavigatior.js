import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import color from "../constant/colors";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMeal from "../screens/CategoryMeal";
import MealDetails from "../screens/MealDetailsScreen";

const MealNavigator = createStackNavigator(
  {
    Categories: { screen: CategoriesScreen },
    CategoryMeals: {
      screen: CategoryMeal,
    },
    MealDetail: { screen: MealDetails },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "ios" ? color.colorSecondary : color.colorPrimary,
      },
      headerTintColor:
        Platform.OS === "ios" ? color.colorPrimary : color.colorSecondary,
    },
  }
);
export default createAppContainer(MealNavigator);
