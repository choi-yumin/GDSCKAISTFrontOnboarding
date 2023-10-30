import { atom } from 'recoil';

/**
 * List of below object
 * hospitalName: string
 * symtom: string
 * note: string
 * reserveTime: Date
 */
const reservationAtom = atom({
  key: 'reservationData',
  default: [],
});

export default reservationAtom;
