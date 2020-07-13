import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { incomeTransactions } from '../../redux/selectors/incomeSelectors';
import *as incomeActions from '../../redux/reducers/incomeReducer';
import { expenseTransactions } from '../../redux/selectors/expenseSelectors';
import *as expenseActions from '../../redux/reducers/expenseReducer';

const Balance = ({ incomeTransactions, expenseTransactions }) => {

  const incomeAmounts = incomeTransactions.map(
    incomeTransaction => incomeTransaction.incomeAmount
  );
  const expenseAmounts = expenseTransactions.map(
    expenseTransaction => expenseTransaction.expenseAmount
  );

  const totalIncome = incomeAmounts.reduce((acc, item) => (acc = acc + item), 0).toFixed(2);
  const totalExpenses = expenseAmounts.reduce((acc, item) => (acc = acc + item), 0).toFixed(2);

  return (
    <div className="balance">
      <h2>Your Balance</h2>
      <h3>${(totalIncome - totalExpenses).toFixed(2)}</h3>
      <div className="income-expense">
        <div className="plus">
          <h3>Income</h3>
          <p>+${totalIncome}</p>
        </div>
        <div className="minus">
          <h3>Expenses</h3>
          <p>-${totalExpenses}</p>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  incomeTransactions: incomeTransactions(state),
  expenseTransactions: expenseTransactions(state)
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(incomeActions, dispatch),
  ...bindActionCreators(expenseActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Balance);
