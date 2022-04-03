import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';

import Cookies from 'js-cookie';
import StorageKeys from '../../constants/storage-keys';
// import { verify } from 'jsonwebtoken';
import jwt_decode from 'jwt-decode';

export const login = createAsyncThunk('user/login', async (payload, { rejectWithValue }) => {
  const response = await userApi.login(payload);
  let token = await response.data.token;
  if (!token) {
    return rejectWithValue({
      success: 0,
      message: 'Account or password is incorrect.',
    });
  }
  const decoded = jwt_decode(token, 'EUR-KYZTQ-2021');
  console.log(decoded);
  if (decoded.role !== 'guest' || !decoded.activated) {
    return rejectWithValue({
      success: 0,
      message: 'Account or password is incorrect.',
    });
  }
  Cookies.set(StorageKeys.TOKEN, response.data.token, { expires: 14 });
  return response.data;
});
export const changePassword = createAsyncThunk('user/changePassword', async (payload) => {
  const response = await userApi.changePassword(payload);
  return response.data;
});
export const getMe = createAsyncThunk('user/getMe', async () => {
  const response = await userApi.getMe();
  return response.data;
});
export const editMe = createAsyncThunk('user/editMe', async (payload) => {
  const response = await userApi.editMe(payload);
  return response;
});
export const logout = createAsyncThunk('user/logout', async () => {
  await userApi.logout();
  Cookies.remove(StorageKeys.TOKEN);
  return;
});
export const forgotPassword = createAsyncThunk('user/forgotPassword', async (payload) => {
  const response = await userApi.forgotPassword(payload);
  return response.data;
});
export const urlServer = 'http://localhost:5004';
const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},
    setting: {},
    avatar: '',
    loading: false,
    error: false,
  },

  extraReducers: {
    [getMe.pending]: (state) => {
      state.loading = true;
    },
    [getMe.fulfilled]: (state, action) => {
      state.current = action.payload;
      if (action.payload.profile?.photo) {
        state.avatar = urlServer + '/images/users/' + action.payload.profile.photo;
      }
      state.loading = false;
    },
    [getMe.rejected]: (state) => {
      state.loading = false;
      state.current = {};
      state.error = true;
      Cookies.remove(StorageKeys.TOKEN);
    },
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [editMe.fulfilled]: (state, action) => {
      // console.log(action);
      if (action.payload.data.profile?.photo) {
        state.avatar = urlServer + '/images/users/' + action.payload.data.profile.photo;
      }
    },
    [logout.fulfilled]: (state) => {
      state.loading = false;
      state.current = {};
      state.error = false;
    },
  },
});
const { actions, reducer } = userSlice;
export const { changeGroupCurrent, changeSkillMock, changeSkillMiddle, changeSkillFinal, changeSkill } =
  actions;
export default reducer;
