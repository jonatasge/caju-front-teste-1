import styled from "styled-components";

export const Column = styled.div<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor ?? "#ddd"};
  border-radius: 32px;
  flex: 1 1 200px;
  height: auto;
  min-height: calc(100vh - 192px);
`;
