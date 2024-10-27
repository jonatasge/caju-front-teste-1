import RegistrationCard from "@/components/molecules/RegistrationCard";

export enum Status {
  APPROVED = "APPROVED",
  REMOVED = "REMOVED",
  REPROVED = "REPROVED",
  REVIEW = "REVIEW",
}

export enum Action {
  APPROVE = "APPROVE",
  REMOVE = "REMOVE",
  REPROVE = "REPROVE",
  REVIEW_AGAIN = "REVIEW_AGAIN",
}

export type Column = {
  actions: Action[];
  status: Status;
  title: string;
};

export type Item = {
  data: React.ComponentProps<typeof RegistrationCard>["data"];
  status: Status;
};
