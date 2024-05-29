import React from 'react'
import './card.css'
type Props = {
    name : string
}

const Card = ({name}: Props) => {
    const url = `https://namecheap.com/domains/registration/results/?domain=${name}`;
  return (
    <a href={url} rel="noopener noreferrer" target="_blank" className="card-link">
        <li className="result-name-card">
        <p className="result-name">{name}</p>
        </li>
    </a>
  )
}

export default Card