import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormControls/FormControls';
import { maxLengthCreator, required } from '../../redux/utils/validators/validatos';

const AddTransactions = React.memo((props) => {
  const onIncomeFormSubmit = (formData) => {
    console.log(formData.Income, formData.IncomeAmount)
  }
  const onExpensesFormSubmit = (formData) => {
    console.log(formData.Expenses, formData.ExpensesAmount)
  }
  return (
    <div className="form-wrapper">
      <IncomeReduxForm onSubmit={onIncomeFormSubmit} />
      <ExpensesReduxForm onSubmit={onExpensesFormSubmit} />
    </div>
  )
});

const IncomeForm = ({ handleSubmit }) => {
  const maxLength15 = maxLengthCreator(15)
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group income">
        <Field component={Input} name="Income" placeholder="Add Income..." type="text" autoComplete="off" validate={[maxLength15]} />
        <Field component={Input} name="IncomeAmount" placeholder="Amount" type="number" autoComplete="off" />
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

const ExpensesForm = ({ handleSubmit }) => {
  const maxLength15 = maxLengthCreator(15)
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group expense">
        <Field component={Input} name="Expenses" placeholder="Add Expense..." type="text" autoComplete="off" validate={[maxLength15]} />
        <Field component={Input} name="ExpensesAmount" placeholder="Amount" type="number" autoComplete="off" />
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

const IncomeReduxForm = reduxForm({
  form: "income"
})(IncomeForm);


const ExpensesReduxForm = reduxForm({
  form: "expenses"
})(ExpensesForm);


export default AddTransactions;
