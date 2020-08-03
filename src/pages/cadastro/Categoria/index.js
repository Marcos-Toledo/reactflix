import React , { useState, useEffect } from 'react';
import useForm from '../../../hooks/useForm';

import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

const CadastroCategoria = () => {
  const objetoCategoria = {
    titulo: '',
    descricao: '',
    cor: ''
  }; 

  const { value, handlerChange, clearForm } = useForm(objetoCategoria);

  const [ categorias, setCategorias ] = useState([]);

  const handlerSubmit = (e) => {
    e.preventDefault();

    setCategorias([
      ...categorias, value
    ]);

    clearForm();
  };

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:3004/categorias'
      : 'https://toledoflix.herokuapp.com/categorias';
    
    fetch(URL).then(async res => {
      const data = await res.json();
      setCategorias([
        ...data,
      ]);
    });
  }, []);

  return (
    <PageDefault>
      <div className="container">

        <h1>cadastro de categoria: { value.titulo }</h1>

        <form onSubmit={ handlerSubmit }>

          <FormField
            label="Nome:"
            type="text"
            name="nome"
            value={ value.nome }
            onChange={ handlerChange }
          />

          <FormField
            label="Descrição:"
            type="textarea"
            name="descricao"
            value={ value.descricao }
            onChange={ handlerChange }
          />

          <FormField
            label="Cor:"
            type="color"
            name="cor"
            value={ value.cor }
            onChange={ handlerChange }
          />

          <Button>
            Cadastrar
          </Button>
        </form>

        {categorias.length === 0 && (
          <p>Loading...</p>
        )}

        <ul>
          {categorias.map((categoria, index) => {
            return (
              <li key={ `${categoria.titulo}-${index}` }>
                <p>{ categoria.titulo }</p>
              </li>
            )
          })}
        </ul>

        <Link to="/">
          Ir para home
        </Link>
      </div>
    </PageDefault>
  );
}

export default CadastroCategoria;