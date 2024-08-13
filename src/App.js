import React, { useState } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "One half pound bag of Cocoa Covered Almonds Unsalted"
    },
    {
      id: 2,
      checked: false,
      item: "Item 2"
    },
    {
      id: 3,
      checked: false,
      item: "Item 3"
    },
  ]);
  const [newItem, setNewItem] = useState('');

  // Function to make an item checked
  const handleCheck = (id) => {

    // map over items, then set the item's checked state to the opposite of what it currently is
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);

    // set the state to the new array
    setItems(listItems);

    // Save the checked items to local storage
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    // creating a new array that has filtered out the id whose trash can was clicked
    const listItems = items.filter((item) => item.id !== id)

    // set the state to the new array
    setItems(listItems);

    // Save the checked items to local storage
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  const handleSubmit = (e) => {
    // Prevent page reload
    e.preventDefault();
    console.log('submitted');
  }

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content 
        items={items}
        handleCheck={handleCheck} 
        handleDelete={handleDelete} 
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
