import { Button } from 'antd';
import axios from 'axios';
import { useState } from 'react';

const App = () => {
  const [isConnected, setIsConnected] = useState(false);
  const toggle = () => {
    axios.get('http://localhost:8000/').then((res)=> {
      console.log(res);
      setIsConnected(true);
    }).catch((err) => {
      console.log(err);
    })
  }
  return (
    <span>
      <Button onClick={()=>toggle()}>Check Connection !</Button>
      {isConnected&& <span>You are connected to backend</span>}
    </span>
  );
 }

 export default App;