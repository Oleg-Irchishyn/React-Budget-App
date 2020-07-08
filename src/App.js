import React from 'react';
import logo from './assets/images/logo.svg';
import styles from './App.module.scss'
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, bindActionCreators } from 'redux';
import *as appActions from './redux/reducers/appReducer';
import { initializeApp } from './redux/reducers/appReducer';
import { initializeAppSelector } from './redux/selectors/appSelectors';
import Preloader from './components/common/Preloader/Preloader';

/* React Lazy example
const DialogsContainer = React.lazy(() => import('./components/Dialogs/ProfileContainer'));
*/

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
      <div className={styles.App}>
        <img alt="App-logo" className={styles.AppLogo} src={logo} />
        <Switch>
          <Route path="*" render={() => <div>404 NOT FOUND</div>} />
          {/* <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)} /> - React Suspense example*/}
        </Switch>
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

