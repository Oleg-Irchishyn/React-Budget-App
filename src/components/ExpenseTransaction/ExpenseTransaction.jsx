import React from 'react'

const ExpenseTransaction = ({ expenseTransaction }) => {
  return (
    <div>
      <li className="transaction">
        <span className="transaction-text">{expenseTransaction.expenseText}</span>
        <span className="transaction-amount">{expenseTransaction.expenseAmount}</span>
        <button className="delete-btn">
          <i className="fa fa-trash" aria-hidden="true"></i>
        </button>
      </li>
    </div>
  )
}

export default ExpenseTransaction;
