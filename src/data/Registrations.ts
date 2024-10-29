import { RegistrationStatus } from "@/domain/Registration";
import { HttpRequest } from "../infra/HttpRequest";

class Registrations extends HttpRequest<any> {
  constructor() {
    super({ path: "/registrations" });
  }

  post(data: any) {
    return super.post({ ...data, status: RegistrationStatus.REVIEW });
  }
}

export const registrations = new Registrations();
