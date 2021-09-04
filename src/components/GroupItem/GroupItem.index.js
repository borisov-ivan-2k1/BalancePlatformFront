import { bindActionCreators } from 'redux';
import { orderProduct } from 'redux/shop/actions';


export const mapStateToProps = state => ({

})

export const mapActionsToProps = dispatch => bindActionCreators({
  orderProduct
}, dispatch);
