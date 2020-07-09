import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import appReducer from "./reducers/appReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import incomeReducer from "./reducers/incomeReducer";
import expenseReducer from "./reducers/expenseReducer";


let reducers = combineReducers({
  app: appReducer,
  income: incomeReducer,
  expense: expenseReducer,
  form: formReducer
});

const middlewares = [thunkMiddleware]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));

window.__store__ = store;
export default store;