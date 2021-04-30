import './App.css';
import Navbar from './components/Navbar';
import Table from './components/Table';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import RowDetails from './components/RowDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/users">
            <Table type="users" />
          </Route>

          <Route exact path="/products">
            <Table type="products" />
          </Route>

          <Route exact path="/users/:id">
            <RowDetails type="users" />
          </Route>

          <Route exact path="/products/:id">
            <RowDetails type="products" />
          </Route>
          <Redirect to="/users" />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
