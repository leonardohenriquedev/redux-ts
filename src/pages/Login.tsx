import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editFirstState as editFirstStateAction } from '../redux/actions';
import { AppDispatch, RootState } from '../redux/store';

function Login(props: any) {
  const [email, setEmail] = useState<string>('');

  function saveAndRedirect() {
    const { editFirstState } = props;
    const { history } = props;

    editFirstState(email);

    history.push('/example');
  }

  const { firstState } = props;

  return (
    <div className="login-page">
      <input
        type="email"
        data-testid="email-input"
        placeholder="Texto"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={saveAndRedirect}>Enviar para estado global</button>
      <p>Estado sendo renderizado do Redux: {firstState}</p>
    </div>
  );
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  editFirstState: (payload: string) => dispatch(editFirstStateAction(payload)),
});

const mapStateToProps = (state: RootState) => ({
  firstState: state.exampleReducer.firstState,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
