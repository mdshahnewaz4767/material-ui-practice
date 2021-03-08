import './App.css';
import Cart from './components/Cart/Cart';
import Check from './components/Check/Check';
import Input from './components/Input/Input';

function App() {
  return (
    <div className="material" style={{textAlign: 'center'}}>
      <Input></Input>
      <Cart></Cart>
      <Check></Check>
    </div>
  );
}

export default App;
