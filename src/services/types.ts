export type createAccountType = {
  name: string;
  email: string;
  password: string;
  phone_number: string;
  is_doctor: boolean;
};

export type loginAccountType = {
  email: string;
  password: string;
};

export type CreateAppointmentType = {
  symptoms: string;
  duration: string;
  is_on_medication: string;
  has_drug_allergy: string;
  has_previous_condition: string;
  patient_id: string;
  doctor_id: string;
  type: string;
  medication: string;
  drug_allergy: string;
  previous_condition: string;
};

export type ToggleAppointmentType = {
    status: string
}