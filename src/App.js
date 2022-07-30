import './App.css';
import GetStarted from './components/get-started/GetStarted';
import SignUp from './components/signup/SignUp';
import SpalshScreen from './components/splashScreen/SpalshScreen';
import Success from './components/success/Success';

function App() {
  return (
    <div className="container mx-auto w-full h-full">
      {/* <SpalshScreen /> */}
      {/* <Success /> */}
      {/* <GetStarted /> */}
      <SignUp/>
    </div>
  );
}

export default App;
