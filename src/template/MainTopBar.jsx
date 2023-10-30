import React from 'react';
import styled from 'styled-components';
import Colors from '../style/Colors';
import { useLocation, useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  padding: 16px;
  background-color: ${Colors.WHITE100};
  border-radius: 8px;
  align-items: center;
  gap: 8px;

  .title {
    font-family: 'Noto Sans KR Bold';
    font-size: 24px;
    margin-right: auto;
  }

  .button {
    font-family: 'Noto Sans KR Bold';
    font-size: 24px;
    cursor: pointer;
    color: ${Colors.BLACK40};

    &.selected {
      color: ${Colors.BLACK100};
    }
  }
`;

const MainTopBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Container>
      <h1 className="title">MedicalBook</h1>
      <div className={`button ${location.pathname === '/main' ? 'selected' : ''}`} onClick={() => navigate('/main')}>
        홈
      </div>
      <div className={`button ${location.pathname === '/my' ? 'selected' : ''}`} onClick={() => navigate('/my')}>
        내 예약
      </div>
    </Container>
  );
};

export default MainTopBar;
