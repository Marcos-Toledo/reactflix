import config from '../config';

const URL = `${config.API_URL}/videos`;

const create = (objeto) => {
  return fetch(`${URL}`, { 
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(objeto)
  }).then(async res => {

      if (res.ok) return await res.json();

      throw new Error('Não foi possível cadastrar os dados');
    });
}

export default {
  create
}