import { bindActionCreators } from 'redux';


export const mapStateToProps = state => ({
  data: 'goals'
})

export const mapActionsToProps = dispatch => bindActionCreators({
  
}, dispatch);
