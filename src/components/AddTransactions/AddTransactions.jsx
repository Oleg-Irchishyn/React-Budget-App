import React, { useState, useEffect } from 'react';
import { reduxForm, reset } from 'redux-form';
import { Input, createField } from '../common/FormControls/FormControls';
import { maxLengthCreator, required } from '../../redux/utils/validators/validatos';
import { v4 as uuidv4 } from 'uuid';
import { bindActionCreators } from 'redux';
import *as incomeActions from '../../redux/reducers/incomeReducer';
import *as expenseActions from '../../redux/reducers/expenseReducer';
import { connect } from 'react-redux';
import { incomeTransactions } from '../../redux/selectors/incomeSelectors';
import { expenseTransactions } from '../../redux/selectors/expenseSelectors';

const AddTransactions = ({ addIncome, addExpense, incomeTransactions, expenseTransactions }) => {

  useEffect(() => {
    localStorage.setItem("incomeTransactions", JSON.stringify(incomeTransactions));
    localStorage.setItem("expenseTransactions", JSON.stringify(expenseTransactions));
  })

  const onSubmitIncome = (values, dispatch) => {

    if (values.incomeText !== "") {
      const newIncomeTransaction = {
        id: uuidv4(),
        incomeText: values.incomeText,
        incomeAmount: values.incomeAmount * 1
      };
      addIncome(newIncomeTransaction);
      dispatch(reset("incomeForm"));
    }
  }

  const onSubmitExpense = (values, dispatch) => {
    if (values.expenseText !== "") {
      const newExpenseTransaction = {
        id: uuidv4(),
        expenseText: values.expenseText,
        expenseAmount: values.expenseAmount * 1
      };
      addExpense(newExpenseTransaction);
      dispatch(reset("expensesForm"));
    }
  }

  return (
    <div className="form-wrapper">
      <IncomeReduxForm onSubmit={onSubmitIncome} />
      <ExpensesReduxForm onSubmit={onSubmitExpense} />
    </div>
  )
}

const incomeFormvalidators = [required, maxLengthCreator(50)];
let maxLengthIncomeAmount = maxLengthCreator(16)

const IncomeForm = React.memo(({ handleSubmit }) => {
  const [income, setIncome] = useState({
    incomeText: '',
    incomeAmount: 0
  })
  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value })
  }
  const { incomeText, incomeAmount } = income;
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group income">
        {createField(Input, "incomeText", "Add Income...", "text", "off", onChangeIncome, incomeText, incomeFormvalidators)}
        {createField(Input, "incomeAmount", "0", "number", "off", onChangeIncome, incomeAmount, [maxLengthIncomeAmount, required])}
        <button type="submit">Submit</button>
      </div>
    </form>
  )
})

const expenseFormvalidators = [required, maxLengthCreator(50)];
let maxLengthExpenseAmount = maxLengthCreator(16)

const ExpensesForm = React.memo(({ handleSubmit }) => {
  const [expense, setExpense] = useState({
    expenseText: '',
    expenseAmount: 0
  })
  const onChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value })
  }
  const { expenseText, expenseAmount } = expense;
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group expense">
        {createField(Input, "expenseText", "Add Expense...", "text", "off", onChangeExpense, expenseText, expenseFormvalidators)}
        {createField(Input, "expenseAmount", "0", "number", "off", onChangeExpense, expenseAmount, [required, maxLengthExpenseAmount])}
        <button type="submit">Submit</button>
      </div>
    </form>
  )
})

const IncomeReduxForm = reduxForm({
  form: "incomeForm"
})(IncomeForm);


const ExpensesReduxForm = reduxForm({
  form: "expensesForm"
})(ExpensesForm);

const mapStateToProps = (state) => ({
  incomeTransactions: incomeTransactions(state),
  expenseTransactions: expenseTransactions(state)
})

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(incomeActions, dispatch),
  ...bindActionCreators(expenseActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTransactions);
