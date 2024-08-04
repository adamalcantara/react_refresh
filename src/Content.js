import React, { useState } from 'react';

const Content = () => {
    const [name, setName] = useState('Dave');
    const [count, setCount] = useState(0);

    const handleNameChange = () => {
        // array of names
        const names = ['Bob', 'Adam', 'Dave', 'Kevin'];

        // get a random number between 0 and 3
        const int = Math.floor(Math.random() * 4);

        // return the nth number (int) from names and set the name state to it
        setName(names[int]);
    }

    const handleClick = () => {
        setCount(count + 1);
        setCount(count + 1);
        console.log(count);
    }
    const handleClick2 = (name) => {
        console.log(count);
    }

    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {name}!
            </p>
            <button onClick={handleNameChange}>Change Name</button>
            <button onClick={handleClick}>Click It</button>
            <button onClick={handleClick2}>Click It</button>
        </main>
    )
}

export default Content