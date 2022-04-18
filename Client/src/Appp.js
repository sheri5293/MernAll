import './App.css';
import Header from './Components/Header';
import Addkeeper from './Components/AddKeeper';
import ShowKepper from './Components/ShowKepper';
import { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';
const App = () => {
  const history = useHistory();

  const [keeperList, setKeeperList] = useState([]); 




  const getAll = async () => {
    try {
      const res = await fetch('/getAll', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include', //to send cookies to server//
      });
      const data = await res.json();
      console.log(data);
      setKeeperList(data);
    }catch(e){
      console.log(e);
      history.push('/login');
    }
  }
  useEffect(() => {
    
getAll();

    }, []);
  return (                          // to show list of keepers//
    <div className='App'>
    <Header/>
    <Addkeeper keeperList={keeperList} setKeeperList={setKeeperList} />
    <ShowKepper keeperList={keeperList} setKeeperList={setKeeperList} getAllcallback={() =>getAll()}/>                   
    </div>
  );

}

export default App