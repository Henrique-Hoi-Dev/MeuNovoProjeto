import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';

function Endereco() {
  const dispatch = useDispatch();

  function onSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function onBlurCep(ev, setFieldValue) {
    const { value } = ev.target;

    const cep = value?.replace(/[^0-9]/g, '');

    if (cep?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue('bairro', data.bairro);
        setFieldValue('cidade', data.localidade);
        setFieldValue('logradouro', data.logradouro);
        setFieldValue('uf', data.uf);
      });
  }

  return (
    <Container>
      <Formik
        onSubmit={onSubmit}
        initialValues={{
          cep: '',
          logradouro: '',
          complemento: '',
          numero: '',
          bairro: '',
          cidade: '',
          uf: '',
        }}
        render={({ setFieldValue }) => (
          <Form>
            <div>
              <label>Cep</label>
              <Field
                name="cep"
                type="text"
                onBlur={(ev) => onBlurCep(ev, setFieldValue)}
              />
            </div>
            <div>
              <label>Logradouro</label>
              <Field name="logradouro" type="text" />
            </div>
            <div>
              <label>Complento</label>
              <Field name="complemento" type="text" />
            </div>
            <div>
              <label>Número</label>
              <Field name="numero" type="text" />
            </div>
            <div>
              <label>Bairro</label>
              <Field name="bairro" type="texto" />
            </div>
            <div>
              <label>Cidade</label>
              <Field name="cidade" type="text" />
            </div>
            <div>
              <label>UF</label>
              <Field component="select" name="uf" type="text">
                <option value={null}>Selecione o Estado</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piaui</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </Field>
            </div>
            <button type="submit">Salvar endereço</button>
          </Form>
        )}
      />
    </Container>
  );
}

export default Endereco;
