import { bindActionCreators } from 'redux';
import { getUsersRating } from 'redux/users/actions';
import { selectUsersRating, selectRatingLoading } from 'redux/users/selectors';


export const mapStateToProps = state => ({
  items: selectUsersRating(state),
  loading: selectRatingLoading(state)
})

export const mapActionsToProps = dispatch => bindActionCreators({
  getUsersRating
}, dispatch);
