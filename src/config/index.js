const API_URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:3004'
  : 'https://toledoflix.herokuapp.com';

export default { 
  API_URL
};