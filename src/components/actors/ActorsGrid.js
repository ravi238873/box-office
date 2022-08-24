import React from 'react';
import ActorsCard from './ActorsCard';

import IMAGE_NOT_FOUND from '../../images/not-found.png';

const ActorsGrid = ({ data }) => {
  return (
    <div>
      {data.map(({ person }) => (
        <ActorsCard
          key={person.id}
          name={person.name}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          deathday={person.deathday}
          gender={person.gender}
          image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
        />
      ))}
    </div>
  );
};

export default ActorsGrid;
