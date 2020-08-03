import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Page from '../../../components/pageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';

function CadastroVideo() {
  const history = useHistory();
  const { valores, handleChange } = useForm({
    nome: 'Vídeo padrão',
    url: 'https://www.youtube.com/watch?v=kO1XALdcp_4',
    categoria: 'Front-End',
  });

  function submit() {
    videosRepository.createVideo({
      nome: valores.nome,
      url: valores.url,
      categoriaId: 1,
    }).then(() => {
      history.push('/');
    });
  }

  return (
    <Page>
      <h1>
        Cadastro de Video
      </h1>

      <form>
        <FormField
          label="Nome do Vídeo"
          value={valores.nome}
          name="nome"
          onChange={handleChange}
        />

        <FormField
          label="URL"
          value={valores.url}
          name="url"
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          value={valores.categoria}
          name="categoria"
          onChange={handleChange}
        />
        <Button onClick={submit} type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </Page>
  );
}

export default CadastroVideo;
