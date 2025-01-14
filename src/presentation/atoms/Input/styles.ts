import styled from "styled-components";

export const Input = styled.input`
  background-color: #ffffff;
  border-radius: 2px;
  border-radius:8px;
  border: 1px solid rgba(36, 28, 21, 0.3);
  font-size: 1rem;
  font-weight: normal;
  line-height: 18px;
  min-height: 36px;
  padding: 0 8px;
  transition: all 0.2s ease-in-out 0s;
  vertical-align: middle;
  width: 100%;

  :focus {
    border: 1px solid #007c89;
    box-shadow: inset 0 0 0 1px #007c89;
  }
`;