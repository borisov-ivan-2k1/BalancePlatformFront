import { bindActionCreators } from 'redux';
import { selectUser } from 'redux/auth/selectors';

export const mapStateToProps = state => ({
  user: selectUser(state)
})

export const mapActionsToProps = dispatch => bindActionCreators({
}, dispatch)