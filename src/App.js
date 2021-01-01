import React, {useState } from 'react';
import Header from './components/Header';
import Splash from './components/Splash';
import MovingList from './components/MovingList';
import ItemDetail from './components/ItemDetail';
import NewItemForm from './components/NewItemForm';
import Navbar from './components/Navbar';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';
import ChecklistContextProvider from './contexts/ChecklistContext';

function App() {
  const [checklistVisible, setChecklistVisible ] = useState(true)
  const [formVisible, setFormVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null);

  const leftIcon = formVisible ? <ArrowBackIosIcon onClick={ () => setFormVisible(false) }/> : selectedItem ? 
    <ArrowBackIosIcon onClick={ () => setSelectedItem(null) }/>: checklistVisible ? 
    <ArrowBackIosIcon onClick={ () => setChecklistVisible(false) }/> : <ListIcon  onClick={ () => setChecklistVisible(true) }/>;

  const rightIcon = formVisible || selectedItem ? <AddIcon className="hiddenAddIcon" /> : checklistVisible ? 
    <AddIcon onClick={ () => setFormVisible(true) }/>: <AddIcon className="hiddenAddIcon" />;

  const headerText = formVisible ? "Add New Item" : selectedItem ? selectedItem.name : checklistVisible ? "Moving Checklist" : "My Move";

  const visibleBody = formVisible ? <NewItemForm setFormVisible={setFormVisible}/> : selectedItem ? 
    <ItemDetail item={selectedItem} setSelectedItem={setSelectedItem} />: checklistVisible ? 
    <MovingList setSelectedItem={setSelectedItem} /> : <Splash />;

  return (
    <div className="App">
      <ChecklistContextProvider>
        <Header leftIcon={leftIcon} headerText={headerText} rightIcon={rightIcon} />
        {visibleBody}
        <Navbar />
      </ChecklistContextProvider>
    </div>
  );
}

export default App;