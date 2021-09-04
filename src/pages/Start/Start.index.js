import { bindActionCreators } from 'redux';
import { changeLoginData } from 'redux/auth/actions';
import { selectLoginData } from 'redux/auth/selectors';

// export const mapStateToProps = state => ({
//   loginData: selectLoginData(state)
// })

export const mapActionsToProps = dispatch => bindActionCreators({
  changeLoginData,
}, dispatch)