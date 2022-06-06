import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../redux/store';

function Login(props: any) {
  const { firstState } = props;

  return <p>Estado sendo renderizado do Redux: {firstState}</p>;
}

const mapStateToProps = (state: RootState) => ({
  firstState: state.exampleReducer.firstState,
});

export default connect(mapStateToProps)(Login);
