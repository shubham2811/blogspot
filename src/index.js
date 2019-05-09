import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

class Root extends React.Component {
    constructor(props) {
      super(props)
      this.store = createStore(
        reducers,
        composeEnhancers(applyMiddleware(reduxThunk))
    );
    
    }
  
    render() {
      return (
        <Provider store={this.store}>
          <App />
        </Provider>
      )
    }
  }
  // ReactDOM.render(<StreamApp />, document.getElementById('root'));
  export default Root;



