import styled from 'styled-components';
import Colors from '../style/Colors';

// 가로 큰 상자
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
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
  font-family: 'Noto Sans KR Medium';
  font-size: 11px;
  color: ${props => (props.isClosed ? Colors.POINT_DEEP : Colors.BLACK80)};
`;

// 주소
const Address = styled.div`
  font-family: 'Noto Sans KR Medium';
  font-size: 11px;
  color: ${Colors.BLACK40};
`;

// 오른쪽 상자
const RightFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

// 대기자 수 & 접수 버튼
const InnerFrame2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: fit-content;
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
  all: unset;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 30px;
  border-radius: 4px;
  padding: 4px, 10px, 4px, 10px;
  cursor: pointer;

  font-family: 'Noto Sans KR Bold';
  font-size: 13px;
  color: ${Colors.WHITE100};
  background-color: ${Colors.POINT_DEEP};

  &.main {
    color: ${Colors.WHITE100};
    background-color: ${Colors.POINT_DEEP};

    &.inactive {
      color: ${Colors.BLACK40};
      background-color: ${Colors.GREY00};
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
  inactive = false,
  buttonType = ButtonType.MAIN,
}) => {
  const buttonClassName = `${buttonType} ${inactive ? 'inactive' : ''}`;

  const isClosed = visitingHours === '오늘 휴무';

  return (
    <Container>
      <LeftFrame>
        <HospitalType>{hospitalType}</HospitalType>
        <HospitalName>{hospitalName}</HospitalName>
        <InnerFrame1>
          <VisitingHours isClosed={isClosed}>{visitingHours}</VisitingHours>
          <Address>| {address}</Address>
        </InnerFrame1>
      </LeftFrame>
      <RightFrame>
        <InnerFrame2>
          <WaitList>대기자 수: </WaitList>
          <WaitListNum>{waitListNum}</WaitListNum>
        </InnerFrame2>
        <Button onClick={onClick} className={buttonClassName}>
          접수하기
        </Button>
      </RightFrame>
    </Container>
  );
};

export default ListItem;

// change handleClick to onClick?
