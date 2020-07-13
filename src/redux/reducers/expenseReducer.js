const ADD_EXPENSE = 'BudgetApp/income/ADD_EXPENSE';

let initialState = {
  expenseTransactions: [
  ]
}

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        expenseTransactions: [action.expenseTransaction, ...state.expenseTransactions]
      }
    default:
      return state;
  }
}

export const addExpense = (expenseTransaction) => ({
  type: ADD_EXPENSE,
  expenseTransaction,
});

export default expenseReducer;