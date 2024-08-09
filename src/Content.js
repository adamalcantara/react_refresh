import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
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

    return (
        <main>
            {items.length ? (
                <ul>
                    {/* Map over the items and display them on the page as indicated */}
                    {items.map((item) => (
                        <li className='item' key={item.id}>
                            <input
                                type="checkbox"
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked}
                            />
                            <label
                                // Check the item on double click
                                onDoubleClick={() => handleCheck(item.id)}

                                // strike through the item if it is checked
                                style={(item.checked) ? {textDecoration: 'line-through'} : null}
                            >{item.item}</label>
                            <FaTrashAlt 
                                // run delete function on click
                                onClick={() => handleDelete(item.id)}
                                role='button' 
                                tabIndex='0' 
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
            ) }
        </main>
    )
}

export default Content