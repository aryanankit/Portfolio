import { useState } from "react";
import useMediaQuery from './hooks/useMediaQuery'
import Navbar from "./scenes/Navbar";

const App = () => {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')
  console.log(isAboveMediumScreens);
  return (
    <div className='app bg-deep-blue'>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
 }

 export default App;