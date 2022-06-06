import React from 'react';
import { connect } from 'react-redux';
import { editFirstState as editFirstStateAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.saveAndRedirect = this.saveAndRedirect.bind(this);
  }

  handleChange(event) {
    const { type, value } = event.target;

    this.setState({
      [type]: value,
    });
  }

  saveAndRedirect() {
    const { email } = this.state;
    const { editFirstState } = this.props;
    const { history } = this.props;

    editFirstState(email);

    history.push('/example');
  }

  render() {
    const { email } = this.state;
    const { firstState } = this.props;

    return (
      <div className="login-page">
        <input
          type="email"
          data-testid="email-input"
          placeholder="Texto"
          value={email}
          onChange={this.handleChange}
        />
        <button onClick={this.saveAndRedirect}>
          Enviar para estado global
        </button>
        <p>Estado sendo renderizado do Redux: {firstState}</p>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  editFirstState: (payload) => dispatch(editFirstStateAction(payload)),
});

const mapStateToProps = (state) => ({
  firstState: state.exampleReducer.firstState,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
