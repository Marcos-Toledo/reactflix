import React , { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

const CadastroCategoria = () => {
  const objetoCategoria = {
    nome: '',
    descricao: '',
    cor: ''
  }; 
  const [ categorias, setCategorias ] = useState([]);
  const [ categoria, setStateCategoria ] = useState(objetoCategoria);

  const handlerInput = (chave, valor) => {
    setStateCategoria({
      ...categoria,
      [chave]: valor
    });
  };

  const handlerChange = (input) => {
    handlerInput(
      input.target.getAttribute('name'),
      input.target.value
    );
  }

  const handlerSubmit = (e) => {
    e.preventDefault();

    setCategorias([
      ...categorias, categoria
    ]);

    setStateCategoria(objetoCategoria);
  };

  useEffect(() => {
    const URL = 'http://localhost:3004/categorias';
    
    fetch(URL).then(async res => {
      const data = await res.json();
      setCategorias([
        ...data,
      ]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>cadastro de categoria: { categoria.nome }</h1>

      <form onSubmit={ handlerSubmit }>

        <FormField
          label="Nome:"
          type="text"
          name="nome"
          value={ categoria.nome }
          onChange={ handlerChange }
        />

        <FormField
          label="Descrição:"
          type="textarea"
          name="descricao"
          value={ categoria.descricao }
          onChange={ handlerChange }
        />

        <FormField
          label="Cor:"
          type="color"
          name="cor"
          value={ categoria.cor }
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
            <li key={ `${categoria.nome}-${index}` }>
              <p>{ categoria.nome }</p>
              <p>{ categoria.descricao }</p>
              <p>{ categoria.cor }</p>
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;