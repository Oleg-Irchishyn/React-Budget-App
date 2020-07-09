import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormControls/FormControls';
import { maxLength } from '../../redux/utils/validators/validatos';

const AddTransactions = React.memo((props) => {
  const onIncomeformSubmit = (formData) => {
    console.log(formData)
  }
  const onExpensesformSubmit = (formData) => {
    console.log(formData)
  }
  return (
    <React.Fragment>
      <IncomeReduxForm onSubmit={onIncomeformSubmit} />
      <ExpensesReduxForm onSubmit={onExpensesformSubmit} />
    </React.Fragment>
  )
});

const IncomeForm = (handleSubmit, error) => {
  const maxLength15 = maxLength(15)
  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="input-group income">
          <Field component={Input} name="Income" placeholder="Add Income..." type="text" validate={[maxLength15]} />
          <Field component={Input} name="IncomeAmount" placeholder="Amount" type="number" />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

const ExpensesForm = (handleSubmit, error) => {
  const maxLength15 = maxLength(15)
  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="input-group expense">
          <Field component={Input} name="Expenses" placeholder="Add Expense..." type="text" validate={[maxLength15]} />
          <Field component={Input} name="ExpensesAmount" placeholder="Amount" type="number" />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

const IncomeReduxForm = reduxForm({
  form: "income"
})(IncomeForm);


const ExpensesReduxForm = reduxForm({
  form: "expenses"
})(ExpensesForm);


export default AddTransactions;
