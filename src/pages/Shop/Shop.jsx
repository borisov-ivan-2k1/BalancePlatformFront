import styled from 'styled-components';
import { mapStateToProps, mapActionsToProps } from './Shop.index';
import { Product } from 'components';
import { useEffect } from 'react';
import { connect } from 'react-redux';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
`


const Component = ({ products, loading, getShopProducts }) => {

  useEffect(() => {
    getShopProducts();
  }, [])

  const data = (!products.length && !loading) ? [] : products;

  return <Wrapper>
    {data.map(product => <Product key={product.id} data={product} />)}
  </Wrapper>
}

export const ShopPage = connect(mapStateToProps, mapActionsToProps)(Component);