import { bindActionCreators } from 'redux';
import { changeLoginData, clearLoginData, login } from 'redux/auth/actions';
import { selectLoginData } from 'redux/auth/selectors';

export const mapStateToProps = state => ({
  data: selectLoginData(state)
})

export const mapActionsToProps = dispatch => bindActionCreators({
  changeLoginData,
  clearLoginData,
  login
}, dispatch)