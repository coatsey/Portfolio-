import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
<>
  <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/resume' component={Resume}/>
      <Route path='/projects' component={Projects}/>
      <Route path='/contact' component={Contact}/>
    </Switch>
  </Router>
</>
  );
}

export default App;

