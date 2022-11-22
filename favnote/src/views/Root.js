import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import { routes } from 'routes';
import Twitters from './Twitters';
import Notes from './Notes';
import Articles from './Articles';
import DetailsPage from './DetailsPage';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Routes>
        <Route path={routes.home} element={<Navigate to={routes.notes} />} />
        <Route path={routes.notes} element={<Notes />} />
        <Route path={routes.note} element={<DetailsPage />} />
        <Route path={routes.articles} element={<Articles />} />
        <Route path={routes.article} element={<DetailsPage />} />
        <Route path={routes.twitters} element={<Twitters />} />
        <Route path={routes.twitter} element={<DetailsPage />} />
      </Routes>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
