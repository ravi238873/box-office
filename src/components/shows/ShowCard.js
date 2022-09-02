import React from 'react';
import { Link } from 'react-router-dom';

import { StyledShowCard } from './ShowCard.styled';
import { Star } from '../styled';

const ShowCard = ({ id, image, name, summary, onStarredClick, isStarred }) => {
  const summaryAsText = summary
    ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')}...`
    : 'No description';

  return (
    <StyledShowCard>
      <div>
        <img className="img-wrapper" src={image} alt="show" />
      </div>

      <h1>{name}</h1>

      <p>{summaryAsText}</p>

      <div className="btns">
        <Link to={`/show/${id}`}>Read more</Link>
        <button onClick={onStarredClick} type="button">
          <Star active={isStarred} />
        </button>
      </div>
    </StyledShowCard>
  );
};

export default ShowCard;
