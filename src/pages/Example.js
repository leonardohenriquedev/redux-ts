import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
  render() {
    const { firstState } = this.props;

    return <p>Estado sendo renderizado do Redux: {firstState}</p>;
  }
}

const mapStateToProps = (state) => ({
  firstState: state.exampleReducer.firstState,
});

export default connect(mapStateToProps)(Login);
