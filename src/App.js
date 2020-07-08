import React from 'react';
import './App.scss'
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, bindActionCreators } from 'redux';
import *as appActions from './redux/reducers/appReducer';
import { initializeApp } from './redux/reducers/appReducer';
import { initializeAppSelector } from './redux/selectors/appSelectors';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
  componentDidMount() {
    initializeApp();
  }
  render() {
    const { initialized } = this.props;
    if (!initialized) {
      return <Preloader />
    }
    return (
      <div className="container">
        <div className="app-wrapper">
          <h1>App</h1>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: initializeAppSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(appActions, dispatch)
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter)
  (App);
