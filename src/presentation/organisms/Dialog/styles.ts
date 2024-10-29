import styled, { css } from "styled-components";

import CardComponent from "@/presentation/atoms/Card";

export const Dialog = styled.div<{ show?: boolean }>`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  transition: all linear 0.15s;
  width: 100%;
  z-index: 999;

  ${(props) =>
    props.show
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
          z-index: -1;
        `}
`;

export const Card = styled(CardComponent)<{ show?: boolean }>`
  border: 0;
  padding: 0;
  transition: all linear 0.15s;
  width: 400px;

  ${(props) =>
    props.show
      ? css``
      : css`
          transform: scale(0);
        `}
`;

export const Header = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 16px;
  text-align: center;
`;

export const Content = styled.div`
  padding: 16px;
`;

export const Actions = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  padding: 16px;
`;
