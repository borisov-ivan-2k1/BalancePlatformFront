import { bindActionCreators } from 'redux';
import { getUsers } from 'redux/users/actions';
import { selectUsers, selectLoading } from 'redux/users/selectors';


export const mapStateToProps = state => ({
  users: selectUsers(state),
  loading: selectLoading(state)
})

export const mapActionsToProps = dispatch => bindActionCreators({
  getUsers
}, dispatch);
