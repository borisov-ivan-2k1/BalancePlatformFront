import { bindActionCreators } from 'redux';
import { selectBages, selectLoading } from 'redux/badges/selectors';
import { getBadges, clearBadges } from 'redux/badges/actions';


export const mapStateToProps = state => ({
  badges: selectBages(state),
  loading: selectLoading(state),
})

export const mapActionsToProps = dispatch => bindActionCreators({
  getBadges, 
  clearBadges 
}, dispatch);
