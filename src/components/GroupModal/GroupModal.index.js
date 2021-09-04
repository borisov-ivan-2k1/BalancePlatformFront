import { bindActionCreators } from 'redux';
import { changeAddGroup, createGroup, clearAddGroup } from 'redux/groups/actions';
import { selectCreateGroupData } from 'redux/groups/selectors';


export const mapStateToProps = state => ({
  data: selectCreateGroupData(state)
})

export const mapActionsToProps = dispatch => bindActionCreators({
  changeAddGroup,
  createGroup,
  clearAddGroup
}, dispatch);
