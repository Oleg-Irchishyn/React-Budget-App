const ADD_INCOME = 'BudgetApp/income/ADD_INCOME';
const DELETE_INCOME_TRANSACTION = 'BudgetApp/income/DELETE_INCOME_TRANSACTION';

let initialState = {
  incomeTransactions: JSON.parse(localStorage.getItem('incomeTransactions')) || []
}

const incomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INCOME:
      return {
        ...state,
        incomeTransactions: [action.incomeTransaction, ...state.incomeTransactions]
      };
    case DELETE_INCOME_TRANSACTION:
      return {
        ...state,
        incomeTransactions: state.incomeTransactions.filter(incomeTransaction => incomeTransaction.id !== action.id)
      };
    default:
      return state;
  }
}

export const addIncome = (incomeTransaction) => ({
  type: ADD_INCOME,
  incomeTransaction
});

export const deleteIncomeTransaction = (id) => ({
  type: DELETE_INCOME_TRANSACTION,
  id
});

export default incomeReducer;