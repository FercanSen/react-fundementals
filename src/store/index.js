import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  user: {
    isAuth: false, // default value - false. After success login - true
    name: "", // default value - empty string. After success login - name of user
    email: "", // default value - empty string. After success login - email of user
    token: "", // default value - empty string or token value from localStorage. After success login - value from API /login response.
  },
  // todo: initialize this courses to an empty array, delete mock data
  courses: [], // list of courses. Default value - empty array. After success getting courses - value from API /courses/all response.
  // todo: initialize this authors to empty an array, delete mock data
  authors: [], //  list of authors. Default value - empty array. After success getting authors - value from API /authors/all response.
};

const courses = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, action) => {
      state.courses = [action.payload, ...state.courses];
    },
    addAuthor: (state, action) => {
      state.authors = action.payload;
    },
    deleteCourse: (state, action) => {
      const indexOfObject = state.courses.findIndex((object) => {
        return object.id === action.payload;
      });
      state.courses.splice(indexOfObject, 1);
    },
    createAuthor: (state, action) => {
      state.authors = [action.payload, ...state.authors];
    },
    saveUser: (state, action) => {
      state.user = {
        isAuth: action.payload[0],
        name: action.payload[1],
        email: action.payload[2],
        token: action.payload[3],
      };
    },
  },
});

export const { addCourse } = courses.actions;
export const { addAuthor } = courses.actions;
export const { deleteCourse } = courses.actions;
export const { createAuthor } = courses.actions;
export const { saveUser } = courses.actions;
export default courses.reducer;
