import { useState } from 'react';
import { FormControl, MenuItem, Modal, Select, InputLabel, TextField } from '@mui/material';
import styled from 'styled-components';
import Colors from '../style/Colors';
import MUIButton from './RegisterButton';

// 모달 상자
const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 480px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px;
  gap: 16px;

  background-color: ${Colors.WHITE100};

  .button-area {
    margin-left: auto;
  }
`;

// "병원 이름 - 접수하기"
const HospitalName = styled.div`
  font-family: 'Noto Sans KR Bold';
  font-size: 16px;
  color: ${Colors.BLACK100};
  text-align: left;
`;

const RegisterModal = ({ open, onClose, hospitalName }) => {
  const [symptom, setSymptom] = useState('');
  const [note, setNote] = useState('');

  return (
    <Modal open={open} onClose={onClose}>
      <Container>
        <HospitalName>{hospitalName} - 접수하기</HospitalName>
        <FormControl variant={'standard'} size="small">
          <InputLabel id="demo-simple-select-standard-label">증상</InputLabel>
          <Select
            value={symptom}
            onChange={event => {
              // console.log(event.target.value);
              setSymptom(event.target.value);
            }}
            sx={{ width: '220px' }}
            label={'증상'}
          >
            <MenuItem value={'콧통'}>콧물</MenuItem>
            <MenuItem value={'두통'}>두통</MenuItem>
            <MenuItem value={'복통'}>복통</MenuItem>
          </Select>
        </FormControl>
        <TextField
          variant="standard"
          label={'ex. 알러지, 증상 설명 등'}
          value={note}
          onChange={e => setNote(e.target.value)}
        />
        <div className="button-area">
          <MUIButton onClick={onClose} />
        </div>
      </Container>
    </Modal>
  );
};

export default RegisterModal;
