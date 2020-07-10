const ADD_INCOME = 'BudgetApp/income/ADD_INCOME';

let initialState = {
  incomeTransactions: [
    {
      id: 1,
      incomeText: "Car Sold",
      incomeAmount: 15000
    },
    {
      id: 2,
      incomeText: "Salary",
      incomeAmount: 5000
    },
    {
      id: 3,
      incomeText: "Bonus",
      incomeAmount: 13000
    }
  ]
}

const incomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INCOME:
      return {
        ...state,
        incomeTransactions: [...state.incomeTransactions, action.payload]
      };
    default:
      return state;
  }
}

export const addIncome = (incomeTransaction) => ({
  type: ADD_INCOME,
  payload: incomeTransaction
});

export default incomeReducer;