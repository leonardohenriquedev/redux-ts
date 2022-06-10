import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editFirstState as editFirstStateAction } from '../redux/actions';
import { AppDispatch, RootState } from '../redux/store';

function Login(props: any) {
  const navigate = useNavigate();

  function saveAndRedirect() {
    navigate('/example');
  }

  const { editFirstState, firstState } = props;

  return (
    <div className="login-page">
      <input
        type="email"
        data-testid="email-input"
        placeholder="Texto"
        value={firstState}
        onChange={(e) => editFirstState(e.target.value)}
      />
      <button onClick={saveAndRedirect}>Ir para outra rota</button>
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
