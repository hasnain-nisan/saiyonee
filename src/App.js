import './App.css';
import SpalshScreen from './components/splashScreen/SpalshScreen';
import Success from './components/success/Success';
import GetStarted from './components/get-started/GetStarted';
import SignUp from './components/signup/SignUp';
import Login from "./components/login/Login";
import Congrats from './components/congrats/Congrats';


function App() {
  return (
    <div className="container mx-auto w-full h-[100vh]">
      {/* <SpalshScreen /> */}
      {/* <Success /> */}
      {/* <GetStarted /> */}
      {/* <SignUp/> */}
      {/* <Login/> */}
      <Congrats/>
    </div>
  );
}

export default App;
