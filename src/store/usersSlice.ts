import { IAlbums } from "./../interfaces/albums";
import { IPosts } from "./../interfaces/posts";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../interfaces/user";
import axios from "axios";
import { JSONPlaceholder } from "../constants/api-constants";
import {
  FetchInfoError,
  IInfo,
  ResponseType,
  UsersState,
} from "../types/usersSlice";

export const fetchInfo = createAsyncThunk<
  ResponseType,
  IInfo,
  { rejectValue: FetchInfoError }
>("users/fetchInfo", async (request: IInfo, thunkApi) => {
  const response = await axios.get(
    `${JSONPlaceholder}${request.requestName}${
      request.userId ? `?${request.path}=${request.userId}` : ""
    }`
  );

  if (response.status !== 200) {
    return thunkApi.rejectWithValue({
      message: "Failed to fetch info.",
    });
  }

  const data: IUser[] | IPosts[] | IAlbums[] = await response.data;

  return { data: data, request: request.requestName };
});

const initialState: UsersState = {
  users: [],
  status: "idle",
  error: null,
  posts: [],
  albums: [],
};

const usersSlice = createSlice({
  name: "users",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchInfo.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(fetchInfo.fulfilled, (state, { payload }) => {
      state[payload.request] = [...payload.data];
      state.status = "idle";
    });

    builder.addCase(fetchInfo.rejected, (state, { payload }) => {
      if (payload) state.error = payload.message;
      state.status = "idle";
    });
  },
});

export default usersSlice.reducer;
