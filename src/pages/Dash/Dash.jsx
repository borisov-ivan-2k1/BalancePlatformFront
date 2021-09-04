import styled from 'styled-components';
import { mapStateToProps, mapActionsToProps } from './Dash.index';
import { connect } from 'react-redux';
import { Content } from 'UI';

const Component = ({ data }) => {

  return <div>
    <Content data={data} />
  </div>
}

export const DashPage = connect(mapStateToProps, mapActionsToProps)(Component);