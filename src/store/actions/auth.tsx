import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dispatch } from "redux";
import { Requests } from "../../services/requests";
import { createAccountType, loginAccountType } from "../../services/types";
import {
  SET_AUTH_TYPE,
  SET_AUTO_LOGIN_TYPE,
  SET_LOGOUT_TYPE,
} from "../actionTypes";

export const setAuthType = (user: object) => ({
  type: SET_AUTH_TYPE,
  user,
});

export const setAutoLogin = () => ({
  type: SET_AUTO_LOGIN_TYPE,
});

export const setLogoutType = () => ({
  type: SET_LOGOUT_TYPE,
});

export const createUser = (value: createAccountType) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await new Requests().createAccount(value);
      const data = response.data;
      dispatch(setAuthType(data));
      await AsyncStorage.setItem("token", data.token);
      return data;
    } catch (err: any) {
      throw err;
    }
  };
};

export const loginUser = (value: loginAccountType) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await new Requests().loginAccount(value);
      const data = response.data;
      dispatch(setAuthType(data));
      await AsyncStorage.setItem("token", data.token);
      return data;
    } catch (err: any) {
      throw err;
    }
  };
};
