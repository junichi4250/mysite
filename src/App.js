import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Containers/Home';
import Skill from './Containers/Skill';
import Work from './Containers/Work';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
      <BrowserRouter basename='/jun'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Skill' component={Skill} />
          <Route exact path='/Work' component={Work} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
