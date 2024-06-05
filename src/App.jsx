import { useState } from 'react';
import AddCategory from './coimponents/AddCategory'; 
import DisplayGifs from './coimponents/DisplayGifs'; // Corregido
import './App.css';
import Footer from './coimponents/Footer';
import Intro from './coimponents/Intro';


function App() {
  const [category, setCategory] = useState('');

  return (
    <div className='App'>
      <main className='paquete'>
        <Intro />
        <AddCategory setCategory={setCategory} />
        <DisplayGifs category={category} />
        <Footer  />
      </main>
    </div>
  );
}

export default App;
