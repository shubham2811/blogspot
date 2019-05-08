import React from 'react';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom';
import StreamList from './components/StreamList';
import StreamShow from './components/StreamShow';
function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Link to="/streamShow">to Stream Show</Link>
    <Link to="/">to Stream List</Link>
    <Switch>
                        <Route exact path="/"  component={StreamList} />
                        <Route exact path="/streamShow"  component={StreamShow} />
                        
                        </Switch>
                      </BrowserRouter>
    </div>
  );
}

export default App;
