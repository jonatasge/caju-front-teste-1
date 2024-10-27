import styled, { css } from "styled-components";

import Columns from "@/components/organisms/Columns";
import { Status } from "./types";

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
