import styled from 'styled-components';
import Colors from '../style/Colors';

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  border-width: 1px;
  border-radius: 8px;
  text-align: center;

  &.main {
    width: 39px;
    height: 24px;
    top: 20px;
    left: 20px;
    padding: 4px, 8px, 4px, 8px;
    background-color: ${Colors.POINT_DEEP};

    font-family: 'Noto Sans';
    font-size: 12px;

    .title {
      color: ${Colors.WHITE100};
    }

    &.inactive {
      background-color: ${Colors.WHITE100};
      border-color: ${Colors.POINT_MEDIUM};
      .title {
        color: ${Colors.POINT_MEDIUM};
      }
    }
  }
`;

export const ButtonType = {
  MAIN: 'main',
};

const Chip = ({ label, onClick, inactive = true, buttonType = ButtonType.MAIN }) => {
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
