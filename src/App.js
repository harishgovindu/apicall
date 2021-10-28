
import About from './About';
import './App.css';
import Contact from './Contact';
import Lifecycle from './Lifecycle';
import Pratice from './Pratice';
import Clock from './Clock'
import React, { useEffect ,useState} from 'react';
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/todos").then(
      response => setData(response.data)
    )
     
    }, [])
   return(
    <div>
      <h1> <center>hello welcome world</center></h1>
      <About></About>
      <Pratice></Pratice>
      <Contact></Contact>
      <Lifecycle />
       <Clock></Clock>
       {data.map(item => <li key={item.id}> {item.title}</li>)}
    </div>
  );
}

export default App;
