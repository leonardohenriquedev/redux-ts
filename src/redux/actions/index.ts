export const SAVE_EMAIL = 'SAVE_EMAIL';

export const EDIT_FIRST_STATE = 'EDIT_FIRST_STATE';

export const editFirstState = (payload: string) => ({
  type: EDIT_FIRST_STATE,
  payload,
});

// export const requestRates = (expense) => (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
//   .then((response) => response.json())
//   .then((rates) => dispatch(saveExpense(expense, rates)));
