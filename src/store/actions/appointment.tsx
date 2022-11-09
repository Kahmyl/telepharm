import { Dispatch } from "redux";
import { Requests } from "../../services/requests";
import {
  SET_ACTIVE_APPOINTMENTS,
  SET_PENDING_APPOINTMENTS,
} from "../actionTypes";

const setActiveAppointments = (appointments: any[], count: number) => ({
  type: SET_ACTIVE_APPOINTMENTS,
  appointments,
  count,
});

const setPendingAppointments = (appointments: any[], count: number) => ({
  type: SET_PENDING_APPOINTMENTS,
  appointments,
  count,
});

export const getAppointments = (status: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await new Requests().fetchAllAppointments();
      const data = response.data;
      status === "active"
        ? dispatch(
            setActiveAppointments(
              data.active_appointments,
              data.number_of_active_appointments
            )
          )
        : dispatch(
            setPendingAppointments(
              data.pending_appointments,
              data.number_of_pending_appointments
            )
          );
    } catch (err: any) {
      throw err;
    }
  };
};
