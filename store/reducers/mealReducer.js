import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE, SET_FILTER } from "../actions/meals";

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
    case SET_FILTER:
      const actionMeal = action.filters;
      const updatedmeals = state.meals.filter((meal) => {
        if (actionMeal.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (actionMeal.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (actionMeal.vegan && !meal.isVegan) {
          return false;
        }
        if (actionMeal.vegetarian && !meal.isVegetarian) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals: updatedmeals };
  }
  return state;
};

export default mealsReducer;
