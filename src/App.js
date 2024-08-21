import React, { useState, useEffect } from 'react';
import Header from './Header';
import SearchItem from './SearchItem';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')));
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log('updating items state');
  }, [items])

  const setAndSaveItems = (newItems) => {
    // set the state to the new array
    setItems(newItems);

    // Save the checked items to local storage
    localStorage.setItem('shoppinglist', JSON.stringify(newItems));
  }

  const addItem = (item) => {
    // increment item id by getting the id of the last item and adding 1 to it
    const id = items.length ? items[items.length - 1].id + 1 : 1;

    const myNewItem = { id, checked: false, item };

    // Create a new array to update state with
    const listItems = [...items, myNewItem];

    // set the state to the new array
    setAndSaveItems(listItems);
  }

  // Function to make an item checked
  const handleCheck = (id) => {

    // map over items, then set the item's checked state to the opposite of what it currently is
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);

    // set the state to the new array
    setAndSaveItems(listItems);
  }

  const handleDelete = (id) => {
    // creating a new array that has filtered out the id whose trash can was clicked
    const listItems = items.filter((item) => item.id !== id)

    // set the state to the new array
    setAndSaveItems(listItems);
  }

  const handleSubmit = (e) => {
    // Prevent page reload
    e.preventDefault();

    // If there isn't a new item, just exit the function
    if(!newItem) return;

    // call the addItem function
    addItem(newItem);

    // Reset the state
    setNewItem('');
  }

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem 
        search={search}
        setSearch={setSearch}
      />
      <Content 
        // Filter items and change to lower case for searchability
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck} 
        handleDelete={handleDelete} 
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
