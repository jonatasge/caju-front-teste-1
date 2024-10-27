import styled, { css } from "styled-components";

export const Button = styled.button<{
  bgColor?: string;
  color?: string;
  size?: "default" | "small";
}>`
  align-items: center;
  border: none;
  cursor: pointer;
  display: flex;

  ${(props) =>
    props.size === "small"
      ? css`
          background-color: ${props.bgColor ?? "none"};
          border-radius: 4px;
          color: ${props.color ?? "#000"};
          font-size: 12px;
          font-weight: normal;
          padding: 8px 16px;
        `
      : ""}

  ${(props) =>
    props.size === "default"
      ? css`
          background-color: ${props.bgColor ?? "#64a98c"};
          border-radius: 36px;
          box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
          color: ${props.color ?? "#fff"};
          font-size: 16px;
          font-weight: 600;
          height: 56px;
          padding: 8px 32px;
        `
      : ""}
`;
