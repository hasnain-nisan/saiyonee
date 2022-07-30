import './App.css';
import GetStarted from './components/get-started/GetStarted';
import SpalshScreen from './components/splashScreen/SpalshScreen';
import Success from './components/success/Success';

function App() {
  return (
    <div className="container mx-auto w-full h-full">
      {/* <SpalshScreen /> */}
      {/* <Success /> */}
      <GetStarted />
    </div>
  );
}

export default App;
