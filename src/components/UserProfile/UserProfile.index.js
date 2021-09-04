import { bindActionCreators } from 'redux';
import { selectUserLoading, selectUser } from 'redux/users/selectors';
import { getUser, clearUser } from 'redux/users/actions';


export const mapStateToProps = state => ({
  user: selectUser(state),
  loading: selectUserLoading(state),
})

export const mapActionsToProps = dispatch => bindActionCreators({
  getUser,
  clearUser
}, dispatch);
