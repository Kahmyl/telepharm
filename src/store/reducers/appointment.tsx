import {
  SET_ACTIVE_APPOINTMENTS,
  SET_PENDING_APPOINTMENTS,
} from "../actionTypes";

const initialState: { appointments: any; total: number } = {
  appointments: null,
  total: 0,
};

export const appointments = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_ACTIVE_APPOINTMENTS:
      return {
        ...state,
        appointments: action.appointments,
        total: action.count,
      };
    case SET_PENDING_APPOINTMENTS:
      return {
        ...state,
        appointments: action.appointments,
        total: action.count,
      };
    default:
      return state;
  }
};
