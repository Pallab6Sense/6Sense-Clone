import { useEffect, useState } from 'react';

export default function Usefetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((actualData) => setData(actualData));
  }, [url]);
  return { data };
}
