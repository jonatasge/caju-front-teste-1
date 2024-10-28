import styled, { css } from "styled-components";

import Columns from "@/components/organisms/Columns";
import { Action, Status } from "./types";
import Button from "@/components/atoms/Button";

export const Container = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

export const Column = styled(Columns.Column)<{ $status: Status }>`
  ${(props) =>
    props.$status === Status.REVIEW
      ? css`
          background-color: #fdf8e9;
          color: #efc24d;
        `
      : ""}

  ${(props) =>
    props.$status === Status.APPROVED
      ? css`
          background-color: #eeeefd;
          color: #4242df;
        `
      : ""}

  ${(props) =>
    props.$status === Status.REPROVED
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
