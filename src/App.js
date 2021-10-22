import './App.css';
import Chat from './components/Chat';
import SignIn from './components/SignIn';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth } from './firebase.js'
function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <h1>Hello chat!</h1>

      {user ?<Chat /> : <SignIn/> }
      
      
    </div>
  );
}

export default App;
