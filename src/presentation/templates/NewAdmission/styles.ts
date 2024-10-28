import styled from "styled-components";

import ButtonComponent from "@/presentation/atoms/Button";
import CardComponent from "@/presentation/atoms/Card";
import ContainerComponent from "@/presentation/atoms/Container";
import IconButtonComponent from "@/presentation/atoms/IconButton";

export const Container = styled(ContainerComponent)`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
`;

export const Card = styled(CardComponent)`
  padding: 48px;
  width: 500px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Button = styled(ButtonComponent)`
  align-self: flex-end;
`;

export const IconButton = styled(IconButtonComponent)`
  align-items: flex-start;
  margin-bottom: 16px;
`;
