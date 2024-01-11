import React from 'react';
import '../PhonePage/PhonesPage.scss';
import '../../App.scss';
import { BackLink } from '../BackLink/BackLink';

export const NotFoundPage = () => {
  return (
    <div className="page">
      <BackLink text="Page" link={null} />
      <h1 className="phones__title">Page is not exist</h1>
    </div>
  );
};
