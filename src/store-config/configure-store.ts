import { applyMiddleware, compose, createStore } from "redux";
import ReduxThunk from 'redux-thunk';
import { rootReducer } from "./rootReducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunk)));

store.subscribe(() => localStorage.setItem('redux-store-config', JSON.stringify(store.getState())))

export default store;