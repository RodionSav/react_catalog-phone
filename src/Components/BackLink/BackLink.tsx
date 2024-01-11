import React from 'react';
import { NavLink } from 'react-router-dom';
import './backlink.scss';

type Props = {
  text: string;
  link: string | null;
};

export const BackLink: React.FC<Props> = ({
  text,
  link,
}) => {
  return (
    <div className="back">
      <NavLink
        className="back__link"
        to="/"
      />
      <div className="back-arrow" />
      <h1 className="back__title">
        {link ? (
          <NavLink
            to={`/${link}`}
            className="back__title__link"
          >
            {text}
          </NavLink>
        ) : (
          <>{text}</>
        )}
      </h1>
    </div>
  );
};
