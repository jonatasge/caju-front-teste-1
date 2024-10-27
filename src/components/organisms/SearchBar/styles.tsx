import styled from "styled-components";

import Button from "@/components/atoms/Button";
import IconButton from "@/components/atoms/IconButton";

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

export const RefreshButton = styled(IconButton)`
  color: #64a98c;
`;

export const AddButton = styled(Button)`
  background-color: #64a98c;
  color: #fff;
`;
