import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const initialState = {
  user: {
    isAuth: "", // default value - false. After success login - true
    name: "", // default value - empty string. After success login - name of user
    email: "", // default value - empty string. After success login - email of user
    token: "", // default value - empty string or token value from localStorage. After success login - value from API /login response.
    role: "",
  },
  courses: [], // list of courses. Default value - empty array. After success getting courses - value from API /courses/all response.
  authors: [], //  list of authors. Default value - empty array. After success getting authors - value from API /authors/all response.
};

export const fetchCourses = createAsyncThunk("fetchCourses", async () => {
  const response = await axios.get("http://localhost:4000/courses/all");
  return response.data.result[0];
});

export const fetchAuthors = createAsyncThunk("fetchAuthors", async () => {
  const response = await axios.get("http://localhost:4000/authors/all");
  return response.data.result;
});

export const swaggerLogout = createAsyncThunk("swaggerLogout", async () => {
  const token = localStorage["userToken"];
  const response = await axios.delete("http://localhost:4000/logout", {
    headers: {
      Authorization: token,
    },
  });
  return response.data.result;
});

export const getCurrentUser = createAsyncThunk("getCurrentUser", async () => {
  if (localStorage["userToken"]) {
    const token = localStorage["userToken"];
    const response = await axios.get("http://localhost:4000/users/me", {
      headers: {
        Authorization: token,
      },
    });
    return response.data.result;
  }
  return;
});

export const deleteCourse = createAsyncThunk("deleteCourse", async (id) => {
  console.log("Course ID: ");
  console.log(id);
  const response = await axios.get(`http://localhost:4000/courses/${id}`);
  console.log(response.data.result);
  return response.data.result;
});

const courses = createSlice({
  name: "courses",
  initialState,
  reducers: {
    // addCourse: (state, action) => {
    //   state.courses = [action.payload, ...state.courses];
    // },
    // addAuthor: (state, action) => {
    //   state.authors = action.payload;
    // },
    // deleteCourse: (state, action) => {
    //   const indexOfObject = state.courses.findIndex((object) => {
    //     return object.id === action.payload;
    //   });
    //   state.courses.splice(indexOfObject, 1);
    // },
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
  extraReducers: (builder) => {
    // Courses
    builder.addCase(fetchCourses.fulfilled, (state, action) => {
      state.courses = [action.payload, ...state.courses];
    });
    builder.addCase(fetchCourses.rejected, () => {
      console.log("fetchCourses rejected");
      console.log("Error Ocurred!");
    });
    // Authors
    builder.addCase(fetchAuthors.fulfilled, (state, action) => {
      state.authors = action.payload;
    });
    builder.addCase(fetchAuthors.rejected, () => {
      console.log("fetchAuthors rejected");
      console.log("Error Ocurred!");
    });
    // User
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(getCurrentUser.rejected, () => {
      console.log("getCurrentUser rejected");
      console.log("Error Ocurred!");
    });
    // Delete Course
    builder.addCase(deleteCourse.fulfilled, (state, action) => {
      const indexOfObject = state.courses.findIndex((object) => {
        return object.id === action.payload.id;
      });
      state.courses.splice(indexOfObject, 1);
    });
    builder.addCase(deleteCourse.rejected, () => {
      console.log("deleteCourse rejected");
      console.log("Error Ocurred!");
    });
  },
});

export const { addCourse } = courses.actions;
// export const { addAuthor } = courses.actions;
// export const { deleteCourse } = courses.actions;
export const { createAuthor } = courses.actions;
export const { saveUser } = courses.actions;
export default courses.reducer;
