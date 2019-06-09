const Fetch = async url => {
  // eslint-disable-next-line no-undef
  let response = await fetch(`http://api.alquran.cloud/v1${url}`, {
    method: 'get'
  });
  response = await response.json();
  return response;
};

export default Fetch;
