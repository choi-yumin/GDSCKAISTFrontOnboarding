import React from 'react';
import styled from 'styled-components';
import ReservationItem from '../components/ReservationItem';
import Colors from '../style/Colors';
import { useRecoilValue } from 'recoil';
import reservationAtom from '../store/reservationAtom';

const Container = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  padding: 24px 16px 24px 16px;
  background-color: ${Colors.WHITE100};
  border-radius: 8px;
  gap: 16px;
  align-items: center;

  .title {
    font-family: 'Noto Sans KR Bold';
    font-size: 24px;
  }
`;

const ReservationList = () => {
  const reservationList = useRecoilValue(reservationAtom);

  return (
    <Container>
      {reservationList.map(item => (
        <ReservationItem
          hospitalName={item.hospitalName}
          reservationTime={item.reserveTime}
          symptom={item.symptom}
          note={item.note}
          waitListNum="3"
        />
      ))}
    </Container>
  );
};

export default ReservationList;
