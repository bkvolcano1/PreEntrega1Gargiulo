import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/Navbar/Navbar';

import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Body from './componentes/Body/Body';
function App() {
  return (
    <div className="App">
      
      <Navbar/>
      

      <ItemListContainer greeting='Le damos la bienvenida'/>
      <Body/>
     
    </div>
  );
}

export default App;
