import RegistrationCard from "@/presentation/molecules/RegistrationCard";
import { RegistrationStatus } from "@/domain/Registration";

export enum Action {
  APPROVE = "APPROVE",
  REMOVE = "REMOVE",
  REPROVE = "REPROVE",
  REVIEW_AGAIN = "REVIEW_AGAIN",
}

export type Column = {
  actions: Action[];
  status: RegistrationStatus;
  title: string;
};

export type Data = React.ComponentProps<typeof RegistrationCard>["data"];
