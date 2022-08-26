import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAPI } from '../misc/config';

const Show = () => {
  const { id } = useParams();

  const [show, setShow] = useState(null);

  useEffect(() => {
    getAPI(`/shows/${id}?embed[]=episodes&embed[]=cast`).then(results => {
      setShow(results);
    });
  }, [id]);

  console.log(show);

  return <div>This is Show Page</div>;
};

export default Show;
