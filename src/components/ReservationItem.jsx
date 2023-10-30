import styled from 'styled-components';
import Colors from '../style/Colors';
import { useState } from 'react';
import MUIModal from './RegisterModal';

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

// 병원 이름
const HospitalName = styled.div`
  font-family: 'Noto Sans KR Bold';
  font-size: 14px;
  font-weight: 700;
  color: ${Colors.BLACK100};
`;

// 접수 시간
const ReservationTime = styled.div`
  font-family: 'Noto Sans KR Medium';
  font-size: 11px;
  font-weight: 500;
  color: ${Colors.BLACK100};
`;

// 증상 & 추가 참고 사항
const InnerFrame1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;

  .divider {
    width: 1px;
    height: 8px;
    background-color: ${Colors.BLACK12};
  }
`;

// 증상
const Symptom = styled.div`
  font-family: 'Noto Sans KR Medium';
  font-size: 11px;
  color: ${Colors.BLACK100};
`;

// 추가 참고 사항
const Note = styled.div`
  font-family: 'Noto Sans KR Medium';
  font-size: 11px;
  color: ${Colors.BLACK100};
`;

// 오른쪽 상자
const RightFrame = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// 대기자 수 & 접수 버튼
const InnerFrame2 = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

  width: 70px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
  hospitalName,
  reservationTime,
  symptom,
  note,
  waitListNum,
  inactive = false,
  buttonType = ButtonType.MAIN,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const buttonClassName = `${buttonType} ${inactive ? 'inactive' : ''}`;

  const handleClick = () => {
    setModalOpen(true);
  };

  return (
    <Container>
      <LeftFrame>
        <HospitalName>{hospitalName}</HospitalName>
        <ReservationTime>
          {`${reservationTime.getHours()}시 ${reservationTime.getMinutes()}분`}에 접수했어요!
        </ReservationTime>
        <InnerFrame1>
          <Symptom>{symptom}</Symptom>
          <div className="divider" />
          <Note>{note}</Note>
        </InnerFrame1>
      </LeftFrame>
      <RightFrame>
        <InnerFrame2>
          <WaitList>내 앞에 </WaitList>
          <WaitListNum>{`${waitListNum}명`}</WaitListNum>
        </InnerFrame2>
        <Button onClick={handleClick} className={buttonClassName}>
          취소하기
        </Button>
      </RightFrame>
      <MUIModal open={isModalOpen} onClose={() => setModalOpen(false)} hospitalName={hospitalName} />
    </Container>
  );
};

export default ListItem;
