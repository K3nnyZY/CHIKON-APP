import React from 'react';
import { map } from 'lodash';

import { Button, Icon, Table } from 'semantic-ui-react';

import './TableProductAdmin.scss';


export function TableProductAdmin(props) {

    const { products, deleteProduct } = props;

    return (
        <Table className='table-product-admin'>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Producto</Table.HeaderCell>
                    <Table.HeaderCell>Precio</Table.HeaderCell>
                    <Table.HeaderCell>Categoría</Table.HeaderCell>
                    <Table.HeaderCell>Activo</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                { map(products, (product, index) => (
                    <Table.Row key={index}>
                        <Table.Cell>{product.title}</Table.Cell>
                        <Table.Cell>$ {product.price}</Table.Cell>
                        <Table.Cell>{product.category_data ? product.category_data.title : 'Sin categoría'}</Table.Cell>
                        <Table.Cell>
                            { product.active
                                ? <Icon name='check' color='green' />
                                : <Icon name='close' color='red' />
                            }
                        </Table.Cell>
                        <Actions
                            product={product}
                            deleteProduct={deleteProduct}
                        />
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    )
}

function Actions(props) {

    const { product, deleteProduct } = props;

    return (
        <Table.Cell textAlign='right'>
            <Button icon negative onClick={() => deleteProduct(product)}>
                <Icon name='trash' />
            </Button>
        </Table.Cell>
    )
}
