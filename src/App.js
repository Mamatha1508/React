
import './App.css';
import Greet from './Components/Greet';
import WelcomeClass from './Components/WelcomeClass';
import GreetProps from './Components/GreetProps';
import GreetPropsClass from './Components/GreetPropsClass';

function App() {
  return (
    <div className="App">
      <Greet/>
      <WelcomeClass/>
      <GreetProps name='Mamatha'/>
      <GreetPropsClass name='M' />
    </div>
  );
}

export default App;
