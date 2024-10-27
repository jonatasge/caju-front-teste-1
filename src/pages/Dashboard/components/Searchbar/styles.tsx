import styled from "styled-components";

import IconButtonComponent from "@/components/atoms/IconButton";

export const Container = styled.div`
  align-items: center;
  display: flex;
  gap: 16px;
  justify-content: space-between;
`;

export const Actions = styled.div`
  align-items: center;
  display: flex;
  gap: 16px;
  justify-content: flex-end;
`;

export const IconButton = styled(IconButtonComponent)`
  color: #64a98c;
`;
