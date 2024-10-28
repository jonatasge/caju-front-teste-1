import { HttpRequest } from "../infra/HttpRequest";

class Registrations extends HttpRequest<any> {
  constructor() {
    super({ path: "/registrations" });
  }
}

export const registrations = new Registrations();
