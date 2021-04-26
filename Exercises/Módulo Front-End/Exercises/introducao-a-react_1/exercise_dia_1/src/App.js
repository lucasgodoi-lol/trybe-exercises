// import logo from './logo.svg';
import './App.css';


const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const taskValue = ['Trabalhar', 'Estudar', 'Comer', 'Beber']


function App() {
 const value = taskValue.map(element => task(element))
  return (
   <ol>{value}</ol>
  );
}

export default App;
