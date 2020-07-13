import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import *as incomeActions from '../../redux/reducers/incomeReducer';
import { incomeTransactions } from '../../redux/selectors/incomeSelectors';
import IncomeTransaction from '../IncomeTransaction/IncomeTransaction';

const IncomeList = ({ incomeTransactions, deleteIncomeTransaction }) => {
  return (
    <div className="transactions  transactions-income">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        {incomeTransactions.map((incomeTransaction) => (
          <IncomeTransaction key={incomeTransaction.id} incomeTransaction={incomeTransaction} deleteIncomeTransaction={deleteIncomeTransaction} />
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  incomeTransactions: incomeTransactions(state)
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(incomeActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(IncomeList);
