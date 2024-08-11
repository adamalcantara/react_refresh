import React from 'react'

const Footer = ({ length }) => {
  return (
    <footer>
      {/* Utilize length from props, use a ternary to determine singular or plural */}
        <p>{length} List {length === 1 ? "Item" : "Items"}</p>
    </footer>
  )
}

export default Footer