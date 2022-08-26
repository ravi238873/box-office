import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAPI } from '../misc/config';

const Show = () => {
  const { id } = useParams();

  const [show, setShow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    getAPI(`/shows/${id}?embed[]=episodes&embed[]=cast`)
      .then(results => {
        if (isMounted) {
          setShow(results);
          setIsLoading(false);
        }
      })
      .catch(err => {
        if (isMounted) {
          setError(err.message);
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  console.log(show);

  if (isLoading) {
    return <div>Data is being Loaded</div>;
  }

  if (error) {
    return <div>Errro Occured: {error}</div>;
  }

  return <div>This is Show Page</div>;
};

export default Show;
