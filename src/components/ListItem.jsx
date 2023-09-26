import styled from 'styled-components';
import Colors from '../style/Colors';

// 가로 큰 상자
const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.08);
`;

// 왼쪽 상자
const LeftFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

// 병원 종류
const HospitalType = styled.div`
  font-family: 'Noto Sans KR Regular';
  font-size: 11px;
  color: ${Colors.BLACK40};
`;

// 병원 이름
const HospitalName = styled.div`
  font-family: 'Noto Sans KR Bold';
  font-size: 14px;
  font-weight: 700;
  color: ${Colors.BLACK100};
`;

// 방문시간 & 주소
const InnerFrame1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

// 방문시간
const VisitingHours = styled.div`
  font-family: 'Noto Sans KR Regular';
  font-size: 11px;
  color: ${Colors.BLACK80};
`;

// 주소
const Address = styled.div`
  font-family: 'Noto Sans KR Regular';
  font-size: 11px;
  color: ${Colors.BLACK40};
`;

// 오른쪽 상자
const RightFrame = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

// 대기자 수 & 접수 버튼
const InnerFrame2 = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

// "대기자 수:"
const WaitList = styled.div`
  font-family: 'Noto Sans KR Regular';
  font-size: 11px;
  color: ${Colors.BLACK60};
`;

// 대기자 수
const WaitListNum = styled.div`
  font-family: 'Noto Sans KR Regular';
  font-size: 11px;
  font-weight: 700;
  color: ${Colors.BLACK100};
`;

// 접수 버튼
const Button = styled.button`
  //display: flex;
  //flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.08);

  &.main {
    width: 70px;
    height: 30px;
    padding: 4px, 10px, 4px, 10px;
    background-color: ${Colors.POINT_DEEP};

    font-family: 'Noto Sans KR Regular';
    font-size: 13px;

    .title {
      color: ${Colors.WHITE100};
    }

    &.inactive {
      background-color: ${Colors.GREY00};
      .title {
        color: ${Colors.BLACK40};
      }
    }
  }
`;

export const ButtonType = {
  MAIN: 'main',
};

const ListItem = ({
  hospitalType,
  hospitalName,
  visitingHours,
  address,
  waitListNum,
  onClick,
  inactive = true,
  buttonType = ButtonType.MAIN,
}) => {
  const buttonClassName = `${buttonType} ${inactive ? 'inactive' : ''}`;
  const handleClick = () => {
    if (!inactive) onClick();
  };

  return (
    <Container>
      <LeftFrame>
        <HospitalType>{hospitalType}</HospitalType>
        <HospitalName>{hospitalName}</HospitalName>
        <InnerFrame1>
          <VisitingHours>{visitingHours}</VisitingHours>
          <Address>| {address}</Address>
        </InnerFrame1>
      </LeftFrame>
      <RightFrame>
        <InnerFrame2>
          <WaitList>대기자 수: </WaitList>
          <WaitListNum>{waitListNum}</WaitListNum>
        </InnerFrame2>
        <Button onClick={handleClick} className={buttonClassName}>
          접수하기
        </Button>
      </RightFrame>
    </Container>
  );
};

export default ListItem;
