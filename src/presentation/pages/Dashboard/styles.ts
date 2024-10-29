import styled, { css } from "styled-components";

import { RegistrationStatus } from "@/domain/Registration";
import Button from "@/presentation/atoms/Button";
import Columns from "@/presentation/organisms/Columns";
import { Action } from "@/presentation/templates/Dashboard/types";

export const Container = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

export const Column = styled(Columns.Column)<{ $status: RegistrationStatus }>`
  ${(props) =>
    props.$status === RegistrationStatus.REVIEW
      ? css`
          background-color: #fdf8e9;
          color: #efc24d;
        `
      : ""}

  ${(props) =>
    props.$status === RegistrationStatus.APPROVED
      ? css`
          background-color: #eeeefd;
          color: #4242df;
        `
      : ""}

  ${(props) =>
    props.$status === RegistrationStatus.REPROVED
      ? css`
          background-color: #fbedf6;
          color: #ce2893;
        `
      : ""}
`;

export const ActionButton = styled(Button)<{ $action: Action }>`
  ${(props) =>
    props.$action === Action.REPROVE
      ? css`
          background-color: rgb(255, 145, 154);
        `
      : ""}

  ${(props) =>
    props.$action === Action.APPROVE
      ? css`
          background-color: rgb(155, 229, 155);
        `
      : ""}

  ${(props) =>
    props.$action === Action.REVIEW_AGAIN
      ? css`
          background-color: #ff8858;
        `
      : ""}
`;
