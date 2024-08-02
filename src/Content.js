import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        // array of names
        const names = ['Bob', 'Adam', 'Dave', 'Kevin'];

        // get a random number between 0 and 3
        const int = Math.floor(Math.random() * 4);

        // return the nth number (int) from names
        return names[int];
    }

    return (
        <main>
            <p>
                Hello {handleNameChange()}!
            </p>
        </main>
    )
}

export default Content