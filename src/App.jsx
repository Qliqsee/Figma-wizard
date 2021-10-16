import './app.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/*' exact component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
