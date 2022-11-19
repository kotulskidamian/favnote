import React from 'react';
import { Link } from 'react-router-dom';
import UserPageTemplate from './UserPageTemplate';

const DetailsTemplate = () => (
  <UserPageTemplate>
    <h1>Note</h1>
    <p>
      Sunt do et aute cillum ex tempor commodo adipisicing cupidatat velit esse incididunt sunt.
      Quis incididunt anim et cupidatat id dolor. Ad culpa proident consequat tempor velit ullamco
      exercitation nisi velit laboris deserunt.
    </p>
    <Link to="/">go back!</Link>
  </UserPageTemplate>
);

export default DetailsTemplate;
