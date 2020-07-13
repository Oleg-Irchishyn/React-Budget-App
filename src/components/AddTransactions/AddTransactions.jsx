import React, { useState } from 'react';
import { reduxForm, reset } from 'redux-form';
import { Input, createField } from '../common/FormControls/FormControls';
import { maxLengthCreator, required } from '../../redux/utils/validators/validatos';
import { v4 as uuidv4 } from 'uuid';
import { bindActionCreators } from 'redux';
import *as incomeActions from '../../redux/reducers/incomeReducer';
import *as expenseActions from '../../redux/reducers/expenseReducer';
import { connect } from 'react-redux';

const AddTransactions = ({ addIncome, addExpense }) => {

  const onSubmitIncome = (values, dispatch) => {
    const newIncomeTransaction = {
      id: uuidv4(),
      incomeText: values.incomeText,
      incomeAmount: values.incomeAmount * 1
    };
    addIncome(newIncomeTransaction);
    dispatch(reset("incomeForm"));
  }

  const onSubmitExpense = (values, dispatch) => {
    const newExpenseTransaction = {
      id: uuidv4(),
      expenseText: values.expenseText,
      expenseAmount: values.expenseAmount * 1
    };
    addExpense(newExpenseTransaction);
    dispatch(reset("expensesForm"));
  }

  return (
    <div className="form-wrapper">
      <IncomeReduxForm onSubmit={onSubmitIncome} />
      <ExpensesReduxForm onSubmit={onSubmitExpense} />
    </div>
  )
}

const incomeFormvalidators = [required, maxLengthCreator(100)];

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
        {createField(Input, "incomeAmount", "0", "number", "off", onChangeIncome, incomeAmount)}
        <button type="submit">Submit</button>
      </div>
    </form>
  )
})

const expenseFormvalidators = [required, maxLengthCreator(100)];

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
        {createField(Input, "expenseAmount", "0", "number", "off", onChangeExpense, expenseAmount)}
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


const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(incomeActions, dispatch),
  ...bindActionCreators(expenseActions, dispatch)
})

export default connect(null, mapDispatchToProps)(AddTransactions);
