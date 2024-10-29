export enum RegistrationStatus {
  APPROVED = "APPROVED",
  REMOVED = "REMOVED",
  REPROVED = "REPROVED",
  REVIEW = "REVIEW",
}

export interface Registration {
  admissionDate: string;
  cpf: string;
  email: string;
  employeeName: string;
  id: string;
  status: RegistrationStatus;
}
