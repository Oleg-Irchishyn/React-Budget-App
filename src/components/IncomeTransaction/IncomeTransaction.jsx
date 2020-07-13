import React from 'react'

const IncomeTransaction = ({ incomeTransaction, deleteIncomeTransaction }) => {
  const deleteTransaction = () => {
    deleteIncomeTransaction(incomeTransaction.id)
  }
  return (
    <div>
      <li className="transaction">
        <span className="transaction-text">{incomeTransaction.incomeText}</span>
        <span className="transaction-amount">{incomeTransaction.incomeAmount}</span>
        <button className="delete-btn" onClick={deleteTransaction}>
          <i className="fa fa-trash" aria-hidden="true"></i>
        </button>
      </li>
    </div>
  )
}

export default IncomeTransaction;
