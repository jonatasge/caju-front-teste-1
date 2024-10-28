import styled from "styled-components";

import CardComponent from "@/components/atoms/Card";
import TitleComponent from "@/components/atoms/Title";

export const Card = styled(CardComponent)`
  color: black;
`;

export const IconAndText = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
`;

export const Title = styled(TitleComponent)`
  font-size: 1.125rem;
  margin: 0;
`;

export const Actions = styled.div`
  align-items: center;
  display: flex;
  gap: 4px;
  justify-content: space-between;
  margin-top: 8px;

  * {
    cursor: pointer;
  }
`;
