import styled, { css } from "styled-components";

import CardComponent from "@/presentation/atoms/Card";

export const Toast = styled(CardComponent)<{
  show?: boolean;
  variant?: "info" | "error" | "success";
}>`
  border: none;
  top: 32px;
  margin: 0;
  position: fixed;
  left: 50%;
  transition: all linear 0.15s;
  transform: translate(-50%, 0%);
  width: 300px;
  z-index: 999;

  ${(props) =>
    props.show
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
          transform: translate(-50%, -50%);
          z-index: -1;
        `}

  /* variant */
  ${(props) =>
    props.variant === "info"
      ? css`
          background-color: var(--toast-info);
          color: var(--on-toast-info);
        `
      : ""}
      
  ${(props) =>
    props.variant === "error"
      ? css`
          background-color: var(--toast-error);
          color: var(--on-toast-error);
        `
      : ""}

  ${(props) =>
    props.variant === "success"
      ? css`
          background-color: var(--toast-success);
          color: var(--on-toast-success);
        `
      : ""}
`;
