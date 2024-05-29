import React from 'react'
import './seach.css'
type Props = {
    keyword: string,
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleButton: () => void
}

const SearchComp = ({keyword, handleButton, handleInput}: Props) => {
  return (
    <div className="search-container">
        <input className='search-input' type="text" onChange={handleInput} value={keyword} placeholder="type keywords..." />
        <button className='search-button'  onClick={handleButton} type='submit'>Generate</button>
    </div>
  )
}

export default SearchComp