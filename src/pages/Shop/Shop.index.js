import { bindActionCreators } from 'redux';
import { getShopProducts } from 'redux/shop/actions';
import { selectProducts, selectLoading } from 'redux/shop/selectors';


export const mapStateToProps = state => ({
  products: selectProducts(state),
  loading: selectLoading(state),
})

export const mapActionsToProps = dispatch => bindActionCreators({
  getShopProducts
}, dispatch);
