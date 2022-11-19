import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Twitters from './Twitters';
import Notes from './Notes';
import Articles from './Articles';
import DetailsPage from './DetailsPage';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Routes>
        <Route path="/" element={<Navigate to="/notes" />} />
        <Route path="notes/" element={<Notes />} />
        <Route path="notes/:id" element={<DetailsPage />} />
        <Route path="articles/" element={<Articles />} />
        <Route path="articles/:id" element={<DetailsPage />} />
        <Route path="twitters/" element={<Twitters />} />
        <Route path="twitters/:id" element={<DetailsPage />} />
      </Routes>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
