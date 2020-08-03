import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categoria';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

const CadastroVideo = () => {
  const objetoVideo = {
    titulo: 'Carreira Front-end - Alura Live #18',
    url: 'https://www.youtube.com/watch?v=Hyv5dY38Ep0',
    categoria: 'Front End'
  }; 
  const history = useHistory();
  const { value, handlerChange, clearForm } = useForm(objetoVideo);
  const [ categorias, setCategorias ] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);

  const handlerSubmit = (e) => {
    e.preventDefault();

    const categoriaEscolhida = categorias.find(categoria => {
      return categoria.titulo === value.categoria;
    });

    videosRepository.create({
      titulo: value.titulo,
      url: value.url,
      categoria: value.categoria,
      categoriaId: categoriaEscolhida.id
    }).then(() => {
      console.log('Cadastrou com sucesso!');
      clearForm();
      history.push('/');
    });
  };

  useEffect(() => {
    categoriasRepository.getAll()
      .then((categorias) => {
        setCategorias(categorias);
      }).catch(err => console.log(err.message));
  }, []);

  return (
    <PageDefault>
      <div className="container">
        <h1>cadastro de vídeo.</h1>

        <form onSubmit={ handlerSubmit }>
          <FormField
            label="Título do vídeo"
            name="titulo"
            value={ value.titulo }
            onChange={ handlerChange }
          />

          <FormField
            label="URL do vídeo"
            name="url"
            value={ value.url }
            onChange={ handlerChange }
          />

          <FormField
            label="Categoria do vídeo"
            name="categoria"
            value={ value.categoria }
            onChange={ handlerChange }
            suggestions={ categoryTitles }
          />

          <Button>
            Cadastrar
          </Button>
        </form>

        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>
      </div>
    </PageDefault>
  );
}

export default CadastroVideo;