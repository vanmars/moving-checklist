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
  const [checklistVisible, setChecklistVisible ] = useState(false)
  const [formVisible, setFormVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null);

  // Conditional Rendering
  const leftIcon = formVisible ? <ArrowBackIosIcon onClick={ () => setFormVisible(false) } className="header-icon" /> : selectedItem ? 
    <ArrowBackIosIcon onClick={ () => setSelectedItem(null) } className="header-icon" />: checklistVisible ? 
    <ArrowBackIosIcon onClick={ () => setChecklistVisible(false) } className="header-icon"/> : <ListIcon  onClick={ () => setChecklistVisible(true) } className="header-icon"/>;

  const rightIcon = formVisible || selectedItem ? <AddIcon className="hiddenAddIcon" /> : checklistVisible ? 
    <AddIcon onClick={ () => setFormVisible(true) } className="header-icon" />: <AddIcon className="hiddenAddIcon" />;

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