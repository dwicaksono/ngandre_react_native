import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  addFavorites: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingMealsIndex = state.addFavorites.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingMealsIndex >= 0) {
        console.log(existingMealsIndex, "<<?????");
        const updatedFavMeals = [...state.addFavorites];
        updatedFavMeals.splice(existingMealsIndex, 1);
        return { ...state, addFavorites: updatedFavMeals };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        return { ...state, addFavorites: state.addFavorites.concat(meal) };
      }
  }
  return state;
};

export default mealsReducer;
