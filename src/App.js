import Navbar from './components/navbar'
import Backdrop from './components/backdrop'
import Sidedrawer from './components/sidedrawer'
import Products from './components/Products'
import {useState} from 'react'
import './App.css';
function App() {
  const [open, setOpener] = useState(false);
  function toggler(toggle){
    setOpener(toggle);
  }
  return (
    <div>
      <Navbar toggler={()=>toggler(true)}/>
      <Backdrop open={open} toggler={()=>toggler(false)}/>
      <Sidedrawer open = {open}/>
      <Products/>
    </div>
  );
}

export default App;
