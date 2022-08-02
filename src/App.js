import './App.css';
import SpalshScreen from './components/splashScreen/SpalshScreen';
import Success from './components/success/Success';
import GetStarted from './components/get-started/GetStarted';
import SignUp from './components/signup/SignUp';
import Login from "./components/login/Login";
import Congrats from './components/congrats/Congrats';
import UserType from './components/UserType/UserType';
import UserName from './components/UserName/UserName';
import Gender from './components/Gender/Gender';

import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container fluid>
      {/* <SpalshScreen /> */}
      {/* <Success /> */}
      {/* <GetStarted /> */}
      {/* <SignUp/> */}
      {/* <Login/> */}
      {/* <Congrats/> */}
      {/* <UserType/> */}
      {/* <UserName/> */}
      <Gender/>
    </Container>
  );
}

export default App;
