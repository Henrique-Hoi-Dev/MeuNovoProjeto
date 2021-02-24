import React from 'react';
import { Form, Input, Select } from '@rocketseat/unform';

import { Container } from './styles';

const tipoParcelamento = [
  { id: 'Cartão de credito', title: 'Cartão de credito' },
  { id: 'Boleto', title: 'Boleto' },
];

function Venda() {
  return (
    <>
      <Container>
        <Form>
          <Input name="valor" type="text" />
          <h2>Valor do produto</h2>

          <Input name="valor_desconto" type="text" />
          <h2>Desconto</h2>

          <Input name="produto" type="text" />
          <h2>Nome do produto</h2>
        </Form>
        <div>
          <button type="submit">Confirmar venda</button>
        </div>
      </Container>
      <Container>
        <Form>
          <Input name="valor" type="text" />
          <h2>Valor do produto</h2>

          <Select
            options={tipoParcelamento}
            name="valor_desconto"
            type="text"
          />
          <h2>Tipo de parcelamento</h2>

          <Input className="valor-parcela" name="valor_parcela" type="text" />
          <h2>Valor</h2>

          <Input className="parcelas" name="parcela" type="text" />
          <h2>Parcelas</h2>
        </Form>
        <div>
          <button type="submit">Venda parcelada</button>
        </div>
      </Container>
    </>
  );
}

export default Venda;
