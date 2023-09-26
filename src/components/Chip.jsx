import React from 'react';
import styled from 'styled-components';
import Colors from '../style/Colors';

const Button = styled.button`
  all: unset;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-width: 1px;
  border-radius: 8px;
  padding: 4px 8px;

  font-family: 'Noto Sans KR Regular';
  font-size: 12px;
  color: ${Colors.WHITE100};

  &.main {
    color: ${Colors.WHITE100};
    background-color: ${Colors.POINT_DEEP};
    border: 1px solid ${Colors.POINT_DEEP};

    &.inactive {
      color: ${Colors.POINT_DEEP};
      background-color: ${Colors.WHITE100};
      border: 1px solid ${Colors.POINT_DEEP};
    }
  }
`;

export const ButtonType = {
  MAIN: 'main',
};

const Chip = ({ label, onClick, inactive = false, buttonType = ButtonType.MAIN }) => {
  const buttonClassName = `${buttonType} ${inactive ? 'inactive' : ''}`;
  const handleClick = () => {
    if (!inactive) onClick();
  };

  return (
    <Button onClick={handleClick} className={buttonClassName}>
      {label}
    </Button>
  );
};

export default Chip;
