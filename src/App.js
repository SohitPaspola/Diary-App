import { useContext } from 'react';
import './App.css';
import List from './components/Display/List';
import Filter from './components/Filter/Filter';
import Header from './components/Header/Header';
import { DiaryContext } from './components/HOOK/MyContext';
import Input from './components/Input/Input';

function App() {

  const { showModal, showFilterModal,filterInputData } = useContext(DiaryContext);
  // console.log(filterInputData);
  
  return (
    <div className="App">
      <Header></Header>
      {showModal && <Input></Input>}
      {showFilterModal && <Filter></Filter>}
      <List></List>
    </div>
  );
}

export default App;
