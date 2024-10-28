import styled, { css } from "styled-components";

export const Loading = styled.div<{
  show?: boolean;
}>`
  align-items: center;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  transition: all linear 0.25s;
  width: 100%;
  z-index: 99999;

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
