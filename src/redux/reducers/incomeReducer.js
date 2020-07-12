const ADD_INCOME = 'BudgetApp/income/ADD_INCOME';

let initialState = {
  incomeTransactions: [

  ]
}

const incomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INCOME:
      return {
        ...state,
        incomeTransactions: [action.incomeTransaction, ...state.incomeTransactions]
      };
    default:
      return state;
  }
}

export const addIncome = (incomeTransaction) => ({
  type: ADD_INCOME,
  incomeTransaction
});

export default incomeReducer;