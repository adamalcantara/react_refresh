import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({ item, handleCheck, handleDelete }) => {
    return (
        <li className='item'>
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
                // Accessibility for the trash can icon
                aria-label={`Delete ${item.item}`}
            />
        </li>
    )
}

export default LineItem