const INITIALIZED_SUCCESS = 'BudgetApp/expense/INITIALIZED_SUCCESS';

let initialState = {
  expenseTransactions: [
    {
      id: 4,
      expenseText: "Rent",
      expenseAmount: 1000
    },
    {
      id: 5,
      expenseTextt: "Bank",
      expenseAmount: 2000
    },
    {
      id: 6,
      expenseText: "Clothes",
      expenseAmount: 500
    }
  ]
}

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state
      }
    default:
      return state;
  }
}

export default expenseReducer;