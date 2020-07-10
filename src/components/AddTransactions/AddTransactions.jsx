import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormControls/FormControls';
import { maxLengthCreator, required } from '../../redux/utils/validators/validatos';
import { v4 as uuidv4 } from 'uuid';

const AddTransactions = ({ addIncome }) => {

  const onSubmitIncome = (values) => {
    const newIncomeTransaction = {
      id: uuidv4(),
      IncomeText: values.IncomeText,
      IncomeAmount: values.IncomeAmount * 1
    }
    addIncome(newIncomeTransaction)
  }
  const onExpensesFormSubmit = (formData) => {
    console.log(formData.ExpensesText, formData.ExpensesAmount)
  }
  return (
    <div className="form-wrapper">
      <IncomeReduxForm onSubmit={onSubmitIncome} />
      <ExpensesReduxForm onSubmit={onExpensesFormSubmit} />
    </div>
  )
}

const IncomeFormvalidators = [required, maxLengthCreator(100)];

const IncomeForm = React.memo(({ handleSubmit }) => {
  const [income, setIncome] = useState({
    IncomeText: '',
    IncomeAmount: 0
  })
  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value })
    console.log(income);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group income">
        <Field component={Input} name="IncomeText" placeholder="Add Income..."
          type="text" autoComplete="off" onChange={onChangeIncome}
          validate={IncomeFormvalidators} />
        <Field component={Input} name="IncomeAmount" placeholder="Amount" type="number"
          autoComplete="off" onChange={onChangeIncome} />
        <button type="submit">Submit</button>
      </div>
    </form>
  )
})

const ExpenseFormvalidators = [required, maxLengthCreator(100)];

const ExpensesForm = React.memo(({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group expense">
        <Field component={Input} name="ExpensesText" placeholder="Add Expense..." type="text" autoComplete="off" validate={ExpenseFormvalidators} />
        <Field component={Input} name="ExpensesAmount" placeholder="Amount" type="number" autoComplete="off" />
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

export default AddTransactions;
