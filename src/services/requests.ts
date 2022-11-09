import api from "./api";
import {
  createAccountType,
  CreateAppointmentType,
  loginAccountType,
  ToggleAppointmentType,
} from "./types";

export class Requests {
  constructor(
    private readonly get = api.get,
    private readonly post = api.post,
    private readonly put = api.put
  ) {}

  loginAccount(data: loginAccountType) {
    return this.post("/login", data);
  }

  createAccount(data: createAccountType) {
    return this.post("/register", data);
  }

  fetchAllDoctors() {
    return this.get("/doctor");
  }

  createAppointment(data: CreateAppointmentType) {
    return this.post("/appointments", data);
  }

  fetchAllAppointments() {
    return this.get("/appointments");
  }

  fetchSingleAppointment(id: number) {
    return this.get(`/appointments/${id}`);
  }

  toggleAppointment(appointment_id: number, data: ToggleAppointmentType) {
    return this.post(`/doctor/appointment/${appointment_id}`, data);
  }
}
