export type Appointment = {
  id: number;
  patientName: string;
  doctorName: string;
  date: string;
  approved: boolean;
};

export const appointments: Appointment[] = [];
