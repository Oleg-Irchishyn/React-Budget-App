const INITIALIZED_SUCCESS = 'BudgetApp/income/INITIALIZED_SUCCESS';

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
    case INITIALIZED_SUCCESS:
      return {
        ...state
      }
    default:
      return state;
  }
}

export default incomeReducer;