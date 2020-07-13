import React, { useState } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { Input } from '../common/FormControls/FormControls';
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
        <Field component={Input} name="incomeText" placeholder="Add Income..."
          type="text" autoComplete="off" onChange={onChangeIncome}
          validate={incomeFormvalidators} value={incomeText} />
        <Field component={Input} name="incomeAmount" placeholder="0" type="number"
          autoComplete="off" onChange={onChangeIncome} value={incomeAmount} />
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
        <Field component={Input} name="expenseText" placeholder="Add Expense..."
          type="text" autoComplete="off" validate={expenseFormvalidators}
          onChange={onChangeExpense} value={expenseText} />
        <Field component={Input} name="expenseAmount" placeholder="0"
          type="number" autoComplete="off" onChange={onChangeExpense}
          value={expenseAmount} />
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
