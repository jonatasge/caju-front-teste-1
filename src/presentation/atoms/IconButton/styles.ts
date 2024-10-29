import styled, { css } from "styled-components";

export const IconButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !["size", "variant"].includes(prop),
})<{ size?: "default" | "small"; variant?: "primary" | "none" }>`
  align-items: center;
  background-color: transparent;
  border-radius: 24px;
  border: 2px solid;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 4px;
  width: fit-content;

  /* size */
  ${(props) =>
    props.size === "default"
      ? css`
          font-size: 1.5rem;
        `
      : ""}

  ${(props) =>
    props.size === "small"
      ? css`
          font-size: 1rem;
        `
      : ""}

  /* variant */
  ${(props) =>
    props.variant === "primary"
      ? css`
          color: var(--primary);
        `
      : ""}
      
  * {
    color: content;
  }
`;
