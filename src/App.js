import { Navbar } from './components/index';
import GlobalStyle from './styles/globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <GlobalStyle />
    </Router>
  );
}

export default App;
