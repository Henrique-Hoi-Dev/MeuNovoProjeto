import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';
import { toast } from 'react-toastify';

import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  createProductRequest,
  getByIdProductRequest,
  UpdateProductRequest,
  resetFormulario,
} from '~/store/modules/product/actions';

import Header from '~/components/HeaderRecord';
import AvatarInput from './Avatarinput';
import { FcHighPriority } from 'react-icons/fc';
import { FaListUl } from 'react-icons/fa';
import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string()
    .required('Este compo é obrigatório.')
    .max(100, 'No máximo 100 caracteres'),
  categoria: Yup.string().required('Este compo é obrigatório.'),
  altura: Yup.number().required('Este compo é obrigatório.'),
  largura: Yup.number().required('Este compo é obrigatório.'),
  comprimento: Yup.number().required('Este compo é obrigatório.'),
  codigo_de_barra: Yup.number().required('Este compo é obrigatório.'),
  peso: Yup.number().required('Este compo é obrigatório.'),
  preco: Yup.number().required('Este compo é obrigatório.'),
  descricao: Yup.string().required('Este compo é obrigatório.'),
  dia_da_semana: Yup.string().required('Este compo é obrigatório.'),
  horario: Yup.string().required('Horário é obrigatório.'),
});

export default function RegistrationProduct() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { form } = useSelector((state) => state.product);

  useEffect(() => {
    if (id) {
      dispatch(getByIdProductRequest(id));
    } else {
      dispatch(resetFormulario());
    }
  }, [id, dispatch]);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      let body = JSON.parse(JSON.stringify(values));

      body.avatar_id = parseInt(
        document.getElementById('avatar').getAttribute('data-file')
      );

      if (id) {
        dispatch(UpdateProductRequest({ id: id, values: body }));
      } else {
        dispatch(createProductRequest(body));

        handleReset(resetForm);
      }
    } catch (error) {
      toast.error('Error check data');
    }
  };

  const handleReset = (resetForm) => {
    resetForm({});
    document.getElementById('avatar').setAttribute('data-file', null);
    document
      .getElementById('avatar-img')
      .setAttribute(
        'src',
        'https://faculty.iiit.ac.in/~indranil.chakrabarty/images/empty.png'
      );
  };

  return (
    <Container>
      <Header />
      <div className="header-main">
        <Formik
          onSubmit={handleSubmit}
          validationSchema={schema}
          enableReinitialize={true}
          initialValues={form}
        >
          {(formProps) => {
            return (
              <Form className="form-input">
                <div id="container-input" className="header-title">
                  <div className="name-campo">
                    <label htmlFor="name">
                      Nome do Produto
                      <button className="button-list">
                        <Link to="/list">
                          <FaListUl color="#fff" size="30" />
                        </Link>
                      </button>
                    </label>
                    <Field name="name" type="text" />,{' '}
                    <span>{formProps.errors.name}</span>
                  </div>
                  <div className="campo2">
                    <label htmlFor="altura">Altura(cm)</label>
                    <Field name="altura" type="number" />
                    <span>{formProps.errors.altura}</span>

                    <label htmlFor="largura">Largura(cm)</label>
                    <Field name="largura" type="number" />
                    <span>{formProps.errors.largura}</span>

                    <label htmlFor="comprimento">Comprimento(cm)</label>
                    <Field name="comprimento" type="number" />
                    <span>{formProps.errors.comprimento}</span>
                  </div>

                  <div className="campo3">
                    <label htmlFor="peso">Peso do produto(g)</label>
                    <Field name="peso" type="number" />
                    <span>{formProps.errors.peso}</span>

                    <label htmlFor="preco">Preço(R$)</label>
                    <Field name="preco" type="number" />
                    <span>{formProps.errors.preco}</span>
                    <ul>
                      <AvatarInput name="avatar_id" />
                    </ul>
                  </div>

                  <div className="campo4">
                    <label htmlFor="categoria">Categoria</label>
                    <Field component="select" id="location" name="categoria">
                      <option value="celular">Celular</option>
                      <option value="tvs">Tvs</option>
                      <option value="notebook">Notebook</option>
                      <option value="acessorios">Acessórios</option>
                    </Field>

                    <label htmlFor="dia_da_semana">Dia da semana</label>
                    <Field
                      component="select"
                      id="location"
                      name="dia_da_semana"
                    >
                      <option value="domingo">Domingo</option>
                      <option value="segunda-feira">Segunda-feira</option>
                      <option value="terça-feira">Terça-feira</option>
                      <option value="quarta-feira">Quarta-feira</option>
                      <option value="quinta-feira">Quinta-feira</option>
                      <option value="sexta-feira">Sexta-feira</option>
                      <option value="sabado">Sábado</option>
                    </Field>

                    <label htmlFor="horario">Horário</label>
                    <Field name="horario" type="time" />
                    <span>{formProps.errors.horario}</span>
                  </div>

                  <div className="campo5">
                    <label htmlFor="descricao">Descrição</label>
                    <Field as="textarea" name="descricao" type="text" />
                    <span>{formProps.errors.descricao}</span>
                    <label htmlFor="codigo_de_barra">Código de barra</label>
                    <Field name="codigo_de_barra" type="number" />
                    <span>{formProps.errors.codigo_de_barra}</span>
                  </div>

                  <footer className="buttons-container">
                    <p>
                      <FcHighPriority />
                      Importante! <br />
                      Preencha todos os dados
                    </p>
                    <button type="submit">Salvar</button>
                  </footer>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </Container>
  );
}
