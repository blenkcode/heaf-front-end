import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    token: null,
    pseudo: null,
    age: null,
    weight: null,
    height: null,
    gender: null,
    activityLevel: null,
    TDEE: null,
    BMR: null,
    calories: null,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.pseudo = action.payload.pseudo;
    },
    loginn: (state, action) => {
      state.value.token = action.payload.token;
      state.value.pseudo = action.payload.pseudo;
      state.value.age = action.payload.age;
      state.value.gender = action.payload.gender;
      state.value.weight = action.payload.weight;
      state.value.height = action.payload.height;
      state.value.activityLevel = action.payload.activityLevel;
      state.value.BMR = action.payload.BMR;
      state.value.TDEE = action.payload.TDEE;
      state.value.calories = action.payload;
    },
    logout: (state) => {
      state.value.token = null;
      state.value.pseudo = null;
    },
    updateData: (state, action) => {
      state.value.age = action.payload.age;
      state.value.gender = action.payload.gender;
      state.value.weight = action.payload.weight;
      state.value.height = action.payload.height;
      state.value.activityLevel = action.payload.activityLevel;
      state.value.BMR = action.payload.BMR;
      state.value.TDEE = action.payload.TDEE;
    },
    updateCalories: (state, action) => {
      state.value.calories = action.payload;
    },
    updateWeight: (state, action) => {
      state.value.weight = action.payload;
    },
    updateCaloriesData: (state, action) => {
      state.value.BMR = action.payload.BMR;
      state.value.TDEE = action.payload.TDEE;
      state.value.calories = action.payload.calories;
    },
  },
});

export const {
  login,
  logout,
  updateData,
  updateCalories,
  updateWeight,
  loginn,
  updateCaloriesData,
} = userSlice.actions;
export default userSlice.reducer;
