import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const ItemList = ({ items, handleCheck, handleDelete }) => {
    return (
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
                        style={(item.checked) ? { textDecoration: 'line-through' } : null}
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
    )
}

export default ItemList