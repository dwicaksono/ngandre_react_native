import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import { useScreens, enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import mealsReducer from "./store/reducers/mealReducer";
import { Provider } from "react-redux";

import MealNavigator from "./navigation/MealsNavigatior";

// enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  let [fontsLoaded] = useFonts({
    "open-sans": require("./fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <MealNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#273c75",
    alignItems: "center",
    justifyContent: "center",
  },
});
