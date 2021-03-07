import React from 'react';
import { Container, Col, Label, FormGroup } from 'reactstrap';
import { Formik, Form } from 'formik';
import { Input, Submit } from 'formstrap';

export default function OrderForm(props) {
    const { onSubmit } = props;
    const initialValues = {
        name: '',
        type: 'Compra',
        price: 0,
        qty: 0,
        tax: 0
    };

    return (
        <Container className="pt-5">
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form>
                    <FormGroup row>
                        <Label xs={4} sm={2}>Ação</Label>
                        <Col xs={8} sm={10}>
                            <Input type="text" name="name" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label xs={4} sm={2}>Data</Label>
                        <Col xs={8} sm={10}>
                            <Input type="date" name="date" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label xs={4} sm={2}>Select</Label>
                        <Col xs={8} sm={10}>
                            <Input type="select" name="type">
                                <option value="Compra">Compra</option>
                                <option value="Venda" >Venda</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label xs={4} sm={2}>Preço</Label>
                        <Col xs={8} sm={10}>
                            <Input type="number" step="0.01" name="price" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label xs={4} sm={2}>Quantidade</Label>
                        <Col xs={8} sm={10}>
                            <Input type="number" step="0.01" name="qty" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label xs={4} sm={2}>Taxa</Label>
                        <Col xs={8} sm={10}>
                            <Input type="number" step="0.01" name="tax" />
                        </Col>
                    </FormGroup>
                    <Submit withSpinner>Enviar Ordem</Submit>
                </Form>
            </Formik>
        </Container>
    )
}
