import config from '../config';

const URL = `${config.API_URL}/categorias`;

const getAll = () => {
  return fetch(URL)
    .then(async res => {

      if (res.ok) return await res.json();

      throw new Error('Não foi possível pegar os dados');
    });
}

const getAllWithVideos = () => {
  return fetch(`${URL}?_embed=videos`)
    .then(async res => {

      if (res.ok) return await res.json();

      throw new Error('Não foi possível pegar os dados');
    });
}

export default {
  getAll,
  getAllWithVideos
}