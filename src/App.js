import './App.css';
import SpalshScreen from './components/splashScreen/SpalshScreen';
import Success from './components/success/Success';
import GetStarted from './components/get-started/GetStarted';
import SignUp from './components/signup/SignUp';
import Login from "./components/login/Login";
import Congrats from './components/congrats/Congrats';

import Container from 'react-bootstrap/Container';
import UserType from './components/UserType/UserType';


function App() {
  return (
    <Container fluid>
      {/* <SpalshScreen /> */}
      {/* <Success /> */}
      {/* <GetStarted /> */}
      {/* <SignUp/> */}
      {/* <Login/> */}
      {/* <Congrats/> */}
      <UserType/>
    </Container>
  );
}

export default App;
