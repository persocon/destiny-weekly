import fetch from 'isomorphic-fetch';

const fnFetch = (href) => {
  const url = `http://api.tkrp.net/v2/${href}`;
  return fetch(url)
  .then(response => response.json());
};

export { fnFetch };
