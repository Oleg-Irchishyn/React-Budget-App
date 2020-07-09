import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import *as expenseActions from '../../redux/reducers/expenseReducer';
import ExpenseTransaction from '../ExpenseTransaction/ExpenseTransaction';
import { expenseTransactions } from '../../redux/selectors/expenseSelectors';


const ExpenseList = ({ expenseTransactions }) => {
  return (
    <div className="transactions  transactions-expense">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        {expenseTransactions.map(expenseTransaction => (
          <ExpenseTransaction key={expenseTransaction.id} expenseTransaction={expenseTransaction} />
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  expenseTransactions: expenseTransactions(state)
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(expenseActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);
