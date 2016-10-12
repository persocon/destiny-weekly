import fetch from 'isomorphic-fetch';

const fetchCharacterList = (href) => {
  const url = `http://api.tkrp.net/v2/${href}`;
  return fetch(url)
  .then(response => response.json());
};

export { fetchCharacterList };
