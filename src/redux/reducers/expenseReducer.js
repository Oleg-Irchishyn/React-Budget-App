const ADD_EXPENSE = 'BudgetApp/expense/ADD_EXPENSE';
const DELETE_EXPENSE_TRANSACTION = 'BudgetApp/expense/DELETE_EXPENSE_TRANSACTION';


let initialState = {
  expenseTransactions: [
    {
      id: 2,
      expenseText: "Rent",
      expenseAmount: 500
    }
  ]
}

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        expenseTransactions: [action.expenseTransaction, ...state.expenseTransactions]
      }
    case DELETE_EXPENSE_TRANSACTION:
      return {
        ...state,
        expenseTransactions: state.expenseTransactions.filter(expenseTransaction => expenseTransaction.id !== action.id)
      };
    default:
      return state;
  }
}

export const addExpense = (expenseTransaction) => ({
  type: ADD_EXPENSE,
  expenseTransaction,
});

export const deleteExpenseTransaction = (id) => ({
  type: DELETE_EXPENSE_TRANSACTION,
  id
});

export default expenseReducer;