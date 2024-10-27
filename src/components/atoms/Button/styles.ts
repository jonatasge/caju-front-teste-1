import styled, { css } from "styled-components";

export const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => !["size"].includes(prop),
})<{ size?: "default" | "small" }>`
  align-items: center;
  border: none;
  cursor: pointer;
  display: flex;

  ${(props) =>
    props.size === "default"
      ? css`
          border-radius: 36px;
          box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
          font-size: 1rem;
          font-weight: 600;
          height: 56px;
          padding: 8px 32px;
        `
      : ""}

  ${(props) =>
    props.size === "small"
      ? css`
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: normal;
          padding: 8px 16px;
        `
      : ""}
`;
