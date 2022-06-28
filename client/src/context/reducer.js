/* eslint-disable no-case-declarations */
import { REGISTER, LOGIN, SET_ALERT, REMOVE_ALERT } from "./constants";

export const initialState = {
  isAuth: localStorage.getItem("isAuth") ? JSON.parse(localStorage.getItem("isAuth")) : false,
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {},
  alerts: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case REGISTER:
    case LOGIN:
      const user = { _id: action.payload._id, token: action.payload.token };
      localStorage.setItem("isAuth", JSON.stringify(true));
      localStorage.setItem("user", JSON.stringify(user));
      return {
        isAuth: true,
        user: user
      };
    case SET_ALERT:
      console.log(action.payload);
      const alerts = state.alerts;
      alerts.push(action.payload);
      return {
        ...state,
        alerts
      };
    case REMOVE_ALERT:
      const newAlerts = state.alerts.filter((alert) => alert.id !== action.payload);
      return {
        ...state,
        alerts: newAlerts
      };
  }
  return state;
};

export default reducer;