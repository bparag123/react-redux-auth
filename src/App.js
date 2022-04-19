import './App.css';
import Header from './components/Header';
import Loginform from './components/LoginForm';
import { useSelector } from 'react-redux';

function App() {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  return (
    <div className="App">
      <Header />
      {!isLoggedIn && <Loginform />}
    </div>
  );
}

export default App;
