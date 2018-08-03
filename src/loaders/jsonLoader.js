const validateResponse = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

const getJson = response => response.json();

const awaitPromise = (msecs) => (
  results => new Promise(resolve => setTimeout(() => resolve(results), msecs))
);

const jsonLoader = (url, getData) => {
  return fetch(url)
    .then(validateResponse)
    .then(getJson)
    .then(getData)
    .then(awaitPromise(1));
};

export default jsonLoader;
