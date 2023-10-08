import React from 'react';
import styled from 'styled-components';
import Colors from '../style/Colors';

const StyledButton = styled.button`
  all: unset;

  width: 70px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;

  font-family: 'Noto Sans KR Bold';
  font-size: 14px;

  color: ${Colors.WHITE100};
  background-color: ${Colors.POINT_DEEP};

  &.main {
    color: ${Colors.WHITE100};
    background-color: ${Colors.POINT_DEEP};

    &:hover {
      background-color: ${Colors.POINT_MEDIUM};
    }

    &.inactive {
      color: ${Colors.BLACK40};
      background-color: ${Colors.GREY00};
    }
  }
`;

export const ButtonType = {
  MAIN: 'main',
};

const RegisterButton = ({ onClick, inactive = false, buttonType = ButtonType.MAIN }) => {
  const buttonClassName = `${buttonType} ${inactive ? 'inactive' : ''}`;

  return (
    <StyledButton onClick={onClick} className={buttonClassName}>
      접수하기
    </StyledButton>
  );
};

export default RegisterButton;
