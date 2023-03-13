import { useEffect, useState } from 'react';

const Usefetch = url => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((actualData) => setData(actualData));
  }, [url]);
  return { data };
};

export default Usefetch;
