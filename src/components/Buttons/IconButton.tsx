import styled from "styled-components";

export const _IconButtonStyled = styled.button`
  align-items: center;
  background-color: transparent;
  border-radius: 24px;
  border: 2px solid #64a98c;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 4px;
  width: fit-content;

  svg {
    color: #64a98c;
  }
`;

type IconButtonProps = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>;

export const IconButton = (props: IconButtonProps) => {
  return (
    <_IconButtonStyled {...props}>
      {props.children}
    </_IconButtonStyled>
  );
};
