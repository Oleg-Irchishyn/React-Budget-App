import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormControls/FormControls';
import { maxLengthCreator, required } from '../../redux/utils/validators/validatos';
import { v4 as uuidv4 } from 'uuid';
import { bindActionCreators } from 'redux';
import *as incomeActions from '../../redux/reducers/incomeReducer';
import { connect } from 'react-redux';

const AddTransactions = ({ addIncome }) => {

  const onSubmitIncome = (values) => {
    const newIncomeTransaction = {
      id: uuidv4(),
      incomeText: values.incomeText,
      incomeAmount: values.incomeAmount * 1
    }
    addIncome(newIncomeTransaction)
  }
  const onExpensesFormSubmit = (formData) => {
    console.log(formData.expensesText, formData.expensesAmount)
  }
  return (
    <div className="form-wrapper">
      <IncomeReduxForm onSubmit={onSubmitIncome} />
      <ExpensesReduxForm onSubmit={onExpensesFormSubmit} />
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
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group income">
        <Field component={Input} name="incomeText" placeholder="Add Income..."
          type="text" autoComplete="off" onChange={onChangeIncome}
          validate={incomeFormvalidators} />
        <Field component={Input} name="incomeAmount" placeholder="Amount" type="number"
          autoComplete="off" onChange={onChangeIncome} />
        <button type="submit">Submit</button>
      </div>
    </form>
  )
})

const expenseFormvalidators = [required, maxLengthCreator(100)];

const ExpensesForm = React.memo(({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group expense">
        <Field component={Input} name="expensesText" placeholder="Add Expense..." type="text" autoComplete="off" validate={expenseFormvalidators} />
        <Field component={Input} name="expensesAmount" placeholder="Amount" type="number" autoComplete="off" />
        <button type="submit">Submit</button>
      </div>
    </form>
  )
})

const IncomeReduxForm = reduxForm({
  form: "income"
})(IncomeForm);


const ExpensesReduxForm = reduxForm({
  form: "expenses"
})(ExpensesForm);


const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(incomeActions, dispatch)
})

export default connect(null, mapDispatchToProps)(AddTransactions);
