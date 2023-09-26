import React from 'react';
import styled from 'styled-components';
import MUITest from '../components/MUITest';
import ListItem from '../components/ListItem';
import Chip from '../components/Chip';
import Colors from '../style/Colors';

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

const UpperContainer = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const HospitalList = () => {
  return (
    <Container>
      <UpperContainer>
        <Chip label="전체" inactive={false} />
        <Chip label="내과" inactive />
        <Chip label="이비인후과" inactive />
      </UpperContainer>

      <ListItem
        hospitalType="내과"
        hospitalName="이희찬 내과"
        visitingHours="오늘 09:00 ~ 18:00"
        address="대전 서구 만년동"
        waitListNum={'3명'}
      />
    </Container>
  );
};

export default HospitalList;
