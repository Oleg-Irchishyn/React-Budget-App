import { createSelector } from "reselect";

const initializeApp = (state) => {
  return state.app.initialized;
}

/*Selectors, created by reselect library*/

export const initializeAppSelector = createSelector(
  initializeApp, (initializations) => {
    return initializations = true;
  }
)
