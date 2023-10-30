import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { MainLayout, RootLayout } from './layout/index';
import HospitalList from '../template/HospitalList';
import ReservationList from '../template/ReservationList';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<MainLayout />}>
        <Route path="/main" element={<HospitalList />} />
        <Route path="/my" element={<ReservationList />} />
      </Route>
    </Route>,
  ),
);

// add '/my'

export default router;
