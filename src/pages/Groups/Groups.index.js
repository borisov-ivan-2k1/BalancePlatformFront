import { bindActionCreators } from 'redux';
import { getGroups, changeAddGroup } from 'redux/groups/actions';
import { selectGroups, selectLoading } from 'redux/groups/selectors';


export const mapStateToProps = state => ({
  groups: selectGroups(state),
  loading: selectLoading(state),
})

export const mapActionsToProps = dispatch => bindActionCreators({
  getGroups,
  changeAddGroup
}, dispatch);
