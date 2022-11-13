import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  user: {
    isAuth: false, // default value - false. After success login - true
    name: "", // default value - empty string. After success login - name of user
    email: "", // default value - empty string. After success login - email of user
    token: "", // default value - empty string or token value from localStorage. After success login - value from API /login response.
  },
  // todo: initialize this courses to empty array, delete mock data
  courses: [
    {
      id: "de5aaa59-90f5-4dbc-b8a9-aaf205c551ba",
      title: "JavaScript",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                  has been the industry's standard dummy text ever since the 1500s, when an unknown 
                  printer took a galley of type and scrambled it to make a type specimen book. It has survived 
                  not only five centuries, but also the leap into electronic typesetting, remaining essentially u
                  nchanged.`,
      creationDate: "08/03/2021",
      duration: 160,
      authors: [
        "27cc3006-e93a-4748-8ca8-73d06aa93b6d",
        "f762978b-61eb-4096-812b-ebde22838167",
      ],
    },
  ], // list of courses. Default value - empty array. After success getting courses - value from API /courses/all response.
  authors: [], //  list of authors. Default value - empty array. After success getting authors - value from API /authors/all response.
};

const courses = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, action) => {
      console.log("action.type");
      console.log(action.type);
      state.courses = [action.payload, ...state.courses];
    },
  },
});

export const { addCourse } = courses.actions;
export default courses.reducer;
